let firstCard=3
let secondCard=6
let sum=firstCard+secondCard+12

let hasBlackJack=false
let isAlive=true
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("cards-el")

function startGame(){

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




