
const myObject = {
    property: "value",
    otherProperty: 77,
    "obnoxious property": function(){
        //do stuff
    },
}

//dotnotation
console.log(myObject.property)

//bracket notation
console.log(myObject["obnoxious property"])

//objects as data structure
const playerOne = {
    name:"tim",
    marker:"X"
};

const playerTwo = {
    name:"jenn",
    marker:"Y"
}

//using the data structure
console.log(playerOne.name)
console.log(playerTwo.name)

console.log(playerOne.marker)
console.log(playerTwo.marker)

function gameOver(winningPlayer) {
    console.log("Congo")
    console.log(`${winningPlayer.name} (${winningPlayer.marker}) is the winner`)
}

const car = {
    make: "Volkswagen",
    model: "Golf",
    year: 2026,
    color: "blue",
    priceUSD: 40000,
};

// a method is just a function assigned to a property

