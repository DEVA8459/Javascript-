<!-- learn along your offline notes -->
<!-- if any question is mentioned and ans not given then it is in your offline notes
 -->

# Basics

## 1. What is Javascript ? what is role of js engine 
A: JavaScript is a **programming language** that is used for converting static web pages to interactive and dynamic web pages.

## 2. what are client side and Server side
A: 
1. **clientSide**-- A client is a device, application, or software component that requests and consumes
services or resources from a server.

2. **server Side**-A server is a device, computer, or application that provide services, resources,or functions to clients.

## set 
1. In JavaScript, a `Set` is a **built-in object** that 
2. **allows you to store unique values of any type,** whether **primitive values or object references**. 
3. **Unlike arrays, sets do not allow duplicate values.**

Here are some key features and methods of `Set`:

### Creating a Set

```javascript
const mySet = new Set();
```

You can also initialize a `Set` with an array (or any iterable):

```javascript
const mySet = new Set([1, 2, 3, 4, 5]);
```

### Adding Values

You can add values to a `Set` using the `add` method:

```javascript
mySet.add(6);
mySet.add(2); // Won't be added because 2 is already in the set
```

### Checking for Values

You can check if a value exists in a `Set` using the `has` method:

```javascript
console.log(mySet.has(3)); // true
console.log(mySet.has(7)); // false
```

### Removing Values

You can remove a value from a `Set` using the `delete` method:

```javascript
mySet.delete(3);
console.log(mySet.has(3)); // false
```

### Getting the Size

You can get the number of values in a `Set` using the `size` property:

```javascript
console.log(mySet.size); // 5
```

### Iterating over a Set

You can iterate over the values in a `Set` using `forEach` or a `for...of` loop:

```javascript
mySet.forEach(value => {
  console.log(value);
});

// Or using for...of
for (const value of mySet) {
  console.log(value);
}
```

### Converting a Set to an Array

You can convert a `Set` to an array using the spread operator or the `Array.from` method:

```javascript
const myArray = [...mySet];
const myArray2 = Array.from(mySet);
```

### Example Usage

Here's a complete example demonstrating some of these features:

```javascript
const fruits = new Set();

// Adding values
fruits.add('apple');
fruits.add('banana');
fruits.add('orange');
fruits.add('apple'); // Duplicate, won't be added

// Checking for values
console.log(fruits.has('apple')); // true
console.log(fruits.has('grape')); // false

// Removing values
fruits.delete('banana');
console.log(fruits.has('banana')); // false

// Getting the size
console.log(fruits.size); // 2

// Iterating over the set
fruits.forEach(fruit => {
  console.log(fruit);
});

// Converting to an array
const fruitArray = [...fruits];
console.log(fruitArray); // ['apple', 'orange']
```

`Set` is a useful data structure when you need to store unique values and perform operations like checking for the existence of an item or iterating over the items without worrying about duplicates.

## sort 
1. Sorting in JavaScript can be **performed on arrays** using the `sort()` method. 
2. The `sort()` method sorts the elements of an array in place and **returns the sorted original array**. 
3. By **default,** the `sort()` method sorts elements as strings in **ascending order**. 
4. However, you **can customize the sorting** behavior **by providing a compare function**.

### Basic Sorting

If you use `sort()` **without a compare function, elements are converted to strings and sorted lexicographically** (i.e., dictionary order):

```javascript
const fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'orange']
```

### Sorting Numbers

Sorting numbers lexicographically can lead to incorrect results:

```javascript
const numbers = [4, 2, 5, 1, 3];
numbers.sort();
console.log(numbers); // [1, 2, 3, 4, 5] (as expected, but because they are converted to strings)

const numbers2 = [10, 2, 5, 1, 3];
numbers2.sort();
console.log(numbers2); // [1, 10, 2, 3, 5] (incorrect for numeric sorting)
```

To sort numbers correctly, you should provide a compare function:

```javascript
const numbers = [10, 2, 5, 1, 3];
numbers.sort((a, b) => a - b); // Ascending order
console.log(numbers); // [1, 2, 3, 5, 10]

numbers.sort((a, b) => b - a); // Descending order
console.log(numbers); // [10, 5, 3, 2, 1]
```

### Custom Sorting

You can also use a custom compare function to sort objects or other complex data structures. The compare function should return:
- A negative number if `a` should come before `b`
- Zero if `a` and `b` are considered equal
- A positive number if `a` should come after `b`

#### Sorting an Array of Objects

Suppose you have an array of objects and you want to sort them based on a specific property:

```javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];

// Sort by age (ascending)
people.sort((a, b) => a.age - b.age);
console.log(people);
// [
//   { name: 'Charlie', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 }
// ]

// Sort by name (alphabetical order)
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
// [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 20 }
// ]
```

### Sorting Strings with Locale

For sorting strings that may contain special characters or need to respect locale-specific rules, you can use the `localeCompare` method:

```javascript
const words = ['résumé', 'resume', 'cafè', 'cafe'];
words.sort((a, b) => a.localeCompare(b));
console.log(words); // ['cafe', 'cafè', 'resume', 'résumé']
```

### Example of Sorting Arrays with Different Data Types

Here's a complete example demonstrating various sorting methods:

