// Code your solutions in this file

const names = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(names) {

    let newArray = []

    for (let i = 0; i < names.length; i++) {

    newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);

    }

    return newArray
}

// let num = 10


function countDown() {
    for (let i = 10; i >= 0; i -= 1) {
        console.log(i)
    }
}
