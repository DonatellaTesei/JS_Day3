//ex 1
let array = [1, 7, -3, 9]
let max = array[0]; //max=0

for (let val of array) { //compares two values
    if (max < val) {
        max = val;
    }
}
console.log(max);
// 1 < 7 => max=7
// -3 < 7 => max=7
// -3 < 9 => max = 9
// 7 < 9 => max = 9



//ex 2
//values from example, not needed
/* var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
/* var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description') */
/* var temperature = document.querySelector('#temp') */
/* var wind = document.querySelector('#wind') */


let temp = Math.floor(Math.random() * 45) - 5;
let forecast = document.getElementById("forecast"); //variable forecast to add img files to the HTML


if (temp >= -5 && temp <= 5) {
    document.getElementById("temperature").innerHTML = `The weather is very cold. Temperature: <span> ${temp} </span>`;
    // this links the picture to the id="forecast" in the HTML 
    forecast.src = "https://cdn.pixabay.com/photo/2022/06/01/05/54/weather-7234858_1280.png";
    //code to create the file in js
    /* const img = document.createElement("img");
    img.src = "https://cdn.pixabay.com/photo/2023/01/26/14/38/flower-7746150_1280.jpg";
    document.body.appendChild(img);
    console.log(img); */

} else if (temp >= 6 && temp <= 15) {

    document.getElementById("temperature").innerHTML = `The weather is cold. Temperature: <span> ${temp} </span>`;
    forecast.src = "https://cdn.pixabay.com/photo/2022/06/01/05/54/weather-7234859_1280.png";
} else if (temp >= 16 && temp <= 20) {

    document.getElementById("temperature").innerHTML = `The weather is moderate. Temperature: <span> ${temp} </span>`;
    forecast.src = "https://cdn.pixabay.com/photo/2012/04/18/13/21/clouds-37009_1280.png";
} else if (temp >= 21 && temp <= 25) {
    document.getElementById("temperature").innerHTML = `The weather is optimal. Temperature: <span> ${temp} </span>`;
    forecast.src = "https://cdn.pixabay.com/photo/2013/07/13/12/12/sun-159392_1280.png";
} else if (temp >= 26 && temp <= 32) {
    document.getElementById("temperature").innerHTML = `The weather is warm. Temperature: <span> ${temp} </span>`;
    forecast.src = "https://i.pinimg.com/originals/70/e0/32/70e032734757e61f13a97bd50b0283d1.jpg";
} else if (temp >= 33) {
    document.getElementById("temperature").innerHTML = `The weather is hot. Temperature: <span> ${temp} </span>`;
    forecast.src = "https://i.pinimg.com/564x/6f/fa/ac/6ffaacf108860c31faafeb9505689b82.jpg";
}