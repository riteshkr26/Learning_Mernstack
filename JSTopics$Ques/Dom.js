/* Dom tree structure
1. Document
2. Element
3. Attribute
4. Text
5. Comment

Document: The root of the DOM tree, representing the entire HTML or XML document. It provides methods to access and manipulate the content of the document.

Element: Represents an HTML or XML element. It can have attributes, child elements, and text content. 
Elements are the building blocks of the DOM tree and can be accessed and manipulated using various methods.    

Attribute: Represents an attribute of an element. It consists of a name and a value. Attributes provide additional information about an element and 
can be accessed and modified using methods like getAttribute() and setAttribute().

Text: Represents the text content of an element. It can be accessed and modified using methods like textContent or innerText.

Comment: Represents a comment in the HTML or XML document. Comments are not displayed on the webpage but can be used for documentation or to provide explanations within the code.

The DOM tree structure allows developers to navigate and manipulate the elements, attributes, and text content of a document using JavaScript.
It provides a way to dynamically change the content and structure of a webpage based on user interactions or other events.

example of DOM tree structure
HTML Document
├── <html>
│   ├── <head>
│   │   ├── <title>My Web Page</title>
│   │   └── <meta charset="UTF-8">
│   └── <body>
│       ├── <h1>Welcome to My Web Page</h1>
│       ├── <p>This is a sample paragraph.</p>
│       └── <ul>
│           ├── <li>Item 1</li>
│           ├── <li>Item 2</li>
│           └── <li>Item 3</li>
│       </ul>
└── <!-- This is a comment -->

 In this example, the DOM tree structure represents an HTML document with a root element <html>, which contains a <head> and a <body>. 
 The <head> contains a <title> and a <meta> tag,
 while the <body> contains an <h1>, a <p>, and a <ul> with three <li> items. Additionally, there is a comment at the end of the document.    */


//Selectinng elements in the DOM can be done using various methods provided by the Document object. Here are some common methods for selecting elements:

//1. getElementById(): Selects an element by its unique ID.
const elementById = document.getElementById('myElement');
console.log(elementById);
//2. getElementsByClassName(): Selects all elements with a specific class name.
const elementsByClassName = document.getElementsByClassName('myClass');
console.log(elementsByClassName);
//3. getElementsByTagName(): Selects all elements with a specific tag name.
const elementsByTagName = document.getElementsByTagName('p');
console.log(elementsByTagName);
//4. querySelector(): Selects the first element that matches a specified CSS selector.
const firstElement = document.querySelector('.myClass');
console.log(firstElement);
//5. querySelectorAll(): Selects all elements that match a specified CSS selector.
const allElements = document.querySelectorAll('.myClass');
console.log(allElements);
//6. getElementsByName(): Selects all elements with a specific name attribute.
const elementsByName = document.getElementsByName('myName');
console.log(elementsByName);

let h1 = document.querySelector('h1');
console.dir(h1);
h1.textContent = 'Hello World'; //output: Hello World 
h1.innerHTML = "Hello Ritesh" // or "<b>Hello Ritesh</b> <i>Sharma</i>"; //output: Hello Ritesh Sharma (with Hello Ritesh in bold and Sharma in italic)
h1.innerText = "Hello Ritesh Sharma"; //output: Hello Ritesh Sharma

// innerText only looks at the visible parts of the page.
// If a person cannot see it because it is hidden or covered up, innerText ignores it.
const visibleText = element.innerText;

// textContent acts like a robot with x-ray vision.
// It sees hidden text, background code, and invisible spacing that a human eye would completely miss.
const rawText = element.textContent;


//here we are changing the text content of the h1 element using textContent, innerHTML, and innerText properties.

