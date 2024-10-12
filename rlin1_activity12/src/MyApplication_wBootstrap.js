import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [dataF, setDataF] = useState({});
  const [viewer, setViewer] = useState(0);

  return (
    <div>
      {viewer === 0 ? (
        <Payment setDataF={setDataF} setViewer={setViewer} />
      ) : (
        <Summary dataF={dataF} setDataF={setDataF} setViewer={setViewer} />
      )}
    </div>
  );
}

function Payment({ setDataF, setViewer }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.fullName);
    setDataF(data);
    setViewer(1);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            {...register("fullName", { required: true })}
            placeholder="Full Name"
            className="form-control"
          />
          {errors.fullName && (
            <p className="text-danger">Full Name is required.</p>
          )}
        </div>
        <div className="form-group">
          <input
            {...register("creditCard", { required: true })}
            placeholder="Email"
            className="form-control"
          />
          {errors.email && <p className="text-danger">Email is required.</p>}
        </div>
        <div className="form-group">
          <input
            {...register("creditCard", { required: true })}
            placeholder="Credit Card"
            className="form-control"
          />
          {errors.creditCard && (
            <p className="text-danger">Credit Card is required.</p>
          )}
        </div>
        <div className="form-group">
          <input
            {...register("address", { required: true })}
            placeholder="Address"
            className="form-control"
          />
          {errors.address && (
            <p className="text-danger">Address is required.</p>
          )}
        </div>
        <div className="form-group">
          <input
            {...register("address2")}
            placeholder="Address 2"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            {...register("city", { required: true })}
            placeholder="City"
            className="form-control"
          />
          {errors.city && <p className="text-danger">City is required.</p>}
        </div>
        <div className="form-group">
          <input
            {...register("state", { required: true })}
            placeholder="State"
            className="form-control"
          />
          {errors.state && <p className="text-danger">State is required.</p>}
        </div>
        <div className="form-group">
          <input
            {...register("zip", { required: true })}
            placeholder="Zip"
            className="form-control"
          />
          {errors.zip && <p className="text-danger">Zip is required.</p>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

function Summary({ dataF, setViewer, setDataF }) {
  const updateHooks = () => {
    setViewer(0);
    setDataF({});
  };

  return (
    <div className="container mt-5">
      <h1>Payment Summary:</h1>
      <h3>Name: {dataF.fullName}</h3>
      <p>Email: {dataF.email}</p>
      <p>Credit Card: {dataF.creditCard}</p>
      <p>Address: {dataF.address}</p>
      <p>Address 2: {dataF.address2}</p>
      <p>City: {dataF.city}</p>
      <p>State: {dataF.state}</p>
      <p>Zip: {dataF.zip}</p>
      <button onClick={updateHooks} className="btn btn-secondary">
        Submit
      </button>
    </div>
  );
}

export default App;
