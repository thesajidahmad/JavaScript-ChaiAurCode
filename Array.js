// Array
// Difine Array
const myArray = [2, 4, 5, 9, 7, 3]
const myHeros = ["Ironman", "Spiderman", "Thor", "CaptainAmerica"]

const myNewArray = new Array(10, 15, 18, 45, 17)

console.log(myArray);

// Array Method
// .push  --> in this method we add new element from last in existing array and it changes in original array

myArray.push(8)
myArray.push(10, 15, 20)
console.log(myArray);


// .pop  --> in this method we remove an element from last in existing array and it also change the original array

myArray.pop()
console.log(myArray);


// .unshift  --> in this method we add new element from starting in existing array and it changes in original array

myArray.unshift(2)
myArray.unshift(20,15,17)
console.log(myArray);


// .shift  --> in this method we remove an element from starting in existing array and it also change the original array

myArray.shift()
console.log(myArray);


// .includes  --> in this method we check the array that the element we search is available or not, if the element is present it gives true if not then it give false

console.log(myArray.includes(2));     //true
console.log(myArray.includes(20));    //false


// .indexOf  --> in this method we check the index of element if element is present it gives indexOf that element otherwise it gives -1

console.log(myArray.indexOf(5));
console.log(myArray.indexOf(1));


// .join  --> it changes the array into string and join by given paramenter?

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"


// .slice  --> in this method chnages are temprory

console.log(myArray.slice(2, 6));
console.log(myArray);

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



// .splice  --> in this method chnages are parmanent means changes in original array

console.log(myArray.splice(2,6));
console.log(myArray);


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
