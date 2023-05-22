//made constant variable kelvin = to 293
const kelvin = 293;
// console.log(`The temperature is ${kelvin} degrees Kelvin`)

//made a const variable named celsius. subtracted 20 from 293(kelvin) to get celsius
const celsius = kelvin - 273;
// console.log(`The temperature is ${celsius} degrees celsius`)

const fahrenheit = celsius * (9 / 5) + 32;
// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

//used math.floor to round down the fahrenheit temp

// fahrenheit = Math.floor(fahrenheit)



const newton = Math.floor(celsius * (33 / 100))


// console.log(`The temperature is ${newton} degrees Newton`)

//todo 1
//get the user input

//getElementById and put button name in ()
//then create a function based on the id of the input field that the user is typing into
//!kelvin
document.getElementById("kelvinbutton").onclick = function () {
    let myTemp = document.getElementById("formcontroller").value
    // console.log("kelvin", myTemp)
    calculateTemps("kelvin", myTemp)
}

//!celsius
document.getElementById("celsiusbutton").onclick = function () {
    let myTemp = document.getElementById("formcontroller").value
    // console.log("celsius", myTemp)
    calculateTemps("celsius", myTemp)
}

//!fahrenheit
document.getElementById("fahrenheitbutton").onclick = function () {
    let myTemp = document.getElementById("formcontroller").value
    // console.log("fahrenheit", myTemp)
    calculateTemps("fahrenheit", myTemp)
}

//!newton
document.getElementById("newtonbutton").onclick = function () {
    let myTemp = document.getElementById("formcontroller").value
    // console.log("newton", myTemp)
    calculateTemps("newton", myTemp)
}

//todo 2
//calculate temps based on buttons
const calculateTemps = function (metric, kelvin) {
    //use metric to calculate the different temperature
    //if metric is equal to celsius then we use the formula to convert to celsius
    const celsius=kelvin-273
    if (metric === "celsius") {
        console.log(`the temp in celsius is: `)
        const celsiusParagraph = document.getElementById("celsius").innerHTML=celsius
        return celsius

    }
    if (metric === "fahrenheit") {
        console.log(`the temp in fahrenheit is `)
        const fahrenheitParagraph = document.getElementById("fahrenheit").innerHTML=fahrenheit
        return celsius * (9 / 5) + 32
    }
    if (metric === "newton") {
        console.log(`the temp in  netwon is: `)
        const newtonParagraph = document.getElementById("newton").innerHTML=newton
        return Math.floor(kelvin * (33 / 100))
    }
    return kelvin
}

//todo 3
//display values in browser
//when we click on the kelvin button, we need to call the function
//change the inner html of kelvin, celsius, fahrenheit and newton <p>s based of the calculations
