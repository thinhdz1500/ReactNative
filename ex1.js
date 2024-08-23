// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).

// Mark's information
const markMass = 78;
const markHeight = 1.69;

// John's information
const johnMass = 92;
const johnHeight = 1.95;


const markBMI = markMass / (markHeight * markHeight);


const johnBMI = johnMass / (johnHeight * johnHeight);


const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);