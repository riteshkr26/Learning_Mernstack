// array declaration
let arr1 = [1, 2, 3, 4, 5];
let arr2 = []; // empty array
let arr0 = new Array(5); // array of length 5    
// accessing elements
console.log(arr1[0]);


// modifying elements
arr1[1] = 10;
console.log(arr1);   
// array length
console.log(arr1.length);
// adding elements
arr1.push(6);
console.log(arr1);
// removing elements
arr1.pop();
console.log(arr1);       
//removing first element
arr1.shift();
console.log(arr1);
// adding element at the beginning
arr1.unshift(0);
console.log(arr1);
 //spllicing an array means removing or replacing elements in an array where we specify 
 //the index and the number of elements to remove first parameter is the index and second parameter is the number of elements to remove
let newArr = arr1.splice(2, 1);   
console.log(newArr);   
console.log(arr1);   

//slicing ka matlab hai ek array ke ek hisse ko nikalna jisme hum start index aur end index specify karte hain
let slicedArr = arr1.slice(1, 4);    
console.log(slicedArr);


//reversing an array
arr1.reverse();
console.log(arr1);   

//sorting an array
arr1.sort(function(a, b) {
    return a - b; // for ascending order and b-a for descending order
}); 
console.log(arr1    );


// iterating over an array
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}   

// using forEach method
arr1.forEach(function(element) {
    console.log(element);
});
 

// using map method to create a new array with modified elements
let newArr2 = arr1.map(function(element) {
    return element * 2; // multiplying each element by 2
}); 
console.log(newArr2);

// using filter method to create a new array with elements that satisfy a condition 
let filteredArr = arr1.filter(function(element) {
    return element > 2; // keeping elements greater than 2
});
console.log(filteredArr);

//map or filter are used to create a new array based on the original array,
// while forEach is used to perform an action on each element of the array without creating a new array.


// 1. MAP: Har item ko badal kar naya array banata hai (Length same rehti hai)
// Why: Jab saare items par same operation karna ho (e.g., 3 Aam = 3 Glass Juice)
let doubled = arr1.map(num => num * 2);

// 2. FILTER: Condition ke hisab se items ko chhaanta hai (Length chhoti ho sakti hai)
// Why: Jab pure array mein se kuch khaas items nikalne hon (e.g., Chai patti chhannna)
let expensive = arr1.filter(p => p > 10);

// 3. FOREACH: Har item par action karta hai, lekin naya array nahi banata
// Why: Jab humein sirf side effects chahiye (e.g., Console mein print karna)
arr1.forEach(num => console.log(num));   


//Reduce: Array ke items ko ek single value mein badal deta hai (e.g., Total price nikalna)
let prices = [10, 20, 30];
let total = prices.reduce((sum, p) => sum + p, 0); // 0 is the initial value    
console.log(total);


//Find: Array mein se pehla item dhoondta hai jo condition ko satisfy karta ho
let numbersgi = [1, 2, 3, 4, 5];
let found = numbersgi.find(num => num > 3);
console.log(found); 

//some: Array ke items mein se koi bhi item condition ko satisfy karta hai ya nahi, true/false return karta hai
let hasEven = numbersgi.some(num => num % 2 === 0);
console.log(hasEven);   

//every: Array ke saare items condition ko satisfy karte hain ya nahi, true/false return karta hai
let allPositive = numbersgi.every(num => num > 0);
console.log(allPositive);  

 
//destucturing an array means extracting values from an array and assigning them to variables in a single line of code
let [a, b, c] = arr1;
console.log(a, b, c);

//spread operator to copy an array
//spread operator is used to copy an array or to combine two arrays. It is denoted by three dots (...)
let newArr3 = [...arr1];
console.log(newArr3);       

let arr3 = [1, 2, 3];
let arr4     = [4, 5, 6]; // combining two arrays using spread operator
let combinedArr = [...arr3, ...arr4];   //output: [1, 2, 3, 4, 5, 6]
console.log(combinedArr);   


//practise questions
/*
1. what is the difference between push or unshift and pop or shift?
Push and unshift are used to add elements to an array, while pop and shift are used to remove elements from an array. 
- push adds an element to the end of the array, while unshift adds an element to the beginning of the array.
- pop removes the last element from the array, while shift removes the first element from the array.    


2. what is the difference between splice and slice?
- splice is used to add or remove elements from an array, while slice is used to create a new array by extracting a portion of an existing array.
- splice modifies the original array, while slice does not modify the original array and returns a new array. 
- splice takes three parameters: the starting index, the number of elements to remove, and the elements to add (optional), 
while slice takes two parameters: the starting index and the ending index (optional).   */

// 3. Insert "red and "blue" at index 1 in this array ["green", "yellow"].
let colors = ["green", "yellow"];
colors.splice(1, 0, "red", "blue");     
console.log(colors); // Output: ["red", "blue", "green", "yellow"]

//4. Extract only the middle 3 elements from this array [1, 2, 3, 4, 5, 6, 7].
let numbers = [1, 2, 3, 4, 5, 6, 7];
let middleElements = numbers.slice(2, 5);    
console.log(middleElements); // Output: [3, 4, 5]
 
// 5. Use .map to square each number in this array [1, 2, 3, 4, 5].
let nums = [1, 2, 3, 4, 5];
let squaredNums = nums.map(num => num * num);    
console.log(squaredNums); // Output: [1, 4, 9, 16, 25]  

// 6. Destruct this array to get firstname and lastname 
let fullName = ["Ritesh", "Sharma"];
let [firstName, lastName] = fullName;    
console.log(firstName); // Output: "Ritesh"
console.log(lastName);  // Output: "Sharma"    
