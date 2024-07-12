# sort 

## sort 

1. The `sort` method in JavaScript is used to **sort the elements of an array** in place and **returns the sorted array.** 
2. **The default sort order is ascending,** built upon **converting the elements into strings and comparing their sequences** of UTF-16 code unit values.

### Syntax
```javascript
array.sort(compareFunction)
```

### Parameters
- **compareFunction (optional)**: Specifies a function that defines the sort order. **If omitted, the array is sorted according to each character's Unicode code point value**, according to the string conversion of each element.

### Example with Default Sort
Without a `compareFunction`, the elements are sorted as strings by Unicode point value:
```javascript
const numbers = [23, 34, 123, 43, 5, 77, 38, 2];
console.log(numbers.sort()); // Output: [ 123, 2, 23, 34, 38, 43, 5, 77 ]
```
Here, `123` comes before `2` because '1' in '123' has a lower Unicode code point than '2'.

### Example with Compare Function
To sort numerically, a `compareFunction` must be provided. The function should return:
- A negative value if the first argument (`a`) is less than the second argument (`b`).
- Zero if `a` is equal to `b`.
- A positive value if `a` is greater than `b`.

For ascending order: for remember A pehle to  assending
```javascript
const numbers = [23, 34, 123, 43, 5, 77, 38, 2];
console.log(numbers.sort((a, b) => a - b)); // Output: [ 2, 5, 23, 34, 38, 43, 77, 123 ]
```

For descending order:
```javascript
const numbers = [23, 34, 123, 43, 5, 77, 38, 2];
console.log(numbers.sort((a, b) => b - a)); // Output: [ 123, 77, 43, 38, 34, 23, 5, 2 ]
```

### Sorting Objects
When sorting an array of objects, the `compareFunction` can compare a specific property of the objects:
```javascript
const items = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 }
];

items.sort((a, b) => a.age - b.age);
console.log(items);
// Output: 
// [
//   { name: 'Charlie', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 }
// ]
```

The `sort` method is a powerful tool for ordering elements in arrays, whether they are primitive values or objects, as long as an appropriate `compareFunction` is provided.