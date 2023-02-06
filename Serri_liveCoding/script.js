// // document.write("Hello");

// // #red {}

// document.getElementById("red").innerHTML = "Hello from JavaScript";

// document.querySelector("p#red").innerHTML += "<br> Test";


// //////////////////////////////////////////////////////////////////////////////////// 
// // SELECTOR.property = value
// document.getElementsByClassName("black")[2].innerHTML = "Hello from getElementsByClassName";
// document.getElementsByClassName("black")[0].innerHTML = "Hello from getElementsByClassName";

// document.querySelectorAll("ul li")[0].innerHTML = "Test from querySelectorAll";
// document.querySelectorAll("ul li")[0].style.color = "yellow";
// document.querySelectorAll("ul li")[1].style.background = "green";
// // let students = ["John"];
// // console.log(students[0]);




//  standard loop  // numbers + arrays  
// i = i + 1
for (let i = 1; i <= 50; i++) {
    document.getElementById("result").innerHTML += i + "<br>";
}

// starting point   i = 1
// 1 <= 1000  true
// print 1 + <br>

// i = 2
// 2 <= 1000  true
// print 2 + <br>

// i = 3
// 3 <= 1000   true 
// print 3 + <br>
// 


// i = 1000
// 1000 <= 1000   true
// 1000 +<br>

// i = 1001
// 1001 <= 1000
// 10 // 9
let students = ["John", "Mary", "Serri", "philip", "Johannes", "dani", "manuel", "Riola", "Irati", "Test"];

// document.getElementsByClassName("students")[0].innerHTML += students[0] + "<br>";
// document.getElementsByClassName("students")[0].innerHTML += students[1] + "<br>";
// document.getElementsByClassName("students")[0].innerHTML += students[2] + "<br>";
// document.getElementsByClassName("students")[0].innerHTML += students[3] + "<br>";
// document.getElementsByClassName("students")[0].innerHTML += students[4] + "<br>";
// document.getElementsByClassName("students")[0].innerHTML += students[5] + "<br>";
// document.getElementsByClassName("students")[0].innerHTML += students[6] + "<br>";
// document.getElementsByClassName("students")[0].innerHTML += students[7] + "<br>";
// document.getElementsByClassName("students")[0].innerHTML += students[8] + "<br>";
// i+=2  |  i = i + 2
// for (let i = 0; i <= 8; i++) {
//     document.getElementsByClassName("students")[0].innerHTML += students[i] + "<br>";
// }

// for of loop  // arrays // value

for (let val of students) {
    document.getElementsByClassName("students")[0].innerHTML += val + "<br>";
}

// for in loop // arrays // index, value
document.getElementsByClassName("students")[0].innerHTML += "<hr>";

for (let index in students) {
    document.getElementsByClassName("students")[0].innerHTML += students[index] + " " + index + "<br>";
    // students[3]
}

// forEach loop // arrays // index, value
students.forEach(function(val, i) {
        console.log(val, i);
    })
    // for (let i = 0; i <= 8; i++) {
    //     document.getElementsByClassName("students")[0].innerHTML += students[i] + "<br>";
    // }

// while  // numbers + arrays  // value + index

let i = 0;

while (i < students.length) {
    console.log(students[i]);

    i += 1;


    // i++;
    // i = i+1;
}

// i = 0
// 0 < 10
// console.log(0, students[0])
// i = 1
// 1 <10
//console.log(1, students[1])
// i = 2
// 2 < 10
//console.log(2, students[2])

let array = [1, 100, 88, -20, 60, 20, 200];
let max = array[0]; //  max = 0

for (let val of array) {
    if (max < val) {
        max = val;
    }
}
console.log(max);

//  1 < 6  =>  max = 6
// 6 < 88  =>  max = 88
// 88 < -20 
// 88 < 60 
// 88 < 100  =>  max = 100