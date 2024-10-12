//Author: Ryan Lin
//ISU Netid : rlin1@iastate.edu
//Date : Feb 9th, 2024

// Activity 06 Javacript using Iris dataset

// data set is ordered by Class
const iris = "Sepal.Length,Sepal.Width,Petal.Length,Petal.Width,Class\n\
5.1,3.5,1.4,0.2,Iris-setosa\n\
4.9,3.0,1.4,0.2,Iris-setosa\n\
4.7,3.2,1.3,0.2,Iris-setosa\n\
4.6,3.1,1.5,0.2,Iris-setosa\n\
5.0,3.6,1.4,0.2,Iris-setosa\n\
5.4,3.9,1.7,0.4,Iris-setosa\n\
4.6,3.4,1.4,0.3,Iris-setosa\n\
5.0,3.4,1.5,0.2,Iris-setosa\n\
4.4,2.9,1.4,0.2,Iris-setosa\n\
4.9,3.1,1.5,0.1,Iris-setosa\n\
5.4,3.7,1.5,0.2,Iris-setosa\n\
4.8,3.4,1.6,0.2,Iris-setosa\n\
4.8,3.0,1.4,0.1,Iris-setosa\n\
4.3,3.0,1.1,0.1,Iris-setosa\n\
5.8,4.0,1.2,0.2,Iris-setosa\n\
5.7,4.4,1.5,0.4,Iris-setosa\n\
5.4,3.9,1.3,0.4,Iris-setosa\n\
5.1,3.5,1.4,0.3,Iris-setosa\n\
5.7,3.8,1.7,0.3,Iris-setosa\n\
5.1,3.8,1.5,0.3,Iris-setosa\n\
5.4,3.4,1.7,0.2,Iris-setosa\n\
5.1,3.7,1.5,0.4,Iris-setosa\n\
4.6,3.6,1.0,0.2,Iris-setosa\n\
5.1,3.3,1.7,0.5,Iris-setosa\n\
4.8,3.4,1.9,0.2,Iris-setosa\n\
5.0,3.0,1.6,0.2,Iris-setosa\n\
5.0,3.4,1.6,0.4,Iris-setosa\n\
5.2,3.5,1.5,0.2,Iris-setosa\n\
5.2,3.4,1.4,0.2,Iris-setosa\n\
4.7,3.2,1.6,0.2,Iris-setosa\n\
4.8,3.1,1.6,0.2,Iris-setosa\n\
5.4,3.4,1.5,0.4,Iris-setosa\n\
5.2,4.1,1.5,0.1,Iris-setosa\n\
5.5,4.2,1.4,0.2,Iris-setosa\n\
4.9,3.1,1.5,0.1,Iris-setosa\n\
5.0,3.2,1.2,0.2,Iris-setosa\n\
5.5,3.5,1.3,0.2,Iris-setosa\n\
4.9,3.1,1.5,0.1,Iris-setosa\n\
4.4,3.0,1.3,0.2,Iris-setosa\n\
5.1,3.4,1.5,0.2,Iris-setosa\n\
5.0,3.5,1.3,0.3,Iris-setosa\n\
4.5,2.3,1.3,0.3,Iris-setosa\n\
4.4,3.2,1.3,0.2,Iris-setosa\n\
5.0,3.5,1.6,0.6,Iris-setosa\n\
5.1,3.8,1.9,0.4,Iris-setosa\n\
4.8,3.0,1.4,0.3,Iris-setosa\n\
5.1,3.8,1.6,0.2,Iris-setosa\n\
4.6,3.2,1.4,0.2,Iris-setosa\n\
5.3,3.7,1.5,0.2,Iris-setosa\n\
5.0,3.3,1.4,0.2,Iris-setosa\n\
7.0,3.2,4.7,1.4,Iris-versicolor\n\
6.4,3.2,4.5,1.5,Iris-versicolor\n\
6.9,3.1,4.9,1.5,Iris-versicolor\n\
5.5,2.3,4.0,1.3,Iris-versicolor\n\
6.5,2.8,4.6,1.5,Iris-versicolor\n\
5.7,2.8,4.5,1.3,Iris-versicolor\n\
6.3,3.3,4.7,1.6,Iris-versicolor\n\
4.9,2.4,3.3,1.0,Iris-versicolor\n\
6.6,2.9,4.6,1.3,Iris-versicolor\n\
5.2,2.7,3.9,1.4,Iris-versicolor\n\
5.0,2.0,3.5,1.0,Iris-versicolor\n\
5.9,3.0,4.2,1.5,Iris-versicolor\n\
6.0,2.2,4.0,1.0,Iris-versicolor\n\
6.1,2.9,4.7,1.4,Iris-versicolor\n\
5.6,2.9,3.6,1.3,Iris-versicolor\n\
6.7,3.1,4.4,1.4,Iris-versicolor\n\
5.6,3.0,4.5,1.5,Iris-versicolor\n\
5.8,2.7,4.1,1.0,Iris-versicolor\n\
6.2,2.2,4.5,1.5,Iris-versicolor\n\
5.6,2.5,3.9,1.1,Iris-versicolor\n\
5.9,3.2,4.8,1.8,Iris-versicolor\n\
6.1,2.8,4.0,1.3,Iris-versicolor\n\
6.3,2.5,4.9,1.5,Iris-versicolor\n\
6.1,2.8,4.7,1.2,Iris-versicolor\n\
6.4,2.9,4.3,1.3,Iris-versicolor\n\
6.6,3.0,4.4,1.4,Iris-versicolor\n\
6.8,2.8,4.8,1.4,Iris-versicolor\n\
6.7,3.0,5.0,1.7,Iris-versicolor\n\
6.0,2.9,4.5,1.5,Iris-versicolor\n\
5.7,2.6,3.5,1.0,Iris-versicolor\n\
5.5,2.4,3.8,1.1,Iris-versicolor\n\
5.5,2.4,3.7,1.0,Iris-versicolor\n\
5.8,2.7,3.9,1.2,Iris-versicolor\n\
6.0,2.7,5.1,1.6,Iris-versicolor\n\
5.4,3.0,4.5,1.5,Iris-versicolor\n\
6.0,3.4,4.5,1.6,Iris-versicolor\n\
6.7,3.1,4.7,1.5,Iris-versicolor\n\
6.3,2.3,4.4,1.3,Iris-versicolor\n\
5.6,3.0,4.1,1.3,Iris-versicolor\n\
5.5,2.5,4.0,1.3,Iris-versicolor\n\
5.5,2.6,4.4,1.2,Iris-versicolor\n\
6.1,3.0,4.6,1.4,Iris-versicolor\n\
5.8,2.6,4.0,1.2,Iris-versicolor\n\
5.0,2.3,3.3,1.0,Iris-versicolor\n\
5.6,2.7,4.2,1.3,Iris-versicolor\n\
5.7,3.0,4.2,1.2,Iris-versicolor\n\
5.7,2.9,4.2,1.3,Iris-versicolor\n\
6.2,2.9,4.3,1.3,Iris-versicolor\n\
5.1,2.5,3.0,1.1,Iris-versicolor\n\
5.7,2.8,4.1,1.3,Iris-versicolor\n\
6.3,3.3,6.0,2.5,Iris-virginica\n\
5.8,2.7,5.1,1.9,Iris-virginica\n\
7.1,3.0,5.9,2.1,Iris-virginica\n\
6.3,2.9,5.6,1.8,Iris-virginica\n\
6.5,3.0,5.8,2.2,Iris-virginica\n\
7.6,3.0,6.6,2.1,Iris-virginica\n\
4.9,2.5,4.5,1.7,Iris-virginica\n\
7.3,2.9,6.3,1.8,Iris-virginica\n\
6.7,2.5,5.8,1.8,Iris-virginica\n\
7.2,3.6,6.1,2.5,Iris-virginica\n\
6.5,3.2,5.1,2.0,Iris-virginica\n\
6.4,2.7,5.3,1.9,Iris-virginica\n\
6.8,3.0,5.5,2.1,Iris-virginica\n\
5.7,2.5,5.0,2.0,Iris-virginica\n\
5.8,2.8,5.1,2.4,Iris-virginica\n\
6.4,3.2,5.3,2.3,Iris-virginica\n\
6.5,3.0,5.5,1.8,Iris-virginica\n\
7.7,3.8,6.7,2.2,Iris-virginica\n\
7.7,2.6,6.9,2.3,Iris-virginica\n\
6.0,2.2,5.0,1.5,Iris-virginica\n\
6.9,3.2,5.7,2.3,Iris-virginica\n\
5.6,2.8,4.9,2.0,Iris-virginica\n\
7.7,2.8,6.7,2.0,Iris-virginica\n\
6.3,2.7,4.9,1.8,Iris-virginica\n\
6.7,3.3,5.7,2.1,Iris-virginica\n\
7.2,3.2,6.0,1.8,Iris-virginica\n\
6.2,2.8,4.8,1.8,Iris-virginica\n\
6.1,3.0,4.9,1.8,Iris-virginica\n\
6.4,2.8,5.6,2.1,Iris-virginica\n\
7.2,3.0,5.8,1.6,Iris-virginica\n\
7.4,2.8,6.1,1.9,Iris-virginica\n\
7.9,3.8,6.4,2.0,Iris-virginica\n\
6.4,2.8,5.6,2.2,Iris-virginica\n\
6.3,2.8,5.1,1.5,Iris-virginica\n\
6.1,2.6,5.6,1.4,Iris-virginica\n\
7.7,3.0,6.1,2.3,Iris-virginica\n\
6.3,3.4,5.6,2.4,Iris-virginica\n\
6.4,3.1,5.5,1.8,Iris-virginica\n\
6.0,3.0,4.8,1.8,Iris-virginica\n\
6.9,3.1,5.4,2.1,Iris-virginica\n\
6.7,3.1,5.6,2.4,Iris-virginica\n\
6.9,3.1,5.1,2.3,Iris-virginica\n\
5.8,2.7,5.1,1.9,Iris-virginica\n\
6.8,3.2,5.9,2.3,Iris-virginica\n\
6.7,3.3,5.7,2.5,Iris-virginica\n\
6.7,3.0,5.2,2.3,Iris-virginica\n\
6.3,2.5,5.0,1.9,Iris-virginica\n\
6.5,3.0,5.2,2.0,Iris-virginica\n\
6.2,3.4,5.4,2.3,Iris-virginica\n\
5.9,3.0,5.1,1.8,Iris-virginica";

