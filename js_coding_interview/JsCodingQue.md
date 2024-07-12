## 1.. Remove Duplicate element from array
```js
const array = [1, 4, 5, "Banana", 6, 1, 4, 4, 9, 3, "Banana"];

const x = array.filter((element, index) => {
  return array.indexOf(element) === index;
});
console.log(x);

// array.filter(...) creates a new array by filtering out elements that do not meet the specified condition.

// element is the current element being processed.

// index is the index of the current element being processed.

// array.indexOf(element
//) returns the index of the first occurrence of element in the array.

// The condition array.indexOf(element) === index checks if the current index is the same as the index of the first occurrence of element. If it is, the element is included in the new array.

// =============================================================
```
## 2...Write a function to generate fibonaaci seriese
```js
function fab(n) {
  let fabser = [];

  if (n <= 0) {
    return fabser;
  }

  fabser.push(0);

  if (n === 1) {
    return fabser;
  }

  fabser.push(1);

  for (let i = 2; i < n; i++) {
    let nxt = fabser[i - 1] + fabser[i - 2];
    fabser.push(nxt);
  }
  return fabser;
}

let no = 20;
let fbs = fab(no);

console.log(fbs);
```

## 3. reverse string with and without methode

```js
// with methode

let str="java"

const revstr=str.split("").reverse().join("")
console.log(revstr)


// without methode
let str = "java";

let revStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  revStr += str[i];
}

console.log(revStr);
```
##  4. sort number of array in dessending order
```js
const numbers1 = [23, 34, 123, 43, 5, 77, 38, 2];

console.log(numbers1.sort((num1, num2) => num2 - num1));
```
## 5. sort number of array in assending order
```js
console.log(numbers1.sort((num1, num2) => num1 - num2));

``` 
## 6. finding min and max value with inbuilt methode
```js
const numbers = [23, 34, 123, 43, 5, 77, 38, 2];

const min = Math.min(...numbers);
console.log(min);

const max = Math.max(...numbers);
console.log(max);

// without inBuilt methode

var min1 = numbers[0];
var max1 = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] < min1) {
    min1 = numbers[i];
  }
  if (numbers[i] > max1) {
    max1 = numbers[i];
  }
}

console.log(min1);
console.log(max1);
```
## 7. Swap the value of two variable without the need of temprory 3rd variable
```js
let x2 = 5;
let y2 = 20;
// semicolan ; is mandatory here

[x2, y2] = [y2, x2];

console.log(x2);
console.log(y2);
```
## 8. write a programmae that removes duplicate charecters from string
```js
function remDup(str) {
  const uniChar = new Set(str);
//   using set to store unique data

  const result = Array.from(uniChar).join(" ");
  return result;
}

const inputString = "hello world";
const result = remDup(inputString);
console.log(result);
```
## 9.  check weather number is even 
```js
let number = prompt("Enter a number:");

number = parseInt(number);

if (!isNaN(number)) {
    if (number % 2 === 0) {
        console.log(number + " is an even number.");
    } else {
        console.log(number + " is an odd number.");
    }
} else {
    console.log("Please enter a valid number.");
}
```

## 10. check if number is odd
```js
let number2 = prompt("Enter a number:");

number2 = parseInt(number2);

if (!isNaN(number2)) {
    if (number2 % 2 !== 0) {
        console.log(number2 + " is an odd number.");
    } else {
        console.log(number2 + " is an even number.");
    }
} else {
    console.log("Please enter a valid number.");
}
```
## 11. check if number is prime number 
```js
let number = prompt("Enter a number:");

number = parseInt(number);

if (!isNaN(number) && number > 1) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(number + " is a prime number.");
    } else {
        console.log(number + " is not a prime number.");
    }
} else {
    console.log("Please enter a valid number greater than 1.");
}
```
## 12 .find the occurence of specific charactre in string 
```js
const str3 ="i love javascript a"

console.log(str3.indexOf("a"))
indices=[]
let index=str3.indexOf("a")

while (index != -1){
    indices.push(index)
    index= str.indexOf("a",index + 1)
}

console.log(indices)
```


