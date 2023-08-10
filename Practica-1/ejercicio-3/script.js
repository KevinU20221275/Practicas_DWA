// Obtener todos los elementos de cuadros de texto y contadores
const textAreas = document.querySelectorAll('.text-area');
const charCounters = document.querySelectorAll('.contador');

// Iterar a través de cada cuadro de texto
textAreas.forEach((textArea, index) => {
    // Agregar un evento 'input' a cada cuadro de texto
    textArea.addEventListener('input', () => {
        const charCount = textArea.value.length;
        // Actualizar el contador de caracteres correspondiente
        charCounters[index].textContent = `${charCount} caracteres`;
    });
});
