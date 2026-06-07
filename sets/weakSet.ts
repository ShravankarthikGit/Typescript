// The primary use of a WeakSet is to store "metadata" about objects 
// without preventing those objects from being deleted by the computer's memory manager
export {};
// Create a WeakSet
const weakSet = new WeakSet<object>();
const obj1 = { name: "John" };
const obj2 = { name: "Jane" };

// Add objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);


console.log(weakSet.has(obj1)); // Output: true
console.log(weakSet.has({ name: "John" })); // Output: false (different reference)

// Note: WeakSets are not enumerable, so you cannot list their contents or check their size.

// Example of using a Set to store objects
const testSet = new Set<object>();
let obj3 = { name: "John" };
const obj4 = { name: "Jane" };

// Add objects to the WeakSet
testSet.add(obj3);
testSet.add(obj4);

console.log(testSet.has(obj3)); // Output: true
console.log(testSet.has({ name: "John" })); // Output: false (different reference)

// add using weak set 
weakSet.add(obj3);
console.log(weakSet.has(obj3)); // Output: true
// remove reference to obj3 
obj3 = null; // Now obj3 is eligible for garbage collection
// At some point later, the memory manager may delete obj3 from memory,
// and it will also be removed from the WeakSet automatically.  
console.log(weakSet.has(obj3)); // Output: false (obj3 is no longer accessible)

// Note: In practice, you cannot directly observe the removal of obj3 from the WeakSet,
// as it depends on when the garbage collector runs, which is not predictable.


