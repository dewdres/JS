document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const valorA = parseFloat(document.getElementById('campoA').value);
    const valorB = parseFloat(document.getElementById('campoB').value);
    const errorMessage = document.getElementById('error-message');

    if (valorB > valorA) {
        errorMessage.style.display = 'none';
        alert('Formulário enviado com sucesso!');
    } else {
        errorMessage.style.display = 'block';
    }
});