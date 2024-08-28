// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25”

//1:
let bill = [275, 40,430];
let caculateTip = (bill)=>{
    return bill>=50 && bill<=300 ?bill*0.15:bill*0.2;
}
console.log(`The bill was ${bill[0]}, the tip was ${caculateTip(bill[0])}, and  the total value ${bill+caculateTip(bill[0])}`);
    