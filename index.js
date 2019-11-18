// Code your solutions in this file
function writeCards(arr, occasion) {
    let messages = []
    for (let i = 0; i < arr.length; i++) {
        messages.push(`Thank you, ${arr[i]}, for the wonderful ${occasion} gift!`);
    }
    return messages
}

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1; 
    }
    console.log(startingNumber);
}