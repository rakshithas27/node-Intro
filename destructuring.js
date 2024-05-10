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

const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

let { key1, key3} = obj1



key1 = 20;

key3 = 123

console.log(obj1.key1, obj1.key3)


