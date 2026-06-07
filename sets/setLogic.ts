/* union()
difference()
intersection()
isDisjointFrom()
isSubsetOf()
isSupersetOf()
symmetricDifference() */

// Union of two sets using logic
function union<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    const resultSet = new Set<T>(setA);         
    for (const elem of setB) {
        resultSet.add(elem);
    }
    return resultSet;
}               

// Duplicates get removed automatically in a Set
console.log(union (new Set([1, 2, 3]), new Set([3, 4, 5])));

// Union method for set 
const setA = new Set([1, 2]);
const setB = new Set([2, 3]);
const combined = setA.union(setB); 

console.log(combined); // Output: Set { 1, 2, 3 }

// Intersection of two sets using logic
function intersection<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    const resultSet = new Set<T>(); 
    for (const elem of setA) {
        if (setB.has(elem)) {
            resultSet.add(elem);
        }
    }
    return resultSet;
}

console.log(intersection (new Set([1, 2, 3]), new Set([3, 4, 5])));

// Intersection method for set
const intersected = setA.intersection(setB);
console.log(intersected); // Output: Set { 2 }   


// Difference of two sets using logic
function difference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    const resultSet = new Set<T>();     
    for (const elem of setA) {
        if (!setB.has(elem)) {
            resultSet.add(elem);
        }
    }
    return resultSet;
}

console.log(difference (new Set([1, 2, 3]), new Set([3, 4, 5])));

// Difference method for set
const differenced = setA.difference(setB);
console.log(differenced); // Output: Set { 1 }

// Symmetric Difference of two sets using logic
// Elements in either setA or setB but not in both
function symmetricDifference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    const resultSet = new Set<T>();
    for (const elem of setA) {
        if (!setB.has(elem)) {
            resultSet.add(elem);
        } 
        console.log(resultSet);                  
    }   
    for (const elem of setB) {
        if (!setA.has(elem)) {
            resultSet.add(elem);
        }  
        console.log(resultSet);     
    }
    return resultSet;
}
console.log(symmetricDifference (new Set([1, 2, 3]), new Set([3, 4, 5])));

// Symmetric Difference method for set
const symDiff = setA.symmetricDifference(setB);
console.log(symDiff); // Output: Set { 1, 3 }


// isSubsetOf using logic
function isSubsetOf<T>(setA: Set<T>, setB: Set<T>): boolean {
    for (const elem of setA) {
        if (!setB.has(elem)) {
            return false;
        }
    }
    return true;
}   


console.log(isSubsetOf (new Set([1, 2, 3]), new Set([1, 2, 3]))); // true


// isSubsetOf method for set
const subsetResult = setA.isSubsetOf(new Set([1, 2, 3]));
console.log(subsetResult); // Output: true



// isSupersetOf using logic
function isSupersetOf<T>(setA: Set<T>, setB: Set<T>): boolean {
    for (const elem of setB) {
        if (!setA.has(elem)) {
            return false;
        }

    }
    return true;
}               

console.log(isSupersetOf (new Set([1, 2, 3]), new Set([2, 3]))); // true

// isSupersetOf method for set
const supersetResult = setA.isSupersetOf(new Set([2]));
console.log(supersetResult); // Output: true

// isDisjointFrom using logic
function isDisjointFrom<T>(setA: Set<T>, setB: Set<T>): boolean {
    for (const elem of setA) {
        if (setB.has(elem)) {
            return false;
        }
    }
    return true;
}       

console.log(isDisjointFrom (new Set([1, 2]), new Set([3, 4]))); // true

// isDisjointFrom method for set
const disjointResult = setA.isDisjointFrom(new Set([3, 4]));
console.log(disjointResult); // Output: true


// Example with strings
const setC = new Set(["apple", "banana"]);
const setD = new Set(["banana", "cherry"]);

console.log(setC.union(setD)); // Output: Set { 'apple', 'banana', 'cherry' }
console.log(setC.intersection(setD)); // Output: Set { 'banana' }
console.log(setC.difference(setD)); // Output: Set { 'apple' }  
console.log(setC.symmetricDifference(setD)); // Output: Set { 'apple', 'cherry' }
console.log(setC.isSubsetOf(new Set(["apple", "banana", "cherry"]))); // Output: true
console.log(setC.isSupersetOf(new Set(["banana"]))); // Output: true
console.log(setC.isDisjointFrom(new Set(["cherry", "date"]))); // Output: true  


// Example with objects
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 3 };
const setE = new Set([obj1, obj2]);
const setF = new Set([obj2, obj3]); 
console.log(setE.union(setF)); // Output: Set { { id: 1 }, { id: 2 }, { id: 3 } }
console.log(setE.intersection(setF)); // Output: Set { { id: 2 } }
console.log(setE.difference(setF)); // Output: Set { { id: 1 } }                
console.log(setE.symmetricDifference(setF));        // Output: Set { { id: 1 }, { id: 3 } }
console.log(setE.isSubsetOf(new Set([obj1, obj2, obj3])));      // Output: true
console.log(setE.isSupersetOf(new Set([obj2]))); // Output: true
console.log(setE.isDisjointFrom(new Set([obj3]))); // Output: true
// Note: For objects, equality is based on reference, not structure.




