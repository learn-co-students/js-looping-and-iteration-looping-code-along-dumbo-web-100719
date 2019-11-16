// Code your solutions in this file
const people = ["Hope", "Gene", "Raq"];

function writeCards(people, event) {
    let x = [];
for (let i=0; i< people.length; i++ ) {
x.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
}
return x;
}

function countDown() {
let y = 10;
while (y >= 0) {
  console.log(y--);
}
}