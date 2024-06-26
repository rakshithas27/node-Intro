//Destructuring Objects: Elements are pulled by property name

const person = {
    name: 'Rakshitha',
    age: 22,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
}

const printName = ({name}) => {
    console.log(name);
}
printName(person);

const { name, age } = person;
console.log(name,age);

//Destructuring Arrays: Elements are pulled by positions/index

const hobbies = ['Reading Novels', 'Gardening', 'Painting'];
const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);



