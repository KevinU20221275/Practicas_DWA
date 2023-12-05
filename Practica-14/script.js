// fucion para sumar
function sumar(){
    var num1 = parseFloat(document.getElementById("numero1").value)

    var num2 = parseFloat(document.getElementById("numero2").value)

    var resultado = num1 + num2

    mostrarResultado(resultado)
}

// funcion para restar
function restar(){
    var num1 = parseFloat(document.getElementById("numero1").value)

    var num2 = parseFloat(document.getElementById("numero2").value)

    var resultado = num1 - num2

    mostrarResultado(resultado)
}

// funcion para multiplicar
function multiplicar(){
    var num1 = parseFloat(document.getElementById("numero1").value)

    var num2 = parseFloat(document.getElementById("numero2").value)

    var resultado = num1 * num2

    mostrarResultado(resultado)
}


// funcion para dividir
function dividir(){
    var num1 = parseFloat(document.getElementById("numero1").value)

    var num2 = parseFloat(document.getElementById("numero2").value)

    if (num2 === 0 ) {
        var resultado = "No se puede dividir entre cero"
        mostrarResultado(resultado)
    } else {
        var resultado = num1 / num2
        mostrarResultado(resultado)
    }   
}


// funcion para mostrar resultado
function mostrarResultado(resultado){
    if (resultado.typeof === "number"){
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado.toFixed(2)
    } else {
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado
    }

}