//  ----  INIT -----
// setosa
let setosa_sepal_Length = 0;
let setosa_sepal_Width = 0;    
let setosa_petal_Length = 0;   
let setosa_petal_Width = 0;
let setosa_count = 0;
// versicolor
let versicolor_sepal_Length = 0;
let versicolor_sepal_Width = 0;    
let versicolor_petal_Length = 0;   
let versicolor_petal_Width = 0;
let versicolor_count = 0;
// virginica
let virginica_sepal_Length = 0;
let virginica_sepal_Width = 0;    
let virginica_petal_Length = 0;   
let virginica_petal_Width = 0;
let virginica_count = 0;

// Converts raw CSV data into an array of objects, each representing a flower with attributes.
function split_and_matrix(matrix) {
    return matrix.split('\n').slice(1).map(row => {
      const columns = row.split(',');
      return {
        sepalLength: parseFloat(columns[0]),
        sepalWidth: parseFloat(columns[1]),
        petalLength: parseFloat(columns[2]),
        petalWidth: parseFloat(columns[3]),
        class: columns[4]
      };
    });
  }

  // Computes the average values for sepal length, sepal width, petal length, and petal width for each iris class.
  function computeAverages(data) {
    const summary = {};

    data.forEach(flower => {
        const className = flower.class;
        if (!summary[className]) {
            summary[className] = { ...flower, count: 1 };
            delete summary[className].class;
        } else {
            summary[className].sepalLength += flower.sepalLength;
            summary[className].sepalWidth += flower.sepalWidth;
            summary[className].petalLength += flower.petalLength;
            summary[className].petalWidth += flower.petalWidth;
            summary[className].count++;
        }
    });

    // Convert the summary into an array of arrays for table structure
    const table = [['iris', '#', 'Sepal_L', 'Sepal_W', 'Petal_L', 'Petal_W']];

    Object.keys(summary).forEach((classKey, index) => {
        const averages = summary[classKey];
        table.push([
            classKey,
            averages.count,
            (averages.sepalLength / averages.count).toFixed(2),
            (averages.sepalWidth / averages.count).toFixed(2),
            (averages.petalLength / averages.count).toFixed(2),
            (averages.petalWidth / averages.count).toFixed(2)
        ]);
    });

    return table;
}

// Call functions
const matrix = split_and_matrix(iris);
const iristable = computeAverages(matrix);

// create a table
console.log("IRIS STATISTICS :");
console.table(iristable);

