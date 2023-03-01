const pontuacao = { maximumFractionDigits: 0 };

function aco_negro() {

    const miner = document.querySelector("#cadaminerada");
    const dsporvez = document.querySelector("#dsvez");
    const tempor = document.querySelector("#tempores");

    const minerada = Number(miner.value);
    const dsporMinerada = Number(dsporvez.value);
    const tempoRestante = Number(calculo * tempor.value);

    const tempoMinerada = 60 / minerada;
    const calculo = tempoMinerada * dsporMinerada;
    const tempo = calculo * 60;
    const meioDia = tempo * 12;
    const dia = tempo * 24;

    let restante = tempoRestante.toLocaleString('pt-br', pontuacao);
    let minuto = calculo.toLocaleString('pt-br', pontuacao);
    let hora = tempo.toLocaleString('pt-br', pontuacao);
    let dozehoras = meioDia.toLocaleString('pt-br', pontuacao);
    let umdia = dia.toLocaleString('pt-br', pontuacao);

    // Remove numeros negativos do calculo
    [restante, minuto, hora, dozehoras, umdia].forEach((res, index) => {
        if (res < 0) {
            res[index] *= -1;
        }
    });

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `
      <br>Seu Farm Restante - ${restante} Dark Steel<br><br>
      1 Minuto - ${minuto} Dark Steel<br>
      1 Hora - ${hora} Dark Steel<br>
      12 Horas - ${dozehoras} Dark Steel<br>
      24 Horas - ${umdia} Dark Steel<br>
    `;
}

// ENERGIA

// function negativo() {
//     // Remove numeros negativos do calculo
//     [restante, minuto, hora, dozehoras, umdia].forEach((res, index) => {
//         if (res < 0) {
//             res[index] *= -1;
//         }
//     });
// }

function essencia() {

    const resultado = document.querySelector("#resultado");
    const recolha = document.querySelector("#cadarecolha");
    const energiaporvez = document.querySelector("#revez");
  
    const recolhida = Number(recolha.value);
    const energiaVez = Number(energiaporvez.value);
  
    const tempoRecolhida = 60 / recolhida
    const calculo = tempoRecolhida * energiaVez
    const tempo = calculo * 60
    const meioDia = tempo * 12
    const dia = tempo * 24
  
    const tempor = document.querySelector("#tempores");
    const tempoRestante = Number(calculo * tempor.value);

    // codigo repitido achar uma solução 
    let restante = tempoRestante.toLocaleString('pt-br', pontuacao);
    let minuto = calculo.toLocaleString('pt-br', pontuacao);
    let hora = tempo.toLocaleString('pt-br', pontuacao);
    let dozehoras = meioDia.toLocaleString('pt-br', pontuacao);
    let umdia = dia.toLocaleString('pt-br', pontuacao);

    resultado.innerHTML = `
    Seu Farm Restante - ${restante} de Energia<br><br>
    1 Minuto - ${minuto} de Energia<br>
    1 Hora - ${hora} de Energia<br>
    12 Horas - ${dozehoras} de Energia<br>
    24 Horas - ${umdia} de Energia<br>
   `;
}

// EXP

function exp() {

    const cinco = document.getElementById("5porcem");
    const atual = document.querySelector("#porcematual");

    const levelAtual = Number(atual.value);
    const cincoPorcento = Number(cinco.value);

    const divcincoPorcem = (cincoPorcento / 5);
    const cemPorcem = (divcincoPorcem * 100);
    const umPorcem = (levelAtual * divcincoPorcem);
    const quantofalta = (cemPorcem - umPorcem);

    const resultado = document.querySelector("#resultadoxp");

    let res1 = cemPorcem.toLocaleString('pt-br', pontuacao);
    let res2 = quantofalta.toLocaleString('pt-br', pontuacao);

    resultado.innerHTML = `Total do Level Atual <strong>${res1}</strong> de Experiência<br>
    Faltam <strong>${res2}</strong> de Experiência`;
}

function exp2() {

    const xp_res = document.querySelector("#restante");
    const monstro = document.querySelector("#xpmob");
    const segundos = document.querySelector("#segmob");
    
    const xp = Number(xp_res.value);
    const mob = Number(monstro.value);
    const seg = Number(segundos.value);
    
    const mob_por_minuto = (60 / seg);
    const xp_por_minuto = (mob_por_minuto * mob);
    const xp_por_hora = (xp_por_minuto * 60);
    const horas_totais_up = (xp / xp_por_hora);
    
    const tempo_de_farm = document.querySelector("#tempofarmxp");
    const tempoFarmTotal = (xp_por_minuto * tempo_de_farm.value);

    const resultado2 = document.querySelector('#resultado2');

    let res1 = tempoFarmTotal.toLocaleString('pt-br', pontuacao);
    let res2 = xp_por_minuto.toLocaleString('pt-br', pontuacao);
    let res3 = xp_por_hora.toLocaleString('pt-br', pontuacao);
    let res4 = horas_totais_up.toLocaleString('pt-br', pontuacao);


    resultado2.innerHTML = `
    <br>Nessa Tempo Você Vai Receber <strong>${res1}</strong> de Experiência<br>
    Você Recebe <strong>${res2}</strong> de Experiência Por Minuto<br>
    Você Recebe <strong>${res3}</strong> de Experiência Por Hora<br>
    Nessa Taxa de XP Você Upa em <strong>${res4}</strong> Horas<br>
    `;
}
