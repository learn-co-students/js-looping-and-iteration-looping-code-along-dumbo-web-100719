// Code your solutions in this file
const names = ["Alina", "Alicia"]

function writeCards( names, event ) {
    let thankYouCards = []
    for ( let i = 0; i < names.length; i++ ) {
      thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }

  function countDown(num) {
      let countdown = num;
      while (countdown >= 0) {
          console.log(countdown--)
      }
  }

