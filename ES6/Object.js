let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// for (let props in person) { 
//     console.log(props+": "+person[props]);
// }


let myObj = {
    shirt: {
        color: "White",
        price: "200USD"
    },
    face: {
        isWearSunglass: true,
        eyeColor: "Black",
        smile: true
    }
}

for (let props in myObj) {
    console.log(props+" {");
    for (let item in myObj[props]) {
        console.log(item+": "+myObj[props][item]);
    }
    console.log("}\n");
}
