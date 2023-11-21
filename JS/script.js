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

    atualizarImagemIMC(imc);

    value.textContent = imc.replace('.',',');
    document.getElementById('descricao').textContent = descricao;
});

// Adicione um listener para os botões da faixa etária
const faixaEtariaButtons = document.querySelectorAll('.faixaEtaria-btn');

faixaEtariaButtons.forEach(button => {
    button.addEventListener('click', function() {
        faixaEtariaButtons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
    });
});

function atualizarImagemIMC(imc, faixaEtaria) {
    const imgElement = document.querySelector('#img img');

    if (!imgElement) {
        console.error('Elemento de imagem não encontrado.');
        return;
    }
    
    if (faixaEtaria === 'adulto') {
        if (imc < 18.5) {
            imgElement.src = '../assets/baixo-peso.jpg';
        } else if (imc >= 18.5 && imc < 25) {
            imgElement.src = '../assets/normal.jpg';
        } else if (imc >= 25 && imc < 30) {
            imgElement.src = '../assets/sobrepeso.jpg';
        } else if (imc >= 30 && imc < 35) {
            imgElement.src = '../assets/obesidade1.jpg';
        } else if (imc >= 35 && imc < 40) {
            imgElement.src = '../assets/obesidade2.jpg';
        }  else {
            imgElement.src = '../assets/obesidade3.jpg';
        }
    } else if (faixaEtaria === 'idoso') {
        if (imc <= 22.5) {
            imgElement.src = '../assets/baixo-peso.jpg';
        } else if (imc > 22.5 && imc < 27) {
            imgElement.src = '../assets/normal.jpg';
        } else {
            imgElement.src = '../assets/sobrepeso.jpg';
        }
    }
}

// Direcionamento da calculadora


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