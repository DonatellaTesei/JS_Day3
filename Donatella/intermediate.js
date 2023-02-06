var students = [
    ['Martin', 76],
    ['Thomas', 85],
    ['Klaus', 65],
    ['Maria', 93],
    ['David', 81]
]
var avgMarks = 0;

for (var i = 0; i < students.length; i++) {

    avgMarks += students[i][1]; //[] tells to access the value in index 1 of each array
    var avg = (avgMarks / students.length);
}
console.log(`Average grade: ${avg}`);
/* let averageG = document.getElementById("avgG");
console.log(averageG); */ //to debug it before improving 

document.getElementById("avgG").innerHTML = "Class average points: " + (avgMarks / students.length);


if (avg < 60) {
    console.log("Grade: F");
} else if (avg < 70) {
    console.log("Grade: D");
} else if (avg < 80) {
    console.log("Grade: C");
} else if (avg < 90) {
    document.getElementById("grade").innerHTML = "Class average grade: B";
    document.getElementById("grade").style.color = "red";

} else {
    console.log("Grade: A");
}