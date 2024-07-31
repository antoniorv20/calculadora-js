
function calcular() {
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;

    let valorselector = document.getElementById("operaciones").value
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    console.log(valorselector);

    if (valorselector == "sumar") {
        res = numero1 + numero2

    } else if (valorselector == "restar") {
        res = numero1 - numero2

    } else if (valorselector == "multiplicar") {
        res = numero1 * numero2

    } else if (valorselector == "dividir") {
        if (numero1 > 0 && numero2 > 0) {
            res = numero1 / numero2

        } else {
            res = "No se puede dividir entre 0"
        }
    }

    document.getElementById("resultado").textContent = res;

}


function limpiar() {
    let numero1 = document.getElementById("num1").value = "";
    let numero2 = document.getElementById("num2").value = "";

    document.getElementById("resultado").textContent = " ";

}

