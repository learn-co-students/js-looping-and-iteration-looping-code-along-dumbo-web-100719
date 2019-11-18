// Code your solutions in this file
function writeCards(arr, eventName) {
    let newArray = []
  for (let i = 0; i < arr.length; i++) {
   newArray.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
  }
  return newArray;
}
 
function countDown(){
    let start = 10;
      while (start > -1) {
    console.log(start--);
    }
}