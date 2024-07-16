## Basics of Arrays in javascript
 1. arrays is a **collection of items**
 2. arrays vs object--- 
    1. object has **key value pair** and name of key is important 
    2. but in **arrays position(indices) of items** is important
    3. arrays is not a separtae type but its a **sub type of object**
3. arrays doesnot haave keys value pair it just having single value or index value pair **in sq bracket** separated by commas
```js
 in object 
        let marks={
            stu1:95,
            stu2:94,
            stu3:98,
            stu4:84,
        } here stu are keys value pair
in Arrays
        let marks =[ 95,94,98,84]
```
4. arrays is use **to collect same type of information**
5. arrays is way of collecting items in **single line or in linear manner**
 here we use square brackets
6. array **can be of same data type and of diff data type**
```js ex---
    let heroes = [ "ironman", "hulk", "thor","batman"];
    let marks = [ 96, 75, 48, 83, 66 ];
```
7. anthor way to declare array
```js
 let myArr2=new Array( "ironman", "hulk", "thor", "batman" );---//it automaticaallly adds the square brackets

    document.writeln(marks);
    console.log(marks)--------// here in console we can also see position and length of arrays by default
    
    //similaryly we can perint length of arrays also 
    document.writeln(marks.length); or
    console.log(marks.length)
```

8. in single arrays we can add **diff type of information** like boolean, string ,num etc but **generally we dont prefer it**
```js     
    let info = [ "rahul", 86, "Delhi" ];
```

## Array Indices
1. arr[0], arr[l], arr[2] etc
2. we also can **change arrays** value
```js
let marks = [96, 75, 48, 83, 66]
//to change 75 
arr[1]= 85 //-------- bus all set hai fir
```
3. this thing to **change in original** is possible in arrays(**bc it is mutable**) but 
4. **not possible in string bc its immutable** ( refer last lecture)(stack and heap memory)


## looping over in arrays
1. to print all elements in araays using loops
```js 
 let heroes = [ "ironman", "hulk", "thor", "batman","antman","spiderman" ,"thanos" ];

 for(let i=0 ; i < heroes.length ; i++){
    `your hero Name is :${heroes[i]}`
 }

 //but gnerally we use for-of loop
 // for of
for (let hero of heroes){
    console.log(hero);
}
```

# Arrays methode

## 1. push( ) : add to end
1. The push method adds *one or more elements* **to the end of an array**.
```js
let foodltems = ["potato", "apple", "litchi", "tomatoQ"] ;
foodltems.push("burger", "paneer") ;
console.log(foodltems)
```

2. it can add **Element**  but if we use push for adding/merging two array it nested the other array
```js 

let foodltems = ["potato", "apple", "litchi", "tomato"]
let addfooditems=[iichipsii ,"burger", "paneer"]
fooditems.push (addfooditems)
             
//fooditems=["potato", "apple", "litchi", "tomatoQ" ,[iichipsii ,"burger", "paneer"]]
```
3. so it added array wiythin array so for such case we **use concat**

## 2. concat( ) : joins multiple arrays & returns result

```js
let marvelHeroes= ["thor","spiderman","ironman"] ;
let dcHeroes= ["superman", "batman"];
marvelHeroes.concat(dcHeroes)
console.log(marvelHeroes)
//it return ["thor","spiderman","ironman"]
// so why it did not add
// it wont work because concat returns a new array ,doesenot change the original array 

// corrected code

let marvelHeroes= ["thor","spiderman","ironman"] ;
let dcHeroes= ["superman", "batman"];
let allhero=marvelHeroes.concat(dcHeroes)
console.log(allhero)
```

## 3. spread -or we can use more easy one 

```js
let foodltems = ["potato", "apple", "litchi", "tomato"]
let addfooditems=["iichipsii" ,"burger", "paneer"]

let allnewfooditems = [...foodltems, ...addfooditems ] 
console.log(allnewfooditems)
  
```
## 4. pop( ) : delete end item & return that element
```js
 let heroes = [ "ironman", "hulk", "thor", "batman","antman","spiderman" ,"thanos" ];
 let moreH=["drstrange" ,"widow"]
    
 console.log(heroes.pop()) //thanos

```

## 5.toString( ) : converts array to string
```js
 let heroes = [ "ironman", "hulk", "thor", "batman","antman","spiderman" ,"thanos" ];
let newHero= heroes.toString()

console.log(newHero)

```

## 6 unshift ( ) : add to start
```js
 let heroes = [ "ironman", "hulk", "thor", "batman","antman","spiderman" ,"thanos" ];
heroes.unshift("captainAmerica")

console.log(heroes)

```

## 7 shift( ) : delete from start & return th eoriginal array
```js
 let heroes = [ "ironman", "hulk", "thor", "batman","antman","spiderman" ,"thanos" ];
heroes.shift()

console.log(heroes)
```
## 8 Slice( ) : returns a piece of the array ,doesent cahnge original array
1. slice( startldx, endldx )
```js

let marvelHeroes= ["thor", "spiderman", "ironman","antman", "Dr. Strange"]

console.log(marvelHeroes.slice( 1,3))
// [ 'spiderman', 'ironman' ]
```
## 8. splice( ) : change original array (add, remove, replace) but it  return the deleted item
1. splice( startldx, delCount, newE11... )
```js
let arr=[1,2,3,4,5,6,7]
arr.spIice(2, 2, 101, 102);

// to Add Element
arr.splice(2, 0, 101);
        2---no if index 
        0---HOW MANY ELENET TO ADD OR DELETE 
        101---new no to add
//Delete Element
  arr.splice(3, 1);

//Replace Element
drr.splice(3, 1, 101)

```

## 9.---to flaten the element 
```js 
let Arr=[1,2,3,[4,5,6],7,[8,9,[5,9]]]

 //to maake it flat 
let new_flat_a= Arr.flat(Infinity)
 console.log(new_flat_a)

//here insteadd of Infinity we can use depth, i.e tillwher we want to flaten it 1 ,2 ,3 ,4 th array so if we diont know then use Infinity to flaten hole array 
// 1 only upper array is removed nested not removed
// 2  one nested array remove remove
// infinity all nested arra remove

```
## 11. Array.isArray 
1. to check anything is  aray or not 
```js
console.log(Array.isArray("DEVENDRA"))  //false because it isa string 
```
## 12.Array.from
1. to convert anything into array
```js
console.log(Array.from("DEVENDRA")) 
// ['D', 'E', 'V', 'E', 'N', 'D', 'R', 'A']

//but -- if we give kety value pair it gives empty arraay 

console.log(Array.from({name:"DEVENDRA"})) --//[]
```