//attributte manipulation
let link = document.querySelector('a');
console.dir(link);
link.href = 'https://www.google.com'; // This will change the href attribute of the link to "https://www.google.com"
link.setAttribute('href', 'https://www.google.com'); // This will change the href attribute of the link to "https://www.google.com"
link.setAttribute('target', '_blank'); // This will add a new attribute "target" with the value "_blank" to the link, which will open the link in a new tab when clicked.

let img = document.querySelector('img');
console.dir(img);
img.setAttribute('src',
    'https://c4.wallpaperflare.com/wallpaper/266/364/892/download-nature-full-size-1920x1080-wallpaper-preview.jpg'); // This will change the src attribute of the image to "https://www.example.com/image.jpg"

//getting attributes
let imgSrc = img.getAttribute('src');
console.log(imgSrc); // This will log the current value of the src attribute of the image to the console.

let linkHref = link.getAttribute('href');
console.log(linkHref); // This will log the current value of the href attribute of the link to the console. 

let src = document.querySelector('img');
src.removeAttribute('src'); // This will remove the "src" attribute from the image, which means that the image will no longer display when clicked.

//Dynamic DOM manipulation
let newElement = document.createElement('p');
newElement.textContent = 'This is a new paragraph.'; // This will create a new <p> element and set its text content to "This is a new paragraph."
console.dir(newElement);
//document.body.append or prepend(newElement); // This will append the newly created <p> element to the end of the <body> element, making it visible on the webpage.
document.querySelector('body').prepend(newElement); // prepend() method will add the new element as the first child of the body element, meaning it will appear at the top of the body content on the webpage.
//appendChild() method will add the new element as the last child of the body element, meaning it will appear at the bottom of the body content on the webpage.
document.body.appendChild(newElement); // This will append the newly created <p> element to the end of the <body> element, making it visible on the webpage.
//removeChild() method will remove a specified child element from the parent element. In this case, it will remove the newElement from the body of the document, effectively removing it from the webpage.
//document.body.removeChild(newElement); // This will remove the newElement from the body of the document, effectively removing it from the webpage.


// 1. SELECTING ELEMENTS
let h3 = document.querySelector('h1');

// 2. CHANGING STYLES DIRECTLY
//h3.style.color = 'aqua'; //change text color to aqua 
//h3.style.fontSize = '24px'; //change font size to 24 pixels
//h3.style.backgroundColor = 'yellow'; //change background color to yellow

// 3. USING CLASSLIST (ADD, REMOVE, TOGGLE)
// Add 'Heading' class to <h1> (applies CSS styles)
h3.classList.add('Heading'); 

// Add 'light' class to <h2> (applies CSS styles)
let h2 = document.querySelector('h2');
h2.classList.add('light'); 

// Remove 'Heading' class from <h2>
//h3.classList.remove('Heading'); 

// Toggle 'acllass' class on <h2> (Removes if exists, adds if missing)
let link2 = document.querySelector('a');
link2.classList.toggle('acllass'); // This will toggle the 'aclass' class on the element with the variable name 'a'. If the class is currently applied to the element, it will be removed; if it is not currently applied, it will be added.

//create new list iteam <li> and add it to the end of a <ul> .
let newListItem = document.createElement('li');
newListItem.textContent = 'New Item'; // Set the text content of the new list item
let ul = document.querySelector('ul');
ul.appendChild(newListItem); // Append the new list item to the end of the <ul>

//remove the first item from the list
let firstListItem = ul.querySelector('li'); // Select the first <li> element within the <ul>
ul.removeChild(firstListItem); // Remove the first list item from the <ul>


//create a new image element with a placehoder source and add it at the top of a div .

let newImage = document.createElement('img');
newImage.src = 'https://via.placeholder.com/150';
newImage.classList.add('new-image'); // Add a class to the new image for styling purposes
let div = document.querySelector('div');
div.prepend(newImage); // Add the new image as the first child of the div   


//set the font-size of all <p> elements to 18 pixels using a loop.
let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    p.style.fontSize = '18px'; // Set the font size of each <p> element to 18 pixels
});

