## 1.what is DOM
1. Dom stand for Doocument Object MOdel
2. With the object model, JavaScript gets all the power it needs to create dynamic HTML:
    1. can change ,remove ,add - html -(element ,attribute)
    2. can change create ,remove - event-using AddEventListner
    3. can change all css style

## 2 -HTML DOM
1. The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

## 3- The DOM Programming Interface
1. In the DOM, all HTML elements are defined as objects.
2. A property is a value that you can get or set (like changing the content of an HTML element).
3. A method is an action you can do (like add or deleting an HTML element)
4. EX -
```JS 
 document.getElementById("demo").innerHTML = "Hello World!";
```
5. in the example above, getElementById is a method, while innerHTML is a property. 


## 4 .Finding HTML Elements
1. document.getElementById(id)         	    Find an element by element id
```js
const element = document.getElementById("intro");
```
2. document.getElementsByTagName(name)	    Find elements by tag name
```js
const element = document.getElementsByTagName("p");

// This example finds the element with id="main", and then finds all <p> elements inside "main":

const x = document.getElementById("main");

const y = x.getElementsByTagName("p");
```
3. document.getElementsByClassName(name)	Find elements by class name
```js
const x = document.getElementsByClassName("intro");
```
4. Finding HTML elements by CSS selectors
```js
//This example returns a list of all <p> elements with class="intro".
const x = document.querySelectorAll("p.intro");

```

5. Finding HTML elements by HTML object collections
```js
//This example finds the form element with id="frm1", in the forms collection, and displays all element
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;

```

## 5. Changing HTML Elements
1. element.innerHTML =  new html content	Change the inner HTML of an element
2. element.attribute = new value	        Change the attribute value of an HTML element
3. element.style.property = new style	    Change the style of an HTML element
4. element.setAttribute(attribute, value)	Change the attribute value of an HTML element

## 6. Adding and Deleting Elements
1. document.createElement(element)	  Create an HTML element
2. document.removeChild(element)	  Remove an HTML element
3. document.appendChild(element)	  Add an HTML element
4. document.replaceChild(new, old)	  Replace an HTML element
5. document.write(text)	          Write into the HTML output stream

## 7. Adding Events Handlers
1. document.getElementById(id).onclick = function(){code}	 Adding event handler code to an onclick event
2. 

## 8. Finding HTML Objects -just look @ trends
The first HTML DOM Level 1 (1998), defined 11 HTML objects, object collections, and properties. These are still valid in HTML5.

Later, in HTML DOM Level 3, more objects, collections, and properties were added.
document.anchors	Returns all <a> elements that have a name attribute	1
document.applets	Deprecated	1
document.baseURI	Returns the absolute base URI of the document	3
document.body	Returns the <body> element	1
document.cookie	Returns the document's cookie	1
document.doctype	Returns the document's doctype	3
document.documentElement	Returns the <html> element	3
document.documentMode	Returns the mode used by the browser	3
document.documentURI	Returns the URI of the document	3
document.domain	Returns the domain name of the document server	1
document.domConfig	Obsolete.	3
document.embeds	Returns all <embed> elements	3
document.forms	Returns all <form> elements	1
document.head	Returns the <head> element	3
document.images	Returns all <img> elements	1
document.implementation	Returns the DOM implementation	3
document.inputEncoding	Returns the document's encoding (character set)	3
document.lastModified	Returns the date and time the document was updated	3
document.links	Returns all <area> and <a> elements that have a href attribute	1
document.readyState	Returns the (loading) status of the document	3
document.referrer	Returns the URI of the referrer (the linking document)	1
document.scripts	Returns all <script> elements	3
document.strictErrorChecking	Returns if error checking is enforced	3
document.title	Returns the <title> element	1
document.URL	Returns the complete URL of the document	1

## 9. Changing HTML Content
1. The HTML DOM allows JavaScript to change the content of HTML elements.
2. To change the content of an HTML element, use this syntax:
    1. document.getElementById(id).innerHTML = new HTML
```js
<html>
<body>

<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML = "New text!";
</script>

</body>
</html>

```

## 10.Changing the Value of an Attribute
1. To change the value of an HTML attribute, use this syntax:
    1. document.getElementById(id).attribute = new value
```js
<!DOCTYPE html>
<html>
<body>

<img id="myImage" src="smiley.gif">

<script>
document.getElementById("myImage").src = "landscape.jpg";
</script>

</body>
</html>
```

## 11. JavaScript Form Validation

```html
<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>
```
```js
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
```

## 12 JavaScript Can Validate Numeric Input
```js
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Validation</h2>

<p>Please input a number between 1 and 10:</p>

<input id="numb">

<button type="button" onclick="myFunction()">Submit</button>

<p id="demo"></p>

<script>
function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html> 

```

## 13. Changing HTML Style
```js
<html>
<body>

<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color = "blue";
</script>

</body>
</html>

```

## 13. Event Listner
```js
element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}
```
1. The addEventListener() method allows you to **add many events to the same element**, without overwriting existing events:
```js
element.addEventListener("click", myFunction);
element.addEventListener("click", mySecondFunction);
```
2. You can add events of different types to the same element:
```js
element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
```

## 14. Event Bubbling and capturing
1. bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

2. capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

3. With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter:
    1. addEventListener(event, function, useCapture);

4. The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.

```js
document.getElementById("myP").addEventListener("click", myFunction, true);
document.getElementById("myDiv").addEventListener("click", myFunction, true);
```
## 15. The removeEventListener() method
1. The removeEventListener() method removes event handlers that have been attached with the addEventListener() method:
    1. element.removeEventListener("mousemove", myFunction);

