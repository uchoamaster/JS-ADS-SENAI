function myDisplay(some) {
    document.getElementById("nome").innerHTML = some;
}

let myPromise = new Promise(function (resolve, reject) {
    let x = "";
    if (x != "") {
        resolve("Teste Positivo");
        console.log("Teste Positivo")
    } else {
        reject("Error");
        console.log("Teste Negativo");
    }
});

myPromise.then(
    function (value) { myDisplay(value); },
    function (error) { myDisplay(error); }
);
