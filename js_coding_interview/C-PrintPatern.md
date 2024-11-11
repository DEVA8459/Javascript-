## 1. print the following pattern 
```
1
12
123
1234
12345
```
```js
for (let i=1 ;i<=5;i++){
    // outer loop controls the no of rows 
    let row=""
    for (j=1;j<=i;j++){
        // .inner loop controls the content of the loop
        row += j
    }
    console.log(row)
}
```
## 2. 

```js
for (let i=1 ;i<=5;i++){
    let row=""
    for (j=1;j<=i;j++){
        row += "*"
    }
    console.log(row)
}
// *
// **
// ***
// ****
// *****
```

## 3.
```
     * 
    * * 
   * * * 
  * * * * 
 * * * * * 
```
```js
function printP(row){
for (let i=1 ;i<=row;i++){
    // for creating row
    let output =" "
    
    // for adding spaces
    // we need to to add only this loop in above code rest everything is same
    for (let j=1;j<=row-i;j++){
        output += " "
    }
    // for adding content in row
    for (let k=1;k<=i;k++){
        output += "*"+" "//write k+" " here to print 1234 wala pateern
    }
    console.log(output)
}}

printP(5)

```

## 4. to make inverted 
```
 * * * * * 
  * * * * 
   * * * 
    * * 
     * 
```
```js
function pattern(rows){
    // make changes only here 
    for (let i=rows ; i>=1 ;i--){
        let row=" "
        for (let k=1; k<=rows-i; k++ ){
            row += " "
        }
        for (let j=1 ; j<=i ;j++){
            row += "*"+" "
        }
      console.log(row)  
    }
    
}
pattern(5)
```
## 5.if we dont add in above code 3 "*"+" " we get
```
     *
    **
   ***
  ****
 *****
```
```js
function pattern(rows){
    for (let i=1;i<=rows ;i++){
        let row =" "
        for (let j=1;j<=rows-i;j++){
            row +=" "
        }
        for (let k=1;k<=i;k++){
            row += "*"
        }
        console.log(row)
    }
}
pattern(5)
```

## 5.  
```
  * * * * *
    * * * *
      * * *
        * *
          *
```
```js
function printP(rows){
for (let i=rows ;i>=1;i--){
    let row =" "
    
    for (let j=1;j<=(rows-i)*2;j++){
        row += " "
    }
    for (let k=1;k<=i;k++){
        row += " *"//replace it with k +""
    }
    console.log(row)
}}

printP(5)
```
