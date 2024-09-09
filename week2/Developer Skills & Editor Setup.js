// Given an array of forecasted maximum temperatures, the thermometer displays a 
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// 1.  Create a function 'printForecast' which takes in an array 'arr' and logs a 
// string like the above to the console. Try it with both test datasets.

let data1 = [17, 21, 23]
let data2 = [12, 5, -5, 0, 4]

function printForecast(value, index) {
    return console.log(`... ${value}ºC in ${index} days`)
}

let arr = data1.map(printForecast)
console.log(arr);