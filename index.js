// Code your solutions in this file

let array= []

function writeCards(names, events) {

for (let i = 0; i < names.length; i++) {

array.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);


}

return array

}

function countDown(i) {

    let countdown = i; 
    while (countdown >= 0) {
        console.log(countdown--);
    }

}
