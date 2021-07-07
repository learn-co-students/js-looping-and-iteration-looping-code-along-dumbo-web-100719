// Code your solutions in this file
arr = ["Lisa", "Kaitlin", "Jan"];
str = "surprise";


function writeCards(arr,str){
    let p = [];
    for(let i = 0; i < arr.length; i++)
    {
       arr[i] = `Thank you, ${arr[i]}, for the wonderful ${str} gift!`
    }
    return arr;
}


function countDown(num){
    for(let i = num  ; i >= 0; i--){
        if(num == i){
           
           console.log(i)
           }
        else{
            
            console.log(i)
        }
    }
}