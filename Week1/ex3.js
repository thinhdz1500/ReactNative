// 1.  Calculate the average score for each team, using the test data below
var dolpinAverage = (96 + 108 + 89) / 3
var koalasAverage = (88 + 91 + 110) / 3
    // 2.  Compare the team's average scores to determine the winner of the competition, 
    // and print it to the console. Don't forget that there can be a draw, so test for that 
    // as well (draw means they have the same average score)
console.log("dolpins average is: " + dolpinAverage);
console.log("koalas average is: " + koalasAverage);
var dolpinHigherAverage = dolpinAverage > koalasAverage
if (dolpinAverage)
    console.log("dolpins is winner ");
else
    console.log("koalas is winnerr ");

// 3.  Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks 
const dolpins = [97, 112, 101]
const koalas = [88, 91, 110]
    // 4.  Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
    // both teams have the same score and both have a score greater or equal 100 
    // points. Otherwise, no team wins the trophy