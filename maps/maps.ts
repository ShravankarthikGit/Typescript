export {}

// create a map
const myMap = new Map<string, number>(); // Create an empty Map that accepts string keys and number values

// set key-value pairs
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

console.log('Print value of map:', myMap); // prints Map inspection
console.log('Print value of map (concat):', myMap); // prints Map inspection

// get value by key
const value = myMap.get("two");
console.log(`Print value of map using key: ${value}`); // Output: 2

// check if a key exists
const hasKey = myMap.has("three");
console.log(`check hasKey: ${hasKey}`); // Output: true

// get size of the map
console.log(`Size of myMap: ${myMap.size}`); // Output: Size of myMap: 3

// delete a key-value pair
    myMap.delete("one");
    console.log('deleted key-value pair:', myMap); // prints Map inspection

// iterate over map entries after delete
for (const [key, val] of myMap.entries()) {
    console.log(`iterate over map using for..of loop Key: ${key}, Value: ${val}`);
}   

// clear the map
myMap.clear();
console.log('cleared map:', myMap); // prints Map inspection

// Initialize a Map with key-value pairs
const initMap = new Map<string, string>([
    ["name", "Alice"],
    ["city", "Wonderland"],
    ["occupation", "Adventurer"]
]);

// Iterate over the initialized map
for (const [key, val] of initMap) {
    console.log(`${key}: ${val}`);
}

// Output:
// name: Alice
// city: Wonderland
// occupation: Adventurer


// Using forEach to iterate over map
initMap.forEach((value, key) => {
    console.log(`forEach Key: ${key}, Value: ${value}`);
}); 


// Output:// forEach Key: name, Value: Alice
// forEach Key: city, Value: Wonderland
// forEach Key: occupation, Value: Adventurer


// Convert Map to Array
const mapToArray = Array.from(initMap);
console.log('Map to Array:', mapToArray); 
// Output: Map to Array: [ [ 'name', 'Alice' ], [ 'city', 'Wonderland' ], [ 'occupation', 'Adventurer' ] ]


// Convert Array to Map
const arrayTest = new Array();
arrayTest.push( ["fruit", "Apple"] );
arrayTest.push( ["vegetable", "Carrot"] );

console.log('Array Test:', arrayTest);

// Convert array of key-value pairs to a Map
const arrayToMap = new Map<string, string>(arrayTest);

console.log('Array to Map:', arrayToMap); 
// Output: Array to Map: Map(2) { 'fruit' => 'Apple', 'vegetable' => 'Carrot' }

// Using spread operator to convert Map to Array
const spreadMapToArray = [...initMap];
console.log('Spread Map to Array:', spreadMapToArray); 
// Output: Spread Map to Array: [ [ 'name', 'Alice' ], [ 'city', 'Wonderland' ], [ 'occupation', 'Adventurer' ] ]

// Using spread operator to convert Array to Map
const spreadArrayToMap = new Map<string, string>([...arrayTest]);
console.log('Spread Array to Map:', spreadArrayToMap); 
// Output: Spread Array to Map: Map(2) { 'fruit' => 'Apple', 'vegetable' => 'Carrot' }

// Using Map on object keys using Object.entries
const obj = { a: 1, b: 2, c: 3 };
const objMap = new Map<string, number>(Object.entries(obj) as [string, number][]);
console.log('Object to Map:', objMap); 
// Output: Object to Map: Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }


// Using Object.fromEntries to convert Map back to Object
const mapToObj = Object.fromEntries(objMap);
console.log('Map to Object:', mapToObj); 
// Output: Map to Object: { a: 1, b: 2, c: 3 }  



//keys and values methods
for (const key of initMap.keys()) {
    console.log(`Key from initMap: ${key}`);
}   

for (const value of initMap.values()) {
    console.log(`Value from initMap: ${value}`);
}
// Output:
// Key from initMap: name
// Key from initMap: city
// Key from initMap: occupation
// Value from initMap: Alice
// Value from initMap: Wonderland
// Value from initMap: Adventurer


// Using Map with complex types as keys
const complexKeyMap = new Map<object, string>();    
const keyObj1 = { id: 1 };
const keyObj2 = { id: 2 };
complexKeyMap.set(keyObj1, "Object One");
complexKeyMap.set(keyObj2, "Object Two");
console.log('Complex Key Map:', complexKeyMap);
// Output: Complex Key Map: Map(2) { { id: 1 } => 'Object One', { id: 2 } => 'Object Two' }


// Accessing values using complex keys
console.log(`Value for keyObj1: ${complexKeyMap.get(keyObj1)}`); // Output: Value for keyObj1: Object One
console.log(`Value for keyObj2: ${complexKeyMap.get(keyObj2)}`); // Output: Value for keyObj2: Object Two

