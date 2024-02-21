const min = 100000000
const max = 999999999

function myFunction(){
  console.log((`9${Math.floor(Math.random()*(max - min + 1) + min)}`));
}


for (let count = 0; count < 10; count++) {
  myFunction()
  
}