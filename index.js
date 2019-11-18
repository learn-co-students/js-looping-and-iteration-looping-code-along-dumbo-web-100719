function writeCards(cards, eventName){
    let cardsArr = []
    for (let i = 0; i < cards.length; i++){
        cardsArr.push( `Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`);
    }
    return cardsArr;
}

function countDown(num){
    let i = 0
    while (num >= 0) {
        console.log(num);
       num -= 1;
    }
    
}
// Code your solutions in this file
