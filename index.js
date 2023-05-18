//made constant variable kelvin = to 293
const kelvin = 293;
console.log(`The temperature is ${kelvin} degrees Kelvin`)

//made a const variable named celsius. subtracted 20 from 293(kelvin) to get celsius
const celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees celsius`)

const fahrenheit = celsius * (9/5) + 32;
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

//used math.floor to round down the fahrenheit temp

// fahrenheit = Math.floor(fahrenheit)



const newton = Math.floor(celsius * (33/100))


console.log(`The temperature is ${newton} degrees Newton`)

//todo 1
//get the user input

//getElementById and put button name in ()
//then create a function based on the id of the input field that the user is typing into
//!kelvin
document.getElementById("kelvinbutton").onclick = function(){
    var myTemp = document.getElementById("formcontroller").value
    console.log("kelvin", myTemp)
}

//!celsius
document.getElementById("celsiusbutton").onclick = function(){
    var myTemp = document.getElementById("formcontroller").value
    console.log("celsius", myTemp)
}

//!fahrenheit
document.getElementById("fahrenheitbutton").onclick = function(){
    var myTemp = document.getElementById("formcontroller").value
    console.log("fahrenheit", myTemp)
}

//!newton
document.getElementById("newtonbutton").onclick = function(){
    var myTemp = document.getElementById("formcontroller").value
    console.log("newton", myTemp)
}

//todo 2
//calculate temps based on buttons

//todo 3
//display values in browser