const Name = "Sajid "
const Age = 19

// Srtring
console.log(Name + Age + " MohammadPur");
console.log(`My name is ${Name} and i am ${Age} years old and i belongs from Mohammadpur, Gopalganj...`)


const myString = new String('Sajid-Lucky-Com')

console.log(myString[2]);
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.charAt(2));
console.log(myString.indexOf('L'));

const NewString = myString.substring(6,11)
console.log(NewString);

const AnotherString = myString.slice(-15,2)
console.log(AnotherString)

const newStringOne = "    Sajid    "
console.log(newStringOne);
console.log(newStringOne.trim(' '));

const url = "https://sajid.com/sajid%20ahamd"
console.log(url.replace("%20", "-"));
console.log(url.includes("sajid"));   //true
console.log(url.includes("raza"));    //false
console.log(myString.split('-'));   
console.log(myString.split('-')[1]);    //Lucky