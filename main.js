// -1-
/* Repeat it. Create a program with two variables: “item” and “times”. Create a program that repeats the “item” as many times as specified by “times”. The first variable (“item”) is the item that needs repeating while the second argument (“times”) is the number of times the item is to be repeated. Print the result in an array.
Example: (“example”, 3) ➞ [“example”, “example”, “example”]  */

function myRepeat(item,times){
    let arr = [];
    for(let i = 0; i<times; i++){
        arr.push(item)
    }
    return arr;
}
console.log(myRepeat("kinan",3)); 

// -2-
/*  Capitalize. Create a program that capitalises the first letter of each element in an array of names. Examples:
[“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]  */

 var myArr = ["kinan","nabil","nihad"];
function myCapitalize(arr){
    for(let i = 0; i<arr.length;i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
    }
    return arr;
}
var y = myCapitalize(myArr);
console.log(y); 

// -3-
/*  Cubed. Create a function that takes in three numbers and returns the sum of its cubes.
Examples:
sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes(2) ➞ 8  */

 function sumOfCubes(num1,num2,num3){
    let sum = 0;
    sum = num1**3+num2**3+num3**3;
    return sum;
}
console.log(sumOfCubes(1,5,9)); 

// -4-
/* String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
Examples:
dictionary(“bu”, “button”) ➞ true
dictionary(“tri”, “triplet”) ➞ true
dictionary(“beau”, “pastry”) ➞ false  */

 function dictionary(str,word){
    let lowStr = str.toLowerCase();
    let lengthStr = lowStr.length;
    let lowWord = word.toLowerCase();
    if(lowWord.substring(0,lengthStr)== lowStr){
        return true;
    }else{
        return false;
    }
};
console.log(dictionary("bu","button"));
console.log(dictionary("kin","kinan"));
console.log(dictionary("ox","button")); 

// -5-
/* Dog Years. Create a function which calculates how old a dog is in human years. The function should accept one argument that is the puppy’s age in doggie years. Calculate the dog’s age in human years based on the calculation of 1 doggie year = 7 human years  */

 function dogYears(age){
    return `your doggie is ${age*7} years old in human years!`;
}
console.log(dogYears(4)); 

//  -6-
/* A Lifetime Supply... Create a function to calculate how much you’ll actually be getting for a lifetime supply of your favourite snack. The function should accept three  arguments: age, amount and snack per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for amount per day and round the result.
i.e.
calcSupply(25, 2, ‘chocolate ’) ➞ “You will need 40,150  of chocolate (2 a day) to last you till the age of 80.”
calcSupply(40, 3,‘chips’) ➞ “You will need 43,800  of chips (3 a day) to last you till the age of 80 */ 

 function calcSupply(age,amount,str){
    let ageReminder = 80 - age;
    let result = ` you will need ${(amount*365)*ageReminder} of ${str} (${amount} a day) to last you till the age of 80`;
    return result;
}
console.log(calcSupply(28,2,"apple")); 
