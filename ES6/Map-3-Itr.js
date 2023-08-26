// Map contains key-value pairs
/** Some properties of the map
 * has(key)
 * get(key)
 * delete(key)
 * clear()
 */

var map = new Map();

map.set('key1','Bangladesh');
map.set('key2','Bhutan');
map.set('key3','Nepal');
map.set('key4','Srilanka');
map.set('key5','Japan');
map.set('key6','Canada');
map.set('key7','Germany');
map.set('key8', 'Australia');

// check by key is the value exist?
if (map.has('key12')) {
    console.log('Yes');
}
else { 
    console.log('No');
}

// delete from map using key
map.delete('key4');
for (let item of map.values()) {
    console.log(item);
}

// get value from map using key
var value = map.get('key3');
console.log(value);
