//1. arrow function which returns the product of two numbers

const product = (a,b) => a * b;
console.log(product(5,10));


//2. create a student object

const student = {
    name: 'Rakshitha',
    age: 22,
    // This will become the method of this object
    greet() {
        console.log('Hi , I am ' + this.name);
    }
}

student.greet();

