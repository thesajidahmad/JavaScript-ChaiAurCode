// console.log(Math.abs(-4.54));   //convert -ve numbers to +ve number only
// console.log(Math.round(4.5));   //round off the given number
// console.log(Math.ceil(4.2));    //round off the given number to upper value   e.g.--> 4.2 or 4.9 or 4.anything converted to 5
// console.log(Math.floor(4.9));    //round off the given number to lower value   e.g.--> 4.2 or 4.9 or 4.anything converted to 4
// console.log(Math.min(15,10,5,7,18,3));    //find out the min from given array
// console.log(Math.max(15,10,5,7,18,3));    //find out the max from given array



//Random number
// console.log(Math.random());

// WAP to find random numbers between 20 and 30
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));
console.log(Math.floor((Math.random()*10)+1)+20);

const min = 20
const max = 30

console.log(Math.floor(Math.random()*(max-min+1))+min);