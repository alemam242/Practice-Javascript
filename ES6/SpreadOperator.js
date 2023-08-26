// Spread Operator => (...)

let ar1 = ["Bangladesh", "Srilanka"];
let ar2 = ["America",...ar1, "Canada", "France", "Germany"];

console.log("With Spread Operator:\n"+ar2);

let ar3 = ["America", "Canada", "France", "Germany"];
ar3.push(ar1);
console.log("Without Spreed Operator:\n"+ar3);