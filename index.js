function writeCards(arr,eventName){
   let myArray = []
    for(let i =0; i < arr.length; i++){
        myArray.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
    }
    return myArray
}

function countDown(num){
    while(num >= 0){
        console.log(num--)
    }
    
}
