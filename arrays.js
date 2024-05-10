/*const hobbies = ['Sketching', 'Gardening', 'Reading Novels']

//There are lot of methods to iterate over array

//1st Method
for(let hobby of hobbies) {
    console.log(hobby);
}

//2nd Method
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);*/

const fruits = ['apple', 'orange', '', 'mango', '', 'lemon'];

const newFruits = fruits.map(fruit  => {
    if(fruit === '') {
        return 'empty string';
    } else {
        return fruit
    }
})

console.log(newFruits);
console.log(fruits);



