let array = ['*', '**', '***', '****', '*****', '******'];

for (let i = 0; i < array.length; i++) {
    document.getElementById("stars").innerHTML += array[i] + "<br>";
}