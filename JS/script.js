// Calculadora

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const faixaEtariaButtons = document.querySelectorAll('.faixaEtaria-btn');

    let faixaEtaria;

    faixaEtariaButtons.forEach(button => {
        if (button.classList.contains('selected')) {
            faixaEtaria = button.dataset.value;
        }
    });

    const imc = (peso / (altura * altura)).toFixed(2);

    const value = document.getElementById('valor');
    let descricao = "";

    value.classList.add("atencao");

    document.getElementById('infos').classList.remove('hidden');

    if (faixaEtaria === 'adulto') {
        if (imc < 18.5) {
            descricao = 'Baixo peso';
        } else if (imc >= 18.5 && imc < 25) {
            descricao = "Peso normal";
            value.classList.remove("atencao");
        } else if (imc >= 25 && imc < 30) {
            descricao = "Excesso de peso";
        } else if (imc >= 30 && imc < 35) {
            descricao = "Obesidade Classe 1";
        } else if (imc >= 35 && imc < 40) {
            descricao = "Obesidade Classe 2";
        }  else {
            descricao = "Obesidade Classe 3";
        }
    } else if (faixaEtaria === 'idoso') {
        if (imc <= 22.5) {
            descricao = 'Baixo peso';
        } else if (imc > 22.5 && imc < 27) {
            descricao = "Adequado ou eutrófico";
            value.classList.remove("atencao");
        } else {
            descricao = "Sobrepeso";
        }
    }

    atualizarImagemIMC(imc, faixaEtaria);

    value.textContent = imc.replace('.',',');
    document.getElementById('descricao').textContent = descricao;
});

const faixaEtariaButtons = document.querySelectorAll('.faixaEtaria-btn');

faixaEtariaButtons.forEach(button => {
    button.addEventListener('click', function() {
        faixaEtariaButtons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
    });
});

function atualizarImagemIMC(imc, faixaEtaria) {
    var imgElement = null;

    if (faixaEtaria === 'adulto') {
        if (imc < 18.5) {
            imgElement = '../assets/baixo-peso.png';
        } else if (imc >= 18.5 && imc < 25) {
            imgElement = '../assets/normal.png';
        } else if (imc >= 25 && imc < 30) {
            imgElement = '../assets/sobrepeso.png';
        } else if (imc >= 30 && imc < 35) {
            imgElement = '../assets/obesidade1.png';
        } else if (imc >= 35 && imc < 40) {
            imgElement = '../assets/obesidade2.png';
        }  else {
            imgElement = '../assets/obesidade3.png';
        }
    } else if (faixaEtaria === 'idoso') {
        if (imc <= 22.5) {
            imgElement = '../assets/baixo-peso.png';
        } else if (imc > 22.5 && imc < 27) {
            imgElement = '../assets/normal.png';
        } else {
            imgElement = '../assets/sobrepeso.png';
        }
    }

    document.getElementById('img').src = imgElement;
}


// Carrossel

let count = 1;
document.getElementById('radio1').checked = true

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    
document.getElementById('radio'+count).checked = true

}
