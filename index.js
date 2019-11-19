
function writeCards(namesArray, event){
  let thanksArray = [];
  let thanksString;
  for (let i = 0; i < namesArray.length; i++) {
    thanksString = `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`;
    console.log(thanksString);
    thanksArray.push(thanksString);
  }
  return thanksArray;
}

function countDown (num){

  let countdown = num;
    while (countdown > -1) {
      console.log(countdown--);
    }

}

