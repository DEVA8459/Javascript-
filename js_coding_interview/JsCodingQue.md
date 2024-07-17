## 1.. Remove Duplicate element from array
```js
const array = [1, 4, 5, "Banana", 6, 1, 4, 4, 9, 3, "Banana"];

const x = array.filter((element, index) => {
  return array.indexOf(element) === index;
});
console.log(x);

//note=:if asked to return th duplicate vlaue then simply replace === with !==

// array.filter(...) creates a new array by filtering out elements that do not meet the specified condition.

// element is the current element being processed.

// index is the index of the current element being processed.

// array.indexOf(element
//) returns the index of the first occurrence of element in the array.

// The condition array.indexOf(element) === index checks if the current index is the same as the index of the first occurrence of element. If it is, the element is included in the new array.

// =============================================================


```
## finding unique using inbuilt methode
```js
// can also find unnique using set 
// got basic.js tolearn about set
const array = [1, 4, 5, "Banana", 6, 1, 4, 4, 9, 3, "Banana"];

const set =new Set(array)
console.log(set)

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

// can also use reducer wali methode 
```
### more uniq way to find min max 
```js 
const num=[34,54,13,11,14,16]

const num2=num.sort((a,b)=>a-b)
// converts number in to assending order
// learn about sort in basics
console.log("min elelment is",num2[0] ,"max element is ",num2[num2.length-1])

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
function countChar(str ,char){
    let count=0
   for (i=0 ;i<str.length;i++){
       if (str[i]===char){
           count++
       }
   }return count
}

const string = "javascript is awsome"
const targetChar="a"

const result = countChar(string,targetChar)
console.log(result)
```

## if want to claculate for every element of string
```js
const str3 ="i love javascript a"

let str=Array.from(str3)
console.log(str)
const count = str.reduce((acc ,crr)=>{
    if (crr in acc){
        acc[crr]++
    }else{acc[crr]=1}
    return acc
},{})
console.log(count)
```

## Q :A number is given and asked about total of that number 
```js
let num=1234

// 1st converting nummber into string using String(num) then converting that srting into array using  from array methode
let Arr2=Array.from(String(num),Number)
let arr3=Array.isArray(Arr2) //checking sattus
console.log(arr3) //true
console.log(Arr2) //[1,2,3,4]

let AddNum=Arr2.reduce((acc,crv)=>{
    acc=acc+crv
    console.log(acc)
    return acc
},0)
console.log(AddNum) //10

// note- let Arr="1234" agar aisa diya ho to bhi same karne ka 
// it alsouse full to put number into " " if number is very large other wose you get  0 0 0

const num=123456789123484894998

const num2=Array.from(String(num),Number)
console.log(num2)
// [  1, 2, 3, 4, 5, 6, 7,
//   8, 9, 1, 2, 3, 4, 8,
//   4, 9, 0, 0, 0, 0, 0]

// to avoide such 

const num="123456789123484894998"

const num2=Array.from(String(num),Number)
console.log(num2)

// [
//   1, 2, 3, 4, 5, 6, 7,
//   8, 9, 1, 2, 3, 4, 8,
//   4, 8, 9, 4, 9, 9, 8
// ]
```
## == vs ===
1. == only check value
2. === checks value as well as data type 
```js
const a= 7
const b= "7"
console.log(a===b)//false
```
## finding secong largest value
```js
// easy methode
let arr =[12,11,10,5,113,112]
let newArr=arr.sort((a,b)=>a-b)
console.log(newArr)
console.log(`2nd largest value is ${newArr[newArr.length-2]}` )

```
```js 
let arr =[12,11,10,5,113,112]

const secLargest=(arr)=>{
    //finding 1st max 
    firstLargest=Math.max(...arr)
    // finding index of 1st max
    index=arr.indexOf(firstLargest)
    // deleting 1st max 
    arr.splice(index,1)
    // finding second max
    secondLargest=Math.max(...arr)
    return secondLargest
}
console.log(secLargest(arr))

```

```js
let arr = [12, 11, 10, 5, 113, 112];

// First, find the maximum value
let max = arr.reduce((max, cur) => cur > max ? cur : max, arr[0]);

// Then, find the second maximum by ignoring the maximum value found
let secmax = arr.reduce((secmax, cur) => {
  if (cur === max) return secmax; // Skip the maximum value
  return cur > secmax ? cur : secmax;
}, -Infinity);

console.log(secmax); // 112

```

## finding a third largest 
```js
// easy methode
let arr =[12,11,10,5,113,112]
let newArr=arr.sort((a,b)=>a-b)
console.log(newArr)
console.log(`3rd largest value is ${newArr[newArr.length-3]}` )

```
```js
let arr = [12, 11, 10, 5, 113, 112];

// Find the maximum value
let max = arr.reduce((max, cur) => (cur > max ? cur : max), -Infinity);

// Find the second maximum value by ignoring the maximum value found
let secondMax = arr.reduce((secondMax, cur) => {
  if (cur === max) return secondMax; // Skip the maximum value
  return cur > secondMax ? cur : secondMax;
}, -Infinity);

// Find the third maximum value by ignoring the maximum and second maximum values found
let thirdMax = arr.reduce((thirdMax, cur) => {
  if (cur === max || cur === secondMax) return thirdMax; // Skip the maximum and second maximum values
  return cur > thirdMax ? cur : thirdMax;
}, -Infinity);

console.log(thirdMax); // 12

```

## findinng missing number in given integer of array of 1 to 10
```js
// if asked only to return those missing number
const arr=[1,2,3,4,5,6,9,10]

const missingArr=[]

const missingValue =(arr)=>{
    const minV = Math.min(...arr)
    const maxV= Math.max(...arr)
    for (i=minV ; i<maxV ;i++){
        if (arr.indexOf(i)==-1){
            missingArr.push(i)
        }
    }
    return missingArr
}
console.log(missingValue(arr))
//[ 7, 8 ]

```
```js
// if asked to return an original array with missing number 
const arr=[1,2,3,4,5,6,9,10,18]



const missingValue =(arr)=>{
    const minV = Math.min(...arr)
    const maxV= Math.max(...arr)
    for (i=minV ; i<maxV ;i++){
        if (arr.indexOf(i)==-1){
            arr.push(i)
        }
        arr.sort((a,b)=>a-b)
    }
    return arr
}
console.log(missingValue(arr))
//output
//  [
//    1,  2,  3,  4,  5,  6,  7,
//    8,  9, 10, 11, 12, 13, 14,
//   15, 16, 17, 18
// ]

```

## to check if plaindrom or not 
```js
const palindrom =(word)=>{
    word=word.toLocaleLowerCase()
    return word=word.split("").reverse().join("")==word
    
}
console.log(palindrom("madam"))//true
console.log(palindrom("jvaaa"))//false
console.log(palindrom("Madam"))//true

```