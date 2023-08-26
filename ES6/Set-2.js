/** There are some properties of Set
 * clear()
 * delete(value)
 * has(value)
 * values()
 * size
 */

var mySet = new Set();

mySet.add("Bangladesh");
mySet.add('Bhutan');
mySet.add('Nepal');
mySet.add('Bangladesh');
mySet.add('America');
mySet.add('Nepal');
mySet.add('Japan');

if (mySet.has('Nepal'))
{
    mySet.delete('Nepal');
    console.log('Value found and deleted');
    console.log(mySet);
}
else {
    console.log('Value not found');
}

console.log(mySet.size);

mySet.clear();

console.log(mySet.values());
