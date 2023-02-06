// printed in the console 

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}
//(i % 3 === 0 || i % 5 === 0)  ||= means or

// printed in the browser

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        document.write(",<br> FizzBuzz");
    } else if (i % 3 == 0) {
        document.write(",<br> Fizz");
    } else if (i % 5 == 0) {
        document.write(",<br> Buzz");
    } else {
        document.write `${i} 
            <br>`;
    }
}

//getElementById printing in the HTML using a function

var getFizzBuzz = function() {
    fizzbuzz = "";

    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            fizzbuzz += "<br> FizzBuzz!";
        } else if (i % 3 == 0) {
            fizzbuzz += "<br> Fizz!";
        } else if (i % 5 == 0) {
            fizzbuzz += "<br> Buzz!";
        } else {
            fizzbuzz += "<br>\n" + i;
        }
    }
    return fizzbuzz;
}

document.getElementById("buzz").innerHTML = getFizzBuzz();