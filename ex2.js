// 1.  Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2.  Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Mark's information
const markMass = 78;
const markHeight = 1.69;

// John's information
const johnMass = 92;
const johnHeight = 1.95;


const markBMI = markMass / (markHeight * markHeight);


const johnBMI = johnMass / (johnHeight * johnHeight);


const markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}