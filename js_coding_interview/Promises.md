## 1. what is promise 
    1. promise is an Object representing eventual completion or rejection of assync operation 

    2. there are 3 state of promise

        1. Pending: The initial state, neither fulfilled nor rejected.

        2. Fulfilled: The operation completed successfully.

        3. Rejected: The operation failed.

## 2. How do you create promises 
1. using Promise constructor 
2. it takes single finction k.a executer function that define assync operation and its resolution 

```js
const myPromise= new Promise((resolve,reject)=>{
    // dont confuse here set timeout is just for artificial delay
    // can write promise w/o settimeout also
    setTimeout(()=>{
        let suc =false
        
        if(suc){
            resolve("task complete")
        }else{
            reject("not complete")
        }
    },2000)
})

myPromise.then((msg)=>{
    console.log("sucess" ,msg)
}).catch((error)=>{
    console.log("error" ,error)
}).finally(()=>{
    console.log("promise is settled")
})

```
## 3. How do you Handle result of promises 
1. we can use .then methode for successfull resolution 
2. .catch for rejection 

## 4. How do you chain multiple promises together
1. using .then methode
2. 
## 7 how to handle multiple promises

