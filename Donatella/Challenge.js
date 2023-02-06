var students = ["John", "Jane", "Donatella", "Lukas", "Ryan", "Niko"],
    MathGrades = [70, 85, 100, 80, 65, 55],
    myMap = students.reduce((p, c, i) => p.has(c) ? p.set(c, p.get(c).concat(MathGrades[i])) :
        p.set(c, [MathGrades[i]]),
        new Map());
/* console.log(myMap.get("Donatella")); */

/* function grades() {
    var input = prompt("type your name");
    var results = myMap.get(input);
    return `${input} has reached ${results} in Math this season.`
}
console.log(grades()); */


var input = prompt("type your name");
var results = myMap.get(input);
for (var i = 0; i < students.length; i++) {
    if (results <= 60) {
        document.getElementById("grades").innerHTML = `${input} has reached ${results} in Math this season.`;
        document.getElementById("grades").style.color = "red";
    } else if (results >= 60 && results <= 70) {
        document.getElementById("grades").innerHTML = `${input} has reached ${results} in Math this season`;
        document.getElementById("grades").style.color = "yellow";
    } else if (results >= 71 && results <= 99) {
        document.getElementById("grades").innerHTML = `${input} has reached ${results} in Math this season`;
        document.getElementById("grades").style.color = "green";
    } else if (results = 100) {
        document.getElementById("grades").innerHTML = `${input} has reached ${results} in Math this season`;
        document.getElementById("grades").style.color = "blue";
    }
}




///* /* object = Object.create(null); */
/* 
MathGrades.forEach(function(b, i) {
    object[b] = object[b] || [];
    object[b].push(students[i]);
}); */
/* 
console.log(object); */