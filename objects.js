let person = {
    name: 'Xavier',
    age: 19
};

person.name = 'John';

let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);