```javascript
const mixedArray = [10, 'banana', 2, 'apple', 5, 1, 'orange', 3];
mixedArray.sort();
console.log(mixedArray); // ['1', '10', '2', '3', '5', 'apple', 'banana', 'orange'] (lexicographical order)

const numArray = [10, 2, 5, 1, 3];
numArray.sort((a, b) => a - b); // Numeric ascending order
console.log(numArray); // [1, 2, 3, 5, 10]

const personArray = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];

personArray.sort((a, b) => a.age - b.age); // Sorting objects by age
console.log(personArray); // Sorted by age in ascending order

personArray.sort((a, b) => a.name.localeCompare(b.name)); // Sorting objects by name
console.log(personArray); // Sorted by name in alphabetical order
```

The `sort()` method is versatile and powerful, allowing for sorting based on various criteria by providing appropriate compare functions.

## what is iterables object
0. iteration =the repetition of a process or utterance.
1. In JavaScript, an iterable is an object that **can be iterated over with constructs like `for...of` loops, the spread operator (`...`), and other iteration mechanisms.**
2.  An iterable must implement the `@@iterator` method, which means it **must have a property with a key `Symbol.iterator`.**

### Common Iterable Objects
1. **Arrays**:
    ```javascript
    const array = [1, 2, 3, 4];
    for (const item of array) {
      console.log(item);
    }
    // Output: 1 2 3 4
    ```

2. **Strings**:
    ```javascript
    const string = "hello";
    for (const char of string) {
      console.log(char);
    }
    // Output: h e l l o
    ```

3. **Maps**:
    ```javascript
    const map = new Map();
    map.set('a', 1);
    map.set('b', 2);
    for (const [key, value] of map) {
      console.log(`${key}: ${value}`);
    }
    // Output: a: 1 b: 2
    ```

4. **Sets**:
    ```javascript
    const set = new Set([1, 2, 3, 4]);
    for (const value of set) {
      console.log(value);
    }
    // Output: 1 2 3 4
    ```

### Custom Iterables
You can create your own iterable objects by implementing the `Symbol.iterator` method.

#### Example of a Custom Iterable
```javascript
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const value of myIterable) {
  console.log(value);
}
// Output: 1 2 3
```

### How Iteration Works
The `Symbol.iterator` method must return an iterator object, which adheres to the iterator protocol:
- An iterator object must have a `next` method that returns an object with two properties:
  - `value`: The next value in the sequence.
  - `done`: A boolean indicating whether the sequence has finished (`true` if the sequence is done, `false` otherwise).

#### Example of an Iterable with an Iterator Protocol
```javascript
const myIterable = {
  [Symbol.iterator]: function() {
    let step = 0;
    return {
      next: function() {
        step++;
        if (step === 1) {
          return { value: 'first', done: false };
        } else if (step === 2) {
          return { value: 'second', done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for (const value of myIterable) {
  console.log(value);
}
// Output: first second
```

### Using Iterables with Built-in Functions
Iterables can be used with many built-in JavaScript functions:
- **Spread Operator**:
    ```javascript
    const arr = [...myIterable];
    console.log(arr);
    // Output: ['first', 'second']
    ```

- **Array.from**:
    ```javascript
    const arr = Array.from(myIterable);
    console.log(arr);
    // Output: ['first', 'second']
    ```

### Conclusion
An iterable object in JavaScript is any object that implements the `Symbol.iterator` method, providing a way to produce an iterator that can traverse the elements of the object. This feature allows for the use of powerful and flexible iteration patterns across different types of data structures and custom implementations.

## every()
Sure! Here's a comparison of the `every`, `filter`, `map`, and `reduce` methods in JavaScript, including their usage and purposes:

### `every()`

**Purpose**: Tests whether all elements in the array pass the test implemented by the provided function. Returns a Boolean.

**Syntax**:
```javascript
array.every(callback(element[, index[, array]])[, thisArg])
```

**Example**:
```javascript
let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true
```

### `filter()`

**Purpose**: Creates a new array with all elements that pass the test implemented by the provided function.

**Syntax**:
```javascript
array.filter(callback(element[, index[, array]])[, thisArg])
```

**Example**:
```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

### `map()`

**Purpose**: Creates a new array with the results of calling a provided function on every element in the calling array.

**Syntax**:
```javascript
array.map(callback(element[, index[, array]])[, thisArg])
```

**Example**:
```javascript
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]
```

### `reduce()`

**Purpose**: Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

**Syntax**:
```javascript
array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

**Example**:
```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15
```

### Comparison

- **Purpose**:
  - `every`: Checks if all elements satisfy a condition. Returns a Boolean.
  - `filter`: Selects elements that satisfy a condition. Returns a new array.
  - `map`: Transforms elements based on a function. Returns a new array.
  - `reduce`: Reduces the array to a single value based on a function. Returns a single value.

- **Return Type**:
  - `every`: Boolean
  - `filter`: Array
  - `map`: Array
  - `reduce`: Single value (of any type)

- **Mutability**:
  - None of these methods modify the original array. They all return new arrays or values.

- **Use Case**:
  - `every`: When you need to check if all elements meet a condition.
  - `filter`: When you need to create a new array with elements that pass a test.
  - `map`: When you need to transform each element in the array.
  - `reduce`: When you need to aggregate array values into a single value (e.g., sum, product).

Each method serves a different purpose, so the choice of which to use depends on the specific problem you're trying to solve.