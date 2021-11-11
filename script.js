const calcular = document.getElementById('calcular');

function calculo () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const distancia = document.getElementById('distancia').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && peso !== '' && distancia !== '' && tempo !== '') {

        const tempo_real = tempo.split(':');
        const horas = parseInt(tempo_real[0]);
        const minutos = parseInt(tempo_real[1]);
        const segundos = parseInt(tempo_real[2]);

        const tempo_horas = horas + minutos/60 + segundos/3600;
        const tempo_minutos = horas*60 + minutos + segundos/60;

        const velocidade = (distancia/(tempo_horas)).toFixed(2);
        const pace = (60/velocidade).toFixed(2);
        const gasto_calorico = (velocidade*(peso*0.0175)*tempo_minutos).toFixed(2);
           
        resultado.textContent = `Olá ${nome} ! Você percorreu ${distancia} km em ${tempo} hrs. Isso quer dizer que a sua velocidade média foi de ${velocidade} km/h, o que o corresponde a um pace de ${pace}min/km. Com ${peso}kg, você gastou cerca de ${gasto_calorico} cal `;

    }
    else {
        resultado.textContent = 'Para realizar os calculo,preencha todos os campos com as informações necessárias.';
    }

}

calcular.addEventListener('click', calculo);