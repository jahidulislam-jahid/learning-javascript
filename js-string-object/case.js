const school = 'RAJ UK model ScHoOl';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

// uppercase : ABCDEFG
// lowercase : abcdefg

const subject = 'chemistry';
const book = 'CHEMISTRY';

if (subject.toLowerCase() === book.toLowerCase()) {
    console.log('I am reading book');
}
else {
    console.log('Hudai Pera');
}


const drink = 'Water';
const liquid = ' water ';

if (drink.trim() === liquid.trim()) {
    console.log('Pani er opor name Life');
}
else {
    console.log('Salt Water');
}