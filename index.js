// Code your solutions in this file

function writeCards(names, event){
   const thanks = []
    for (let i=0; i< names.length; i++){
      thanks[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    }
    return thanks;
}

function countDown(integer){
    while (integer >=0 ){
        console.log(integer--);
        
    }
}