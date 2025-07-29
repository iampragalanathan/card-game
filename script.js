let firstCard=3
let secondCard=6
let cards=[firstCard, secondCard]
let sum=firstCard+secondCard

let hasBlackJack=false
let isAlive=true
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("cards-el")

function startGame(){

    renderGame()
}

function renderGame(){

    if(sum === 21){

    message="you won balackjack"
    console.log(message)
    // hasBlackJack=true


}
else if(sum <= 20){

    message="Do you want draw a new card?"
    console.log(message)

}
else{

    message="you're out of the game"
    console.log(message)

    // isAlive=false
    // console.log("this is else stmt" ,isAlive)
}
    messageEl.textContent=message
    sumEl.textContent="Sum : " +sum
    cardEl.textContent="Cards : "+cards[0] +" " +cards[1] 
}


function newCard(){
    
    let card=6
    sum+=card
    // sum=sum+card
    cards.push(card)
    // console.log(cards)
    renderGame()
}



// let cards=[4,10]
// cards.push("hello",101)
// console.log(cards)

// cards.pop()
// console.log(cards)

// cards.pop()
// console.log(cards)

// // let newItem=("hey I am array")
// let newItem=["hey I am array"]
// cards.push(newItem)
// console.log(cards)


// for loop 

// for (let count=1; count<10;count=count+2){
//     console.log(count)

// }

// for (let count=1;count<=17;count=count+3){
//     console.log(count)
// }

// for (let count=15;count>0;count=count-1){
//     console.log(count)
// }
// let emojis=["smile","cool","bless","angry","laugh","new1","new2","new3","new4"]
// for (let i=0;i<emojis.length;i++){

//     console.log(emojis[i])

// }

let sentences=["Good Morning","Get there soon","JS is cool","React is fun","had dinner?"]

for(i=0;i<sentences.length;i++){

    console.log(sentences[i])
}