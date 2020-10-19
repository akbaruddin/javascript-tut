const scores = [2, 3, 4, 2, 1, 5];

const larger3find = scores.find(score => score > 3);
const larger3filter = scores.filter(score => score > 3);

console.log('Find: ', larger3find); // return single value
console.log('Filter: ', larger3filter); // return array