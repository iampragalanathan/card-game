
let cards=[]
let sum=0


let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("cards-el")

function startGame(){
    
    isAlive=true
    let firstCard= getRandomCard()
    let secondCard= getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(){

cardEl.textContent="Cards: "
for(i=0;i<cards.length;i++){
    cardEl.textContent+=cards[i] +" "
}
if(sum === 21){

    message="you won balackjack"
    console.log(message)
    hasBlackJack=true


}
else if(sum <= 20){

    message="Do you want draw a new card?"
    console.log(message)

}
else{

    message="you're out of the game"
    console.log(message)

    isAlive=false
    // console.log("this is else stmt" ,isAlive)
}
    messageEl.textContent=message
    sumEl.textContent="Sum : " +sum
    

}


function newCard(){

    if (isAlive===true && hasBlackJack===false){
     let card=getRandomCard()
         sum+=card
    // sum=sum+card
    cards.push(card)
    // console.log(cards)
    renderGame() 
}}

function getRandomCard(){

   let randomNumber=Math.floor(Math.random()*13)+1
//    return randomNumber
    if(randomNumber===1){
        return 11
    }
    // else if(randomNumber===11){
    //     return 10
    // }
    // else if(randomNumber===12){
    //     return 10
    // }
    // else if (randomNumber===13){
    //     return 10
    // }
    else if(randomNumber>10){
        return 10
    }

    else{
        return randomNumber
    }
   
}

// let actionMovie=true
// let tomCruiseMovie=true

// if(actionMovie===true && tomCruiseMovie===true){
//     console.log("mission impossible loading")
// }
// else{
//     console.log("other action films are displayed")
// }

// let actionMovie=true
// let tomCruiseMovie=true

// if(actionMovie===true ||
//      tomCruiseMovie===true){
//     console.log("mission impossible loading")
// }
// else{
//     console.log("other action films are displayed")
// }

// console.log(getRandomCard())

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

// let sentences=["Good Morning","Get there soon","JS is cool","React is fun","had dinner?"]

// for(i=0;i<sentences.length;i++){

//     // console.log(sentences[i])
//     // document.getElementById("dummy").textContent=document.getElementById("dummy").textContent+sentences[i]
//     const dummyPtag=document.getElementById("dummy")
//     dummyPtag.textContent+=sentences[i]+ " "
// }


// function helper(){
//     let age=40
//     if (age<30){
//         return"you are eligible to write exam"
//     }
//     else{
//         return"you are not eligible to write exam"
//     }
// }
// let messageFromFn=helper()
// console.log(messageFromFn)

// let a=3
// let b=6
// function mult(){
//     return a*b
// }

// let finalResult=mult()
// console.log(finalResult)

// let randomNumber=Math.floor(Math.random()*6)
// console.log(randomNumber)

// function rollDice(){
//     let randomDiceNumber=Math.floor(Math.random()*6)+1
    
//     return randomDiceNumber
    // if(randomDiceNumber===1){
    //     return"hey 1 is the randomnumber"
    // }
    // else if(randomDiceNumber===2){
    //      return "hey 2"
    // }
    // else{
    //     return "three"
    // }
    
// }
// console.log(rollDice())