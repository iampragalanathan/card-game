let firstCard=3
let secondCard=6
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
    cardEl.textContent="Cards : "+firstCard + " " + secondCard
}


function newCard(){
    
    let card=6
    sum+=card
    // sum=sum+card
    renderGame()
}

let data=["orange","apple",true,false,123]


