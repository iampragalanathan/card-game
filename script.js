let firstCard=3
let secondCard=6

let sum=firstCard+secondCard+13
let hasBlackJack=false
let isAlive=true

if(sum === 21){

    console.log("you won balackjack")
    hasBlackJack=true


}
else if(sum <= 20){

    console.log("you can get a new card")

}
else{

    console.log("you are out of the game")
    isAlive=false
    console.log("this is else stmt" ,isAlive)
}

// function name(){

//     if(sum === 21){

//     console.log("you won balackjack")
//     hasBlackJack=true
// }
//     else{
//         console.log("sorry you dont't have a coupon")
//     }
// }

// name()
// name()


// ================================================


// let hasDiscountCode=true;

// function name(){

//     if (hasDiscountCode){

//         console.log("you can get 30% offer")
       
//     }
//     else{
//         console.log("sorry you dont't have a coupon")
//     }
// }

// name()
// name()



// if else

// let age=18;

// if (age>=18){

//     console.log("you are eligible to enter the club");
// }
// else{

//     console.log("you are not eligible to enter the club");
// }

// =======================================
// if(age >=18){

//     console.log("you are eligible to enter the club");
// }
// else if( age===18){

//      console.log("your are over 18 so you can join this club");
// }

// else{

//     console.log("you are not eligible to enter the club");
// }

// =========================================

// let personAge=100

// if(personAge<100){

//     console.log("not eligible");
// }

// else if( personAge > 100){

//      console.log("not eligible,you already gotten one");
// }
// else{

//     console.log("")
// }


