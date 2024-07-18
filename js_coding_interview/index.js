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
