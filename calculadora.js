const Calcular = document.getElementById('Calcular');

function IMC(){
    const Peso = parseFloat(document.getElementById('Peso').value);
    const Altura = parseFloat(document.getElementById('Altura').value);
    const Mensagem = document.getElementById('Mensagem');

    if(isNaN(Peso) || isNaN(Altura) || Peso <= 0 || Altura <= 0 ){
        Mensagem.textContent = 'Preencha todos os campos corretamente';
        return;
    }

    const ValorIMC = Peso / (Altura * Altura);
    let classificacao = '';

    if (ValorIMC < 18.5) {
        classificacao = 'abaixo do peso';
    } else if (ValorIMC >= 18.5 && ValorIMC <= 24.9) {
        classificacao = 'com peso ideal';
    } else if (ValorIMC >= 25 && ValorIMC <= 29.9) {
        classificacao = 'acima do peso';
    } else {
        classificacao = 'com uma classificação não comum';
    }

    Mensagem.textContent = `Você está pesando ${Peso}kg, seu IMC é ${ValorIMC.toFixed(2)} e você está ${classificacao}`;
}

Calcular.addEventListener('click', IMC);
