// DARK STEEL

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

    // Pontuação
    const options = { maximumFractionDigits: 0 };

    let restante = tempoRestante.toLocaleString('pt-br', options);
    let minuto = calculo.toLocaleString('pt-br', options);
    let hora = tempo.toLocaleString('pt-br', options);
    let dozehoras = meioDia.toLocaleString('pt-br', options);
    let umdia = dia.toLocaleString('pt-br', options);

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

function essencia() {

	let resultado = document.querySelector("#resultado");
	let recolha = document.querySelector("#cadarecolha");
	let energiaporvez = document.querySelector("#revez");

	let recolhida = Number(recolha.value);
	let energiaVez = Number(energiaporvez.value);

	let tempoRecolhida = Number(60 / recolhida);
	let calculo = Number(tempoRecolhida * energiaVez);
	let tempo = Number(calculo * 60);
	let meioDia = Number(tempo * 12);
	let dia = Number(tempo * 24);

	let tempor = document.querySelector("#tempores");
	let tempoRestante = Number(calculo * tempor.value);

	if (res1 < 0) {
		res1 = res1 * -1;
	}
	if (res2 < 0) {
		res1 = res1 * -1;
	}
	if (res3 < 0) {
		res1 = res1 * -1;
	}
	if (res4 < 0) {
		res1 = res1 * -1;
	}
	if (res5 < 0) {
		res1 = res1 * -1;
	}

	// Pontuação
	let res1 = tempoRestante.toLocaleString('pt-br', {maximumFractionDigits: 0});
    let res2 = calculo.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res3 = tempo.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res4 = meioDia.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res5 = dia.toLocaleString('pt-br', {maximumFractionDigits: 0});
	
	resultado.innerHTML = '';
	resultado.innerHTML += '<br>';
    
	resultado.innerHTML += `Seu Farm Restante - ${res1} de Energia` + '<br>';
	resultado.innerHTML += '<br>';
	resultado.innerHTML += `1 Minuto - ${res2} de Energia` + '<br>';
	resultado.innerHTML += `1 Hora - ${res3} de Energia` + '<br>';
	resultado.innerHTML += `12 Horas - ${res4} de Energia` + '<br>';
	resultado.innerHTML += `24 Horas - ${res5} de Energia` + '<br>';
}

// EXP

function exp() {

    let resultado = document.querySelector("#resultadoxp");

    let cinco = document.getElementById("5porcem");
    let atual = document.querySelector("#porcematual");

    levelAtual = Number(atual.value);
    cincoPorcento = Number(cinco.value);

    let divcincoPorcem = (cincoPorcento / 5);
    let cemPorcem = (divcincoPorcem * 100);
    let umPorcem = (levelAtual * divcincoPorcem);
    let quantofalta = (cemPorcem - umPorcem);

	// Pontuação
	let res1 = cemPorcem.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res2 = quantofalta.toLocaleString('pt-br', {maximumFractionDigits: 0});

	resultado.innerHTML = '';

    resultado.innerHTML += `Total do Level Atual <strong>${res1}</strong> de Experiência` + '<br>';
	resultado.innerHTML += `Faltam <strong>${res2}</strong> de Experiência` + '<br>';

}

function exp2() {
    
    let resultado2 = document.querySelector("#resultadofarm");
    
    let xp_res = document.querySelector("#restante");
    let monstro = document.querySelector("#xpmob");
    let segundos = document.querySelector("#segmob");

	xp = Number(xp_res.value);
	mob = Number(monstro.value);
    seg = Number(segundos.value);

    let mob_por_minuto = (60 / seg);
    let xp_por_minuto = (mob_por_minuto * mob);
    let xp_por_hora = (xp_por_minuto * 60);
    let horas_totais_up = (xp / xp_por_hora);

    let tempo_de_farm = document.querySelector("#tempofarmxp");
	let tempoFarmTotal = (xp_por_minuto * tempo_de_farm.value);

	// Pontuação
	let res1 = tempoFarmTotal.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res2 = xp_por_minuto.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res3 = xp_por_hora.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res4 = horas_totais_up.toLocaleString('pt-br', {maximumFractionDigits: 0});
	

     resultado2.innerHTML = '';
	 resultado2.innerHTML += '<br>';

     resultado2.innerHTML += `Nessa Tempo Você Vai Receber <strong>${res1}</strong> de Experiência` + '<br>';
     resultado2.innerHTML += `Você Recebe <strong>${res2}</strong> de Experiência Por Minuto` + '<br>';
     resultado2.innerHTML += `Você Recebe <strong>${res3}</strong> de Experiência Por Hora` + '<br>';
     resultado2.innerHTML += `Nessa Taxa de XP Você Upa em <strong>${res4}</strong> Horas` + '<br>';
}

