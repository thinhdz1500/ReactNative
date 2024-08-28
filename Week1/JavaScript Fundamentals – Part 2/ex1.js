// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!


//1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
let calcAverage = function(animal){
    sum=0;
    for(let i=0;i<animal.length;i++){
        sum+= animal[i];
    }
    return sum/animal.length;
}
//2. Use the function to calculate the average for both teams
let dolpins=[44,23,71];
let kolas= [65,54,49];
let averageDolpins = calcAverage(dolpins);
let averageKolas = calcAverage(kolas)
//3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
let checkWinner = function(avgDolpins, avgKoalas){
    if(avgDolpins>=2*avgKoalas){
        console.log(`Dolphins win (${avgDolpins} vs. ${avgKoalas})`);
    }else if(avgKoalas>=2*avgDolpins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolpins})`);
    }else{
        console.log(`No team wins`);
    }
}
checkWinner(averageDolpins,averageKolas)
//4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
//data2
let dolpins2 = [85,54,41]
let kolas2 = [23,34,27]
let avgDolpins2 = calcAverage(dolpins2);
let avgKolas2 = calcAverage(kolas2);
 checkWinner(avgDolpins2,avgKolas2)