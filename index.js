// Code your solutions in this file

function writeCards(arr, msg) {
    let newArray = []
    for (let i = 0; i < arr.length; i++){
        newArray.push(`Thank you, ${arr[i]}, for the wonderful ${msg} gift!`);
    }
    return newArray
}


function countDown(num){
    while (num > 0){
        console.log(num--)
    }
    console.log(num);
}
