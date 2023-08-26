// Set is like an array but it does not contain any duplicate elements

// This is not best way to insert data into the set
let map = new Set(['a', 'b', 'a', 'c', 'd']);
console.log(map);



let mySet = new Set();

// Best way to add values in Set
mySet.add('Bangladesh');
mySet.add('Bhutan');
mySet.add('Nepal');
mySet.add('Bangladesh');
mySet.add('America');
mySet.add('Nepal');
mySet.add('Japan');


console.log(mySet);