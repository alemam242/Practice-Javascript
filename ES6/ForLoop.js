// Take user input
let n = 10;
let sum = 0;
// Normal For Loop
console.log("\n Normal For Loop:\n");
for (let i = 0; i < n; i++){
    sum += (i+1);
}
console.log("Sum of first "+n+" numbers: "+sum);


let MyArray = ['Dhaka', 'Rajshahi', 'Rangpur', 'Khulna', 'Sylhet', 'Naugha'];
// For of Loop (** Used for arrays **)
console.log("\nUsing For of Loop:\n");
for (let item of MyArray) {
    console.log(item+" ");
}


// Marks of some students
const obj = {
    Alemam: 85,
    Farhan: 80,
    Ashik: 65,
    Walid: 84
}
// For in Loop (** Only use when there are key-value pairs)
console.log("\nUsing For in Loop:\n");
for (let key in obj) { 
    console.log("Marks of "+key+" is: "+obj[key]);
}