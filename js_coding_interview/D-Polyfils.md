#  polyfill
## 0. forEach 
```js
Array.prototype.mymap=function (cb){
    
    // this represent the array on which map is perform 
    for (let i=0;i<this.length; i++){
       cb(this[i],i,this)
        //this[i]: The current element of the array.
        // i: The index of the current element.
        // this: The original array.
    }
    return temp
}
```
## 1. MAP
```js
Array.prototype.mymap=function (cb){
    let temp=[]
    // this represent the array on which map is perform 
    // map ka ache se karlo isse baki sab nikal sakte hai
    for (let i=0;i<this.length; i++){
        temp.push(cb(this[i],i,this))
        //this[i]: The current element of the array.
        // i: The index of the current element.
        // this: The original array.
    }
    return temp
}
```

## 2. filter 
```js
Array.prototype.myfilter=function (cb){
    let temp=[]
    for (let i=0;i<this.length;i++){
        // map vs filter
        // filter returns us array that passes the test
        // thats why if 
        if (cb(this[i],i,this))
        temp.push(this[i])
    }
    return temp
}
```
## 3. Reduce
```js
Array.prototype.myReduce=function (cb ,initialvalue){
    var accumulator =initialvalue
    for (let i=0;i<this.length;i++){
       accumulator =accumulator?cb(accumulator,this[i],i,this):this[i]
        }
    return accumulator
}
```
## 4. call 

```js
Function.prototype.mycall=function(context={}, ...args){
    if(typeof this !== "function"){
        throw Error(this + "it's not callable")
    }
    context.fn= this 
    context.fn(...args);
}

```
## 5. apply 
```js
Function.prototype.myApply=function(context={}, args=[]){
    if(typeof this !== "function"){
        throw new Error(this + "it's not callable")
    }
    if(!Array.isArray(args)){
        throw new TypeError("CreateListFromArrayLike called on non-object")
    }
    context.fn= this 
    context.fn(...args);
}
```

## 6. Bind
```js 
Function.prototype.myBind=function(context={}, ...args){
    if(typeof this !== "function"){
        throw new Error(this + "cannot be bound as it's not callable")
    }
    context.fn= this ;
    return function (...newArgs){
    return context.fn(...args,...newArgs);}
}

```
## 7. once 
1. when no matte rhow many times function is is called it should be run only once
```js
function once(func ,context ){
    let ran ;
    return function (){
        if (func){
            ran =func.apply(context || this,arguments)
            func =null
    }
    return ran
    }
}
const hello = once(()=>{
    console.log("hello")
})
hello()
hello()
hello()
hello()
hello()

```