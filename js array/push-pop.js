const numbers = [12, 87, 98, 45];
const ages = [];

console.log(numbers);

// for entering elements in a array (push)
numbers.push(44);
numbers.push(65);
numbers.push(99);
numbers.push(100, 101, 102);

console.log(numbers);

const friends = ['balam', 'kalam', 'salam'];
friends.push('kahilam');
console.log(friends);

// for removing last element of the array (pop)
friends.pop();
console.log(friends);

const out1 = friends.pop();
console.log(friends);

const out2 = friends.pop();
console.log(friends);

console.log(out1, out2); // for placing the removed values into a new variable.
