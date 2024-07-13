// 1
console.log("" || 1 || 2); //true

// 2
const num = null;
const number = num ?? "a default number";
console.log(number); 

// 3
const theif = {
    hair: 'black',
    jacket: 'blue',
}

const aTheifCaught = theif.tall?.aTheifCaught;
console.log(aTheifCaught);
