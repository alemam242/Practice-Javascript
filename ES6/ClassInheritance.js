class parent{
    myFunc1() {
        console.log("Hello Function 1");
    }

    myFunc2() {
        console.log("Hello Function 2");
    }
}

class child extends parent {
    // child can change parents function which is known as Overriding

    // override myFunc2
    myFunc2() {
        console.log("Function 2 modified");
    }

    demo() {
        super.myFunc1();
    }
}

var pobj = new parent();
pobj.myFunc1();
pobj.myFunc2();


var obj = new child();
obj.myFunc1();
obj.myFunc2();
obj.demo();