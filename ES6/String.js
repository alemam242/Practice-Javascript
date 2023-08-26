let str1 = "Alemam";
let str2 = "Nick";

/**  String interpolation
 * * string variable onno kono string er moddhe direct use korte chaile
 * * sei string start korte hobe backtrick symbol(``) diye
 * * and jekhane variable use korbo sekhane ${variable_name} diye dibo
 * ? Ei system take bola hoi string interpolation
 */
let sentence = `${str1} is friend of ${str2}`;

console.log(sentence);

/** Escape characters
 * * \ is an escape character
 * * \n is an escape character
 * * \r is an escape character
 * * \t is an escape character
 * * \v is an escape character
 */

let a = 'I\'m Alemam';
console.log(a);

let b = "Value of PI is \"3.1416\"";
console.log(b);

let c = "c: This is \rdummy text";
console.log(c);

let d = "d: This is \vdummy text";
console.log(d);


// toLowerCase & toUpperCase
let low = "Hello world!";
low = low.toLowerCase();
console.log(low);

low = low.toUpperCase();
console.log(low);

// concat
let sent = low.concat(a);
console.log(sent);

sent = low.concat(" ", a, ". Bye!");
console.log(sent);

// slice
let str = "Learning JavaScript";

let part1 = str.slice(9);
let part2 = str.slice(9, str.length);
console.log(part1, part2);

// trim
let name = "           Al emam       ";

name = name.trim();
console.log(name);

// replace 
name = name.replace("emam", "imran");
console.log(name);

str = "Learning JavaScript";
        //charAt(index) method
        console.log(str.charAt(5)); // i

        // indexOf(str) method
        console.log(str.indexOf("a")); // 2

        // lastIndexOf(str) method
        console.log(str.lastIndexOf("a")); // 12

        // substr(fromIndex,howManyCharacter) method
        console.log(str.substr(9,4)); // Java

        // substring(fromIndex,toIndex) method
        console.log(str.substring(9,13)); // Java