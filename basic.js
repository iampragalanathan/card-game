let firstCard=3
let secondCard=6

let sum=firstCard+secondCard+13
let hasBlackJack=false
let isAlive=true
let message=""
let messageEl=document.getElementById("message-el")


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


// ===================================

// console.log(4===3) 
// console.log(3===3)
// console.log(5>6)
// console.log(5>=5)
// console.log(7<6)
// console.log(7<=5)



// let data=["orange","apple",true,false,123,["hello",["innerarray","test"],123,true,false]]
// console.log(data[5][1][0])
// console.log(data[0])
// console.log(data[1])
// console.log(data[2])
// console.log(data[3])
// console.log(data[4])

