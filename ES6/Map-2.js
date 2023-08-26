// Map contains key-value pairs

var map = new Map();

map.set('key1','Bangladesh');
map.set('key2','Bhutan');
map.set('key3','Nepal');
map.set('key4','Srilanka');
map.set('key5','Japan');
map.set('key6','Canada');
map.set('key7','Germany');
map.set('key8', 'Australia');


for (let item of map.values()) {
    console.log(item);
}
console.log('--------------------------------');
for (let item of map.keys()) {
    console.log(item);
}