// About constructor

class myClass{
    // Parameterized constructor
    constructor(a, b) { 
         this.num1 = a;
         this.num2 = b;
    }

    addNumber() {
        console.log(this.num1+this.num2);
    }
}


let obj = new myClass(10, 20);

obj.addNumber();

