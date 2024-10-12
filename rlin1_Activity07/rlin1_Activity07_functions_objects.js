// Exercise 1
function maxOfTwo(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

let n1 = 11;
let n2 = 10;

console.log(`The max between ${n1} and ${n2} is :`, maxOfTwo(n1,n2));

// Exercise 2
function maxOfArray(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

let array = [10,11,1024,125,9,201];

console.log(maxOfArray(array));

// Exercise 3
function showProperties(movie) {
    console.log('List of Keys:');
    for (let key in movie) {
        console.log(key);
    }
    
    console.log('List of Values:');
    for (let key in movie) {
        console.log(movie[key]);
    }
}

const movie = {
    title : 'Some movie',
    releaseYear: 2018,
    rating: 4.5,
    director: 'Steven Spielberg'
    };
    showProperties(movie);

// Exercise 4
const circle = {
    radius: 2,
    area: function() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area());

// Exercise 5
const circle2 = {
    radius: 2,
    get radiusValue () {
        return this.radius;
    },
    set radiusValue(value) {
        this.radius = value;
    },
    area: function() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(`Area with ${circle2.radiusValue} :`,circle2.area());
circle2.radiusValue = 3;
console.log(`Area with ${circle2.radiusValue} :`,circle2.area());

// Exercise 6
const circle3 = {
    radius: 2,
    getRadiusValue: function() {
        return this.radius;
    },
    setRadiusValue: function(value) {
        this.radius = value;
    },
    area: function() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(`Area with ${circle3.getRadiusValue()} :`,circle3.area());
circle3.setRadiusValue(3);
console.log(`Area with ${circle3.getRadiusValue()} :`,circle3.area());
