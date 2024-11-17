## 1. How to merge Two array and Sort Them
```js
// using concat
let array1=[1,2,3,4,5]
let array2=[6,7,8,9,0]

const ArrAdd=array1.concat(array2)
console.log(ArrAdd)

// using spread
let array1=[1,2,3,4,5]
let array2=[6,7,8,9,0]

const ArrAdd=[...array1,...array2]
console.log(ArrAdd)

// already know how to sort them
// phir bhi practise k liye karlo
let array2=[1,2,3,4,5]
let array1=[6,7,8,9,10]

function addarr(x,y){
    return x.concat(y).sort((a,b)=>a-b)
    
}
console.log(addarr(array1 ,array2))
```
## 2. finding factors of given integer
```js
let num=prompt("please enter Positive number ")

for (let i=0;i<=num;i++){
    if(num%i==0){
        console.log(i)
    }
}
if(num <= 0){
        console.log(`factors not posiible`)
    }
```

## 3. Making calculator
1. here we are using parsefloat to convert number into string 
2. otherwise js recursion is hapeen 
```js
const num1=parseFloat(prompt("enter 1st number"))
const operator=prompt("enter any one operator for Add + ,for subtract = -,for multiplication= * ,for devide = /")
const num2=parseFloat(prompt("enter 2nd number"))

if (operator== "+"){
   console.log(num1+num2)
}else if (operator== "*"){
   console.log(num1*num2)
}else if (operator== "-"){
   console.log(num1-num2)
}else if (operator== "/"){
   console.log(num1/num2)
}

```
## 4. How to compare two Arrays are Equal or Not in JavaScript

```js
var arr1= [2,9,6,8,4]
var arr2=[4,8,6,9,2]

const isArraySame=arr1.length==arr2.length && arr1.every((crr)=>{
    if(arr2.indexOf(crr)>-1){
        return (crr=[arr2.indexOf(crr)])
    }
})
console.log(isArraySame)

```
## 5. find intersection of two array in js
```js
// if asked to make function 
function findIntersection (array1 ,array2){
    const x = array1.filter((e)=>array2.includes(e))
    const y= [...new Set(x)]
    // using new Set to remove duplicate
    // features of es6
    return y
}
var arr1 =[2,9,6,8,4,4,4]
var arr2 =[4,8,6,9,12]
console.log(findIntersection (arr1 ,arr2))

```
```js
// otherwise
var arr1 =[2,9,6,8,4,4,4]
var arr2 =[4,8,6,9,12]
// finding the intersection 
// means returning the value which are commom in both 

let intersectionArr =arr1.filter((e)=>{
    return (arr2.includes(e))
})
console.log([...new Set(intersectionArr)])
```
## 6. findng union of 2 array
```js
function unionArr (array1 ,array2){
    const x =array1.concat(array2)
    const y= [...new Set(x)]
    return y
}
var arr1 =[2,9,6,8,4,4,4]
var arr2 =[4,8,6,9,12]
console.log(unionArr (arr1 ,arr2))

```
## 7. leap year
```js
// leap year programme 
const leapYear=(year)=>{
    if(isNaN(year)){
        console.log("please enter a valid year ")
        return 
    }
    if((year%4===0 && year&100 !== 0)|| year%400 ===0){
        console.log(`${year} is a leap year` )
    }else{
        console.log(`${year} is not a leap year`)
    }
}

let year=prompt('enter a year')

console.log(leapYear(year))

```