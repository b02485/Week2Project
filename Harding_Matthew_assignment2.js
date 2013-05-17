// Matthew Harding
// SDI 1304
// Project 2

// Function of this program is to see if someone qualifies for a car loan
// My variables

canBorrowCash = true, money = 50000, nissanAltima = "Good Car", toyotaCamry = "Nice Car",
kiaOptima = "Excelent Car", person = "Matt", personP = "Matt\'s",
carsToCheck = [nissanAltima, toyotaCamry, kiaOptima];

// Story of me buying the car, or the "Procedure".

console.log(person + " wants to buy Kia Optima fully loaded if he can afford it.");
howManyCars();
checkKia();
console.log(person + " is going to go see the first car he has in mind which is " + carsToCheck[2] + ".");


// Now for the wonderful boolean function to see if i qualify for the loan

function checkForSale() {if (canBorrowCash === true){console.log (person + " is approved for the loan!");
    return status === true;
}else {
    console.log(person + " not approved for the loan.");
}
    return status === false;
}

checkForSale();

// My number property to see if I can get the car of my dreams :P

function checkCash() { if (cash < 50000) {console.log(person + " doesn't have enough money to buy this car.");

} else {if (cash > 50000) {console.log(person + " does have enough money to buy this car!")
}}
}
