// DARK STEEL

function aco_negro() {

	let resultado = document.querySelector("#resultado");
	let miner = document.querySelector("#cadaminerada");
	let dsporvez = document.querySelector("#dsvez");

	minerada = Number(miner.value);
	let dsporMinerada = Number(dsporvez.value);

	let tempoMinerada = Number(60 / minerada);
	let calculo = Number(tempoMinerada * dsporMinerada);

	let tempo = Number(calculo * 60);
	let meioDia = Number(tempo * 12);
	let dia = Number(tempo * 24);

	let tempor = document.querySelector("#tempores");
	let tempoRestante = Number(calculo * tempor.value);

	// Pontuação
	let res1 = tempoRestante.toLocaleString('pt-br', {maximumFractionDigits: 0});
    let res2 = calculo.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res3 = tempo.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res4 = meioDia.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res5 = dia.toLocaleString('pt-br', {maximumFractionDigits: 0});
    
	// Remove numeros negativos do calculo
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

	resultado.innerHTML = '';
	resultado.innerHTML += '<br>';

	resultado.innerHTML += `Seu Farm Restante - ${res1} Dark Steel` + '<br>';
	resultado.innerHTML += '<br>';
	resultado.innerHTML += `1 Minuto - ${res2} Dark Steel` + '<br>';
	resultado.innerHTML += `1 Hora - ${res3} Dark Steel` + '<br>';
	resultado.innerHTML += `12 Horas - ${res4} Dark Steel` + '<br>';
	resultado.innerHTML += `24 Horas - ${res5} Dark Steel` + '<br>';

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

