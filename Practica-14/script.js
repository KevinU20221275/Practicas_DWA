function sumar(){
    var num1 = parseFloat(document.getElementById("numero1").value)

    var num2 = parseFloat(document.getElementById("numero2").value)

    var resultado = num1 + num2

    mostrarResultado(resultado)
}

function restar(){
    var num1 = parseFloat(document.getElementById("numero1").value)

    var num2 = parseFloat(document.getElementById("numero2").value)

    var resultado = num1 - num2

    mostrarResultado(resultado)
}

function multiplicar(){
    var num1 = parseFloat(document.getElementById("numero1").value)

    var num2 = parseFloat(document.getElementById("numero2").value)

    var resultado = num1 * num2

    mostrarResultado(resultado)
}

function dividir(){
    var num1 = parseFloat(document.getElementById("numero1").value)

    var num2 = parseFloat(document.getElementById("numero2").value)

    if (num1 === 0 ) {
        var resultado = "No se puede dividir entre cero"
        mostrarResultado(resultado)
    } else {
        var resultado = num1 / num2
        mostrarResultado(resultado)
    }

    
}

function mostrarResultado(resultado){
    document.getElementById("resultado").innerHTML = "Resultado " + resultado.toFixed(2)

}