// Declare array using Array constructor
var myArray1 = new Array(10,20,30,50);

// Declare array normally
var myArray2 = [2, 4, 6, 8, 9];

console.log("Array 1:");
for (var i of myArray1) {
    console.log(i);
}

console.log("Array 2:");
for (var i of myArray2) {
    console.log(i);
}