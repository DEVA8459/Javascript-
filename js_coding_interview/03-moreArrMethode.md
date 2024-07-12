# map,filter ,reduce ,forEach ,find ,includes

## for Each
1. The forEach method executes a **provided function** once for each array element.
2. it takes a call back function 
```js
array.forEach(function(currentValue, index, array) {
    // code to be executed for each element
});

```
3. **currentValue**: **Required.** The current element being processed in the array.
4. **index**: **Optional.** The index of the current element being processed.
5. **array**: **Optional.** The array forEach was called upon.

```js
let marvelHeroes = ["Thor", "Spiderman", "Ironman"];

marvelHeroes.forEach(function(hero, index) {
    console.log(`Hero ${index + 1}: ${hero}`);
});
//Hero 1: Thor
//Hero 2: Spiderman
//Hero 3: Ironman

```
6. using arrow function 
```js 
let marvelHeroes = ["Thor", "Spiderman", "Ironman"];

marvelHeroes.forEach((hero, index) => {
    console.log(`Hero ${index + 1}: ${hero}`);
});

```
## for of vs for Each
1. forEach:
    1. Best for arrays.
    2. Executes a function for each element.
    3. Provides access to the index and array.
    4. Cannot be terminated early.
        1. bc No break or continue: Unlike traditional for loops, forEach does not support break or continue statements to exit or skip iterations early.
2. for...of:
    1. Best for any iterable object.
    2. Iterates directly over values.
    3. Simple and readable syntax.
    4. Can be terminated early.

## map and map vs foreach
1. In JavaScript, `map` and `forEach` are both array methods used for iterating over elements, but they serve different purposes and have different use cases.

### `map` Method

1. The `map` method **creates a new array** populated with the results of calling a provided function on every element in the calling array.
2.  It **does not change the original** array.
3. that why we need to store it in separate variable
4. **takes a callback function**

```javascript
const newArray = array.map(callback(currentValue, index, array));
```

**Example:**

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### `forEach` Method

1. The `forEach` method executes a provided function once for each array element. It **does not create a new array**, and it also **does not return any value.**
2. so we dont need to store it in separat e variable


```javascript
array.forEach(callback(currentValue, index, array));
```

**Example:**

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2));
// Output:
// 2
// 4
// 6
// 8
```

### Key Differences

1. **Return Value:**
   - `map` returns a new array with the transformed elements.
   - `forEach` does not return anything (undefined).

2. **Purpose:**
   - Use `map` when you need to transform data and create a new array**.
   - Use `forEach` when you need to perform **side effects, such as logging, modifying external variables, or updating UI elements**.

3. **Chaining:**
   - `map` can be chained with other array methods like `filter`, `reduce`, etc., because it returns a new array.
   - `forEach` **cannot be chained directly** because it returns undefined.

### Performance

In terms of performance, both `map` and `forEach` have similar time complexities, but the choice between them should be based on the need for a new array or side effects, rather than performance considerations.

### Example Use Cases

- **`map`:** 
  - Transforming an array of numbers by doubling each value.
  - Converting an array of objects to an array of a specific property from each object.

- **`forEach`:**
  - Logging each element of an array.
  - Accumulating a sum in an external variable.
  - Performing operations that involve DOM manipulation

## 3. reduce
1. The `reduce` method in JavaScript is used **to execute a reducer function on each element of an array**, resulting in a single output value.
2. it return single output value no array return
2. It is a powerful method that can be **used to accumulate values, transform data, or even flatten arrays**.

### Syntax

```javascript
array.reduce(callback(accumulator, currentValue, index, array), initialValue);
```

1.  `callback`: A function to execute on each element in the array, taking four arguments:
2.  - `accumulator`: The accumulator accumulates the callback's return values
  1. its starting value after initial value.
  2. so if initial value is [] then accumulator 1st value is [] then it iterates then it store value derived from callback function then it iterates for 2nd time and so on
3.  - `currentValue`: The current element being processed in the array.
4. - `index`: The index of the current element being processed in the array (optional).
5.   - `array`: The array `reduce` was called upon (optional).
6. - `initialValue`: A value to use as the first argument to the first call of the callback. 
  1. **If no initial value is supplied**, the **first element in the array will be used as the initial accumulator** value, and the **iteration will start from the second element.**

### Example: Sum of All Elements

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10
```

### Example: Flattening an Array of Arrays

```javascript
const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]
```

### Example: Counting Occurrences of Values in an Array

```javascript
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((accumulator, currentValue) => {
  if (currentValue in accumulator) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }
```

### Example: Grouping Objects by a Property

```javascript
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Alice', age: 30 },
];
const groupedByName = people.reduce((accumulator, person) => {
  if (!accumulator[person.name]) {
    accumulator[person.name] = [];
  }
  accumulator[person.name].push(person);
  return accumulator;
}, {});
console.log(groupedByName);
// {
//   Alice: [{ name: 'Alice', age: 21 }, { name: 'Alice', age: 30 }],
//   Bob: [{ name: 'Bob', age: 25 }]
// }
```

### Example: Computing the Maximum Value

```javascript
const numbers = [1, 2, 3, 4];
const max = numbers.reduce((accumulator, currentValue) => (currentValue > accumulator ? currentValue : accumulator), numbers[0]);
console.log(max); // 4
```

### Important Points

- **Initial Value:** Providing an initial value is recommended to avoid unexpected results, especially with empty arrays.
- **Immutability:** `reduce` **does not mutate the original array** but can be used to return transformed versions of the array or other values.
- **Chaining:** It can be chained with other array methods like `map` and `filter`.

### Summary

The `reduce` method is highly versatile and can be used for a wide range of operations, including summing numbers, flattening arrays, counting occurrences, and more. It is a fundamental tool for functional programming in JavaScript, enabling concise and expressive code for data transformations and accumulations.

## 4. filter

1. The `filter` method in JavaScript **creates a new array** with all elements **that pass the test** implemented by the provided function.
2.  It is used to filter out elements from an array based on certain conditions.

### Syntax

```javascript
const newArray = array.filter(callback(element, index, array));
```

- `callback`: A function that is called for each element in the array. It takes three arguments:
  - `element`: The current element being processed in the array.
  - `index`: The index of the current element being processed in the array (optional).
  - `array`: The array `filter` was called upon (optional).

### Example: Filtering Even Numbers

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
```

### Example: Filtering Objects by Property

```javascript
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 },
];
const youngPeople = people.filter(person => person.age < 30);
console.log(youngPeople);
// [{ name: 'Alice', age: 21 }, { name: 'Bob', age: 25 }]
```

### Example: Removing Undefined or Null Values

```javascript
const mixedArray = [1, null, 2, undefined, 3, null];
const validValues = mixedArray.filter(value => value !== null && value !== undefined);
console.log(validValues); // [1, 2, 3]
```

### Example: Filtering Strings by Length

```javascript
const words = ['apple', 'banana', 'cherry', 'date'];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // ['banana', 'cherry']
```

### Example: Filtering Unique Values

To filter unique values, you can use a combination of `filter` and `indexOf`.

```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbers.filter((num, index, array) => array.indexOf(num) === index);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
```

### Important Points

- **Immutability:** `filter` does not modify the original array but returns a new array with the elements that pass the test.
- **Return Value:** The new array returned by `filter` only includes elements that make the callback function return `true`.
- **Callback Function:** The callback function should return a boolean value (`true` to keep the element, `false` to exclude it).

### Summary

The `filter` method is a powerful and useful tool for creating new arrays with only the desired elements. It is often used to exclude unwanted values, filter objects based on properties, and generally refine arrays to meet specific criteria.

## find 
The `find` method in JavaScript is used to locate the first element in an array that satisfies a provided testing function. Unlike `filter`, which returns an array of all elements that pass the test, `find` returns the value of the first element that passes the test, or `undefined` if no such element is found.

### Syntax

```javascript
const element = array.find(callback(element, index, array));
```

- `callback`: A function that is called for each element in the array. It takes three arguments:
  - `element`: The current element being processed in the array.
  - `index`: The index of the current element being processed in the array (optional).
  - `array`: The array `find` was called upon (optional).

### Example: Finding an Object in an Array

```javascript
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 },
];

const person = people.find(person => person.name === 'Bob');
console.log(person); // { name: 'Bob', age: 25 }
```

### Example: Finding a Number in an Array

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const number = numbers.find(num => num > 4);
console.log(number); // 5
```

### Example: Finding a String in an Array

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];
const fruit = fruits.find(fruit => fruit.startsWith('c'));
console.log(fruit); // 'cherry'
```

### Example: Finding an Element in a Complex Array

```javascript
const inventory = [
  { name: 'apple', quantity: 2 },
  { name: 'banana', quantity: 0 },
  { name: 'cherry', quantity: 5 },
];

const inStock = inventory.find(item => item.quantity > 0);
console.log(inStock); // { name: 'apple', quantity: 2 }
```

### Important Points

- **Return Value:** `find` returns the value of the first element that satisfies the testing function. If no elements satisfy the testing function, `undefined` is returned.
- **Immutability:** `find` does not modify the original array.
- **Callback Function:** The callback function should return a boolean value (`true` for the desired element, `false` otherwise).

### Comparison with `filter`

- **`filter`:** Returns an array of all elements that pass the test.
- **`find`:** Returns the first element that passes the test, or `undefined` if none do.

### Summary

The `find` method is useful for locating the first occurrence of an element in an array that matches a specific condition. It is a simple and effective way to retrieve a single element without having to loop through the entire array manually.

## includes
The `includes` method in JavaScript is used to determine whether an array contains a specific element. It returns `true` if the array contains the element, and `false` otherwise. This method is case-sensitive when used with strings.

### Syntax

```javascript
array.includes(element, start)
```

- `element`: The element to search for.
- `start` (optional): The position in the array at which to begin the search. The default is `0`.

### Example: Checking for a Number

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false
```

### Example: Checking for a String

```javascript
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape')); // false
```

### Example: Case Sensitivity

```javascript
const words = ['Hello', 'world'];
console.log(words.includes('hello')); // false
console.log(words.includes('Hello')); // true
```

### Example: Using the `start` Parameter

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(2, 2)); // false (search starts at index 2)
console.log(numbers.includes(4, 2)); // true (search starts at index 2)
```

### Example: Checking for `NaN`

Unlike the `indexOf` method, `includes` can correctly detect `NaN` values.

```javascript
const array = [1, 2, NaN, 4];
console.log(array.includes(NaN)); // true
```

### Important Points

- **Return Value:** `includes` returns a boolean (`true` or `false`).
- **Case Sensitivity:** When used with strings, the comparison is case-sensitive.
- **NaN Detection:** `includes` can correctly detect `NaN` values, unlike `indexOf`.

### Comparison with `indexOf`

- **`indexOf`:** Returns the first index at which a given element can be found, or `-1` if it is not present.
- **`includes`:** Returns a boolean indicating whether the array contains a specified element.

### Example: `indexOf` vs `includes`

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(3)); // 2
console.log(numbers.indexOf(6)); // -1
console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false
```

### Summary

The `includes` method is a straightforward and efficient way to check for the presence of an element in an array. It is particularly useful for its simplicity and readability, making it a preferred choice for checking membership in an array over methods like `indexOf` when only a boolean result is needed.