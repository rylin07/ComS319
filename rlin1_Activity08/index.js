function appendData(data) {
    let mainContainer = document.getElementById("myData1");
    let div = document.createElement("div");
    div.innerHTML = `<br>
    <h1> Superhero : </h1>
    Firstname : ${data.firstName} <br>
    Lastname : ${data.lastName} <br>
    Job : ${data.job} <br>
    Roll : ${data.roll}`;
    mainContainer.appendChild(div);
}

function appendMoreData(data) {
    let mainContainer = document.getElementById("myData2");
    for (let person of data) {
        console.log(person);
        let div = document.createElement("div");
        div.innerHTML = `<br>
        <h1> Superhero : </h1>
        Firstname : ${person.firstName} <br>
        Lastname : ${person.lastName} <br>
        Job : ${person.job} <br>
        Roll : ${person.roll}`;
        mainContainer.appendChild(div);
    }
}

function appendMoreData(data) {
    let mainContainer = document.getElementById("myData2");
    for (let person of data) {
        console.log(person);
        let div = document.createElement("div");
        div.innerHTML = `<br>
<h1> Superhero : </h1>
Firstname : ${person.firstName} <br>
Lastname : ${person.lastName} <br>
Job : ${person.job} <br>
Roll : ${person.roll}`;
        mainContainer.appendChild(div);
    }
}

fetch('./person1.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.firstName);
        console.log(data["firstName"]);
        appendData(data);
    })
    .catch(function (err) {
        console.log('error:' + err);
    })

fetch('./persons.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendMoreData(data);
    })
    .catch(function (err) {
        console.log('error:' + err);
    })