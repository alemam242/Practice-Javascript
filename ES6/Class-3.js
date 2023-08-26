/**  About Static Properties
 * * A non static properties can be accessed through an object but can't be accessed through class name
 * * A static properties can't be accessed through an object but can be accessed through class name
*/

class myClass{

    myFun1() {
        console.log("This is non static property");
    }

    
    static myFun2() {
        console.log("This is static property");
    }
}


var obj = new myClass();
// call non static function
obj.myFun1();

// call static function
myClass.myFun2();