var countries = ['America', 'Bangladesh', 'Brazil', 'Argentina', 'South Africa'];

// I want pick 'Bangladesh' and 'south Africa' from the array
// where bangladesh is in 2nd index and south Africa is in 5th index
// thats why i use a in 2nd index which will represent Bangladesh and
// I use b in 5th index which will represent south Africa

var [, a, , , b] = countries; // It is called as Array De-Structured

console.log(a+" "+b);