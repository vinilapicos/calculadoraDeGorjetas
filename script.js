const quantidade = document.getElementById("quantidade");
const convidados = document.getElementById("convidados");
const qualidade = document.getElementById("qualidade");
const totalGorjeta = document.getElementById("totalGorjeta");

function calcular(){
    const gorjeta = ((quantidade.value * qualidade.value) / (convidados.value)).toFixed(2);
    totalGorjeta.value = '';
    convidados.value = '';
    qualidade.value = '';
    quantidade.value = '';
    if (isNaN(gorjeta)){
        totalGorjeta.innerHTML = 'Cada gorjeta ficou R$0';
    } else {
        totalGorjeta.innerHTML = 'Cada gorjeta ficou R$' + gorjeta;
    }

    mostrarGorjeta();
}

function mostrarGorjeta(){
    var x = totalGorjeta;
    x.className = 'show';
    setTimeout(function(){ x.className = x.className.replace('show', ''); }, 3000);
}