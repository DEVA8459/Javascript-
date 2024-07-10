## 1. filter 
1. In JavaScript, the `filter` method is used to **create a new array** containing elements that pass a test provided by a function.
2. The `filter` method **does not change the original array.**

Here’s a basic example of how to use `filter`:

```javascript
// Example array
const numbers = [1, 2, 3, 4, 5, 6];

// Function to test each element
function isEven(number) {
    return number % 2 === 0;
}

// Use filter to create a new array with only even numbers
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // Output: [2, 4, 6]
```

You can also use an arrow function for brevity:

```javascript
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
```

In addition to filtering numbers, you can filter objects within an array. Here’s an example with an array of objects:

```javascript
// Example array of objects
const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jack', age: 20 },
    { name: 'Jill', age: 28 }
];

// Use filter to create a new array with people older than 25
const olderThan25 = people.filter(person => person.age > 25);

console.log(olderThan25);
// Output: [ { name: 'Jane', age: 30 }, { name: 'Jill', age: 28 } ]
```

3. The `filter` method is very powerful and can be used to **filter arrays based on any condition you define in the callback function**.

## 2. indexOf
1. The `indexOf` method in JavaScript is used to find the index of the first occurrence of a specified value in a string or an array. 
2. It returns the index of the value if found, and `-1` if the value is not found.

### Using `indexOf` with Strings

Here’s an example of using `indexOf` with strings:

```javascript
const sentence = "The quick brown fox jumps over the lazy dog";
const word = "fox";

const index = sentence.indexOf(word);

console.log(index); // Output: 16
```

In this example, `indexOf` finds the position of the substring "fox" within the string `sentence` and returns `16`, which is the starting index of "fox".

### Using `indexOf` with Arrays

Here’s an example of using `indexOf` with arrays:

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const value = 4;

const index = numbers.indexOf(value);

console.log(index); // Output: 3
```

In this example, `indexOf` finds the position of the value `4` within the array `numbers` and returns `3`, which is the index of `4` in the array.

### Handling Non-Existent Values

If the value is not found in the string or array, `indexOf` returns `-1`:

```javascript
const fruits = ["apple", "banana", "cherry"];
const fruit = "orange";

const index = fruits.indexOf(fruit);

console.log(index); // Output: -1
```

In this example, `indexOf` does not find the value "orange" in the array `fruits` and returns `-1`.

### Finding All Occurrences

If you want to find all occurrences of a value in an array, you can use a loop:

```javascript
const numbers = [1, 2, 3, 2, 4, 2];
const value = 2;
let indices = [];

let index = numbers.indexOf(value);
while (index != -1) {
    indices.push(index);
    index = numbers.indexOf(value, index + 1);
}

console.log(indices); // Output: [1, 3, 5]
```

In this example, a loop is used to find all indices of the value `2` in the array `numbers`. The result is an array of indices where `2` is found.

