// Definicion de la funcion esVocal que verifica si un caracter es una vocal (mayuscula o minuscula)
function esVocal(caracter){
    // Utiliza una exprecion regular para verificar si el caracter es una vocal
    return /^[aeiouAEIOU]$/.test(caracter);
}

// funcion que se llama al hacer clic en el boton para verificar si un caracter es una vocal 
// checkVowel es una funcion que coordina la obtencion del caracter ingresado,
// la verificacion de si es una vocal, y la presentacon del resultado en la interfaz de usuario
function checkVowel(){
    //obtener el elemento input donde se ingreso el caracter
    const characterInput = document.getElementById('character');

    // obtener el valor del input (el caracter ingresado)
    const character = characterInput.value;

    // obtener el elemento donde se mostrara el resultado
    const resultElement = document.getElementById('result');

    if (esVocal(character)){
        resultElement.textContent = `El caracter "${character}" es una vocal`;
    } else {
        resultElement.textContent = `El caracter "${character}" no es una vocal`;
    }
}