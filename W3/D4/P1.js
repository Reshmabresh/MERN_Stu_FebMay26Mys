//Array basics 
console.log("Array Basics");
//Creating arrays
let emptyArray = [];
let numArray = [1, 2, 3, 4];
let mixedArray = [42, "hello", true, null,{name: "Deepak"},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

//Using constructor
let fruits = new Array("Apple", "Mango", "Cherry");
console.log(fruits);
console.log("IS fruits an arry?" + Array.isArray(fruits));

// Push:Add
fruits.push("Cherry");
console.log(fruits);

//Pop:remove
fruits.pop();

//unshift: adda to beginning
fruits.unshift("Orange");
console.log(fruits);

//shift: remove from beginning
fruits.shift();
console.log(fruits);