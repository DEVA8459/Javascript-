What's the output?

function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
(1 Point)

Lydia and undefined

Lydia and ReferenceError

ReferenceError and 21

undefined and ReferenceError

5.What's the output?

+true; 
! 'Lydia';
(1 Point)

1 and false

false and NaN

false and false
6.What's the output?

let greeting;
greetign = {}; // Typo!
console.log(greetign);
(1 Point)

{}

ReferenceError: greetign is not defined

undefined
7.What's the output?

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
(1 Point)

20 and 62.83185307179586

20 and NaN

20 and 63

NaN and 63

8.What's the output?

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);
(1 Point)

Person {firstName: "Lydia", lastName: "Hallie"} and undefined

Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}

Person {firstName: "Lydia", lastName: "Hallie"} and {}

Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError

9.Which of these values are falsy?

0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;
(1 Point)

0, '', undefined

0, new Number(0), '', new Boolean(false), undefined

0, '', new Boolean(false), undefined

All of them are falsy
10.What's the output?

String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

name.giveLydiaPizza();
(1 Point)

"Just give Lydia pizza already!""Just give Lydia pizza already!"

TypeError: not a function

SyntaxError

undefined
11.How long is cool_secret accessible?

sessionStorage.setItem('cool_secret', 123);
(1 Point)

Forever, the data doesn't get lost.

When the user closes the tab.

When the user closes the entire browser, not only the tab.

When the user shuts off their computer.
12.What is the output?

const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));
(1 Point)

Calculated! 20 Calculated! 20 Calculated! 20

Calculated! 20 From cache! 20 Calculated! 20

Calculated! 20 From cache! 20 From cache! 20

Calculated! 20 From cache! 20 Error
13.How can we log the values that are commented out after the console.log statement?

function* startGame() {
  const answer = yield 'Do you love JavaScript?';
  if (answer !== 'Yes') {
    return "Oh wow... Guess we're gone here";
  }
  return 'JavaScript loves you back ❤️';
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
(1 Point)

game.next("Yes").value and game.next().value

game.next.value("Yes") and game.next.value()

game.next().value and game.next("Yes").value

game.next.value() and game.next.value("Yes")
14. What's the output?

const person = { name: 'Lydia' };

Object.defineProperty(person, 'age', { value: 21 });

console.log(person);
console.log(Object.keys(person));
(1 Point)

{ name: "Lydia", age: 21 }, ["name", "age"]

{ name: "Lydia", age: 21 }, ["name"]

{ name: "Lydia"}, ["name", "age"]

{ name: "Lydia"}, ["age"]
15.What's the output?

[1, 2, 3].map(num => {
  if (typeof num === 'number') return;
  return num * 2;
});
(1 Point)

[]

[null, null, null]

[undefined, undefined, undefined]

[ 3 x empty ]
16.QuestionWhat's the output?

const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape);
(1 Point)

{ x: 100, y: 20 }

{ x: 10, y: 20 }

{ x: 100 }

ReferenceError
17. Which option is a way to set hasName equal to true, provided you cannot pass true as an argument?

function getName(name) {
  const hasName = //
}
(1 Point)

!!name

name

new Boolean(name)

name.length
18. What's the output?

const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
(1 Point)

[1, [2, 3, 4]] and undefined

[1, [2, 3, 4]] and { name: "Lydia", age: 21 }

[1, 2, 3, 4] and { name: "Lydia", age: 21 }

Error and { name: "Lydia", age: 21 }
19.What's the output?

const myPromise = Promise.resolve(Promise.resolve('Promise!'));

function funcOne() {
  myPromise.then(res => res).then(res => console.log(res));
  setTimeout(() => console.log('Timeout!', 0));
  console.log('Last line!');
}

async function funcTwo() {
  const res = await myPromise;
  console.log(await res);
  setTimeout(() => console.log('Timeout!', 0));
  console.log('Last line!');
}

funcOne();
funcTwo();
(1 Point)

Promise! Last line! Promise! Last line! Last line! Promise!

Last line! Timeout! Promise! Last line! Timeout! Promise!

Promise! Last line! Last line! Promise! Timeout! Timeout!

Last line! Promise! Promise! Last line! Timeout! Timeout!
20.QuestionWhich of the following will modify the person object?

const person = {
  name: 'Lydia Hallie',
  address: {
    street: '100 Main St',
  },
};

Object.freeze(person);
(1 Point)

person.name = "Evan Bacon"

delete person.address

person.address.street = "101 Main St"

person.pet = { name: "Mara" }
21.What's the output?

const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

console.log(animals[dog])
(1 Point)

{ emoji: "🐶", name: "Mara" }

{ emoji: "🐈", name: "Sara" }

undefined

ReferenceError
22.What should the value of method be to log { name: "Lydia", age: 22 }?

const keys = ["name", "age"]
const values = ["Lydia", 22]

const method = /* ?? */
Object[method](keys.map((_, i) => {
      return [keys[i], values[i]]
})) // { name: "Lydia", age: 22 }
(1 Point)

entries

values

fromEntries

forEach

23.Write the output:

setTimeout(()=> console.log(1),0);  
 console.log(2);
 
new Promise( res => {  
   console.log(3);  
   res();  
 }).then(() => console.log(4));
 
console.log(5);
(1 Point)