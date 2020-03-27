//Function #1 // Array slice
const foods = ["pizza", "burger, fingerChips", "donuts", "springRoll"];
let modifiedFood= foods.slice(1,3)
console.log(modifiedFood);

//Function #2 // Array Splice

let food= foods.splice(2,0,"noodles","icecream");
console.log(foods);

//Function #3 // Filters

const numberArray = [12,324,213,4,2,3,45,4234];
    let EvenNumbers = numberArray.filter(function isEven(num) {
        return (num % 2 == 0);
    });
        console.log(EvenNumbers);      
        
//Function #3.1: Prime Number
       let PrimeNumbers = numberArray.filter(function isPrime(num) {
         for (i = 2; i <= num; i++) {
                if (num % i === 0)
                    return false;
                return true;
            }
        });
        
        console.log(PrimeNumbers);
        
//Function #4: Reject
// reversing the logic of the Prime Number 
let NonPrimeNumbers = numberArray.filter(function nonPrime(num) {
    for (i = 4; i < num/2; i++) {
        if (num % i === 0);
    return true;
    }
});
console.log(NonPrimeNumbers);

//Function #5: Lambda 

console.log(numberArray.filter(Even = (num) => { return num % 2 === 0; }
));

//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];

//findSquareOfNumbers() to find square of each elemnt of array.
console.log(myArray.map(findSquareOfNumbers = (num) => { return num * num }));

//Function #7: Reduce

const MyArray = [2, 3, 5, 10, 7];

//reduce function to multiply each item of arraY
console.log("Multiply:" + MyArray.reduce(multiply = (initial, item) => { return initial * item }, 1));
