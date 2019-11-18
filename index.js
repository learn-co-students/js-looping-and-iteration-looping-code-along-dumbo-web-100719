// Code your solutions in this file
function writeCards(array, name){
    let arr = []
    for (let i = 0; i < array.length; i++){
    arr.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`);
    }
    return arr;
}

 function countDown(number){
    while(number > 0){
        console.log(number);
        number -= 1
    }
    return console.log(number)
 }


