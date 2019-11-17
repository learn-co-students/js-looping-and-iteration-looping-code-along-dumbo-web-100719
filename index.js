// Code your solutions in this file
function writeCards(arr, eventName) {
    for (let i = 0; i < arr.length; i++) {
        let currentName = arr[i];
        arr.splice(i, 1, `Thank you, ${currentName}, for the wonderful ${eventName} gift!`);
    }
    return arr;
}

function countDown(num) {

    while (num >= 0) {
        console.log(num);
        num--;
    };
}

