// Code your solutions in this file
const writeCards = (arr,event) =>{
  let message = []
  for(let i=0; i< arr.length; i++){
    message.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
  }
  return message
}

const countDown = num =>{
  while(num>=0){
    console.log(num)
    num -=1
  }
}