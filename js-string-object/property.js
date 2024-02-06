const person = {
    name: 'Sadar Uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

//console.log(person);

// dot notation --> dot symbol diye object er property value access kora
//console.log(person.profession);
const income = person.salary;
//console.log(income);


// bracket notation --> third bracket diye access kora

console.log(person['age']);
const boyosh = person['age'];
console.log(boyosh);

console.log(person["fav places"]);

const keyName ='profession';
console.log(person.[keyName]);


