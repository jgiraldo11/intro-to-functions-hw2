//Gas Cost Calculator
//two parameters: starting string odometer reading and ending odmeter reading 
// Return the cost of gas for this trip at $0.15 per mile
//Bonus: return the cost of gas for the trip using $3.64 per gallon at 28 mpg

console.log("-------------Question 1---------------")

function odometerReading(start,end) {
    const result = (end - start) * 0.15;
    return result;
 }
     const costperMile = odometerReading(65,120);
     console.log(costperMile);
 
 
 function trip1 (cost,miles) {
     const costmpg= cost * miles
     return costmpg
  };
      const totalCost = trip1(5.60,24);
      console.log(totalCost);

console.log("-------------Question 2---------------")

//Multiply three numbers
//Three parameters: num1, num2, num3
//Return the product of these 3 numbers
//Bonus: write functions to multiply 4 numbers, 5 numbers, 6 numbers… “till your fingers bleed”

function threeParam(num1,num2,num3){
    const threeMulti = num1 * num2 * num3;
    return threeMulti
};
    const totalMulti = threeParam(17,4,12)
    console.log(totalMulti);

    console.log("-------------Question 3---------------")

//Cone Calculator
//Two parameters: radius and height
//Return the volume of a cone with these conditions
//Formula: https://www.google.com/search?q=volume+of+a+cone

function twoParam(radius,height) {
    const coneVolume = (Math.PI * radius * radius * height)/ 3;
    return coneVolume
};
    const totalConeVol = twoParam(23,36);
    console.log(totalConeVol);

    console.log("-------------Question 4---------------")    

//Summation sentence
//Two parameters: num1 and num2
//Print to the console: “The sum of [num1] and [num2] is [result]”
//Bonus: write two versions of this function:
//Use console.log() inside of the function - this function returns nothing
//Challenge - do not use console.log() inside of the function

function sumSentence(num4,num5){
    const addSentence = num4 + num5
    const printSentence = "The sum of " + num4 + " and " + num5 + " is " + addSentence;
    return printSentence
}
    const allPrint = sumSentence(47,92)
    console.log(allPrint)

    function sumSentence2(num4,num5){
        const addSentence2 = num4 + num5
        const printSentence2 = "The sum of " + num4 + " and " + num5 + " is " + addSentence2;
        return printSentence2
        console.log(allPrint)
    }
        const allPrint2 = sumSentence2(50,51)

console.log("-------------Question 5---------------") 

//Remainder Calculator
//Two parameters: numerator and divisor
//Return the remainder from dividing numerator by divisor - NOT THE RESULT

function remainderCal(num,divi) {
    const totalDivi = num % divi;
    return totalDivi
}
    const diviAmount = remainderCal(45,5);
        console.log(diviAmount)

console.log("-------------Question 6---------------")

//Banana Picker
//One parameter: quantity
//Return a string of quantity number of “:banana:”s
//Bonus: write a function with a second parameter
//return a similar string but with the emoji argument
//(try this with a multi-character string too to see how it behaves)

    function bananaPicker (quantity = 10, emoji = "🐘") {
        const bananaAmount = emoji.repeat(quantity);
        return bananaAmount
    }
        const bananaTotal = bananaPicker (10,"🐘");
        console.log(bananaTotal)
    

console.log("-------------Question 7---------------")

//Name Concatenator
//Two parameters: first name and last name
//Return the full name of the person
//Bonus: add support for middle names
//Bonus: Return the name in the format “Last, First” (or “Last, First Middle”

function nameCon(first,middle,last) {
    const allName = last + middle + first;
    return allName
}
    const theirName = nameCon("Jeniffer"," ","Giraldo");
    console.log(theirName);

console.log("-------------Question 8---------------")

//String Length
//One parameter: string to be measured
//Bonus: pass the result of the Name Concatenator function as the argument
//Return the length of the string

function stringLength (string) {
    return string.length;
}
const entireName = stringLength(theirName);
console.log(entireName)    