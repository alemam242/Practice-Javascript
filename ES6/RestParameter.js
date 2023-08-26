// There is a difference between spread operator and rest parameter
// But both are looking same because of their symbol

// Eksathe eker besi parameter use korte chaile rest parameter ta sobar last a use korte hobe
// Rest parameter ekai onek gulo value store korte pare

"use strict";

// here ...numbers is a rets parameter
function AddNumber(name, age, ...numbers) {
    console.log("Hello, " + name);
    console.log("Age: " + age);

    let sum = 0;
    for (let i of numbers) { 
        sum = sum + i;
    }

    console.log("Sum: " + sum);
}


AddNumber("Al Emam", 23, 1, 2, 3, 4, 5);

// Here the value 'Al Emam' will be received by name parameter
// And the value 23 will be received by age parameter
// And the values (1,2,3,4,5) will be received by ...numbers parameter