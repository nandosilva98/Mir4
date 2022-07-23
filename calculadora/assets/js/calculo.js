// DARK STEEL

function aco_negro() {

	let resultado = window.document.querySelector("#resultado");

	let minerada = window.document.getElementById("cadaminerada");
	let dsporvez = window.document.querySelector("input#dsvez");
	let tempo = 60;
	let meio_dia = 12;
	let dia = 24;

	let n1 = Number(minerada.value);
	let n2 = Number(dsporvez.value);

	let calculo1 = Number(n1 * n2);
	let n4 = Number(calculo1);

	let tempocalc = Number(tempo / n1);
	let n5 = Number(tempocalc);

	let calculo2 = Number(n5 * n2);
	let n6 = Number(calculo2);

	let n7 = Number(calculo2 * tempo);
	let n8 = Number(n7 * meio_dia);
	let n9 = Number(n7 * dia);

	let tempor = window.document.getElementById("tempores");
	let n10 = Number(tempor.value);
	let n11 = Number(n6 * n10);
    
	// Pontuação
	let res1 = n11.toLocaleString('pt-br', {maximumFractionDigits: 0});
    let res2 = calculo2.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res3 = n7.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res4 = n8.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res5 = n9.toLocaleString('pt-br', {maximumFractionDigits: 0});
	
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

	let resultado = window.document.querySelector("#resultado");

	let recolha = window.document.getElementById("cadarecolha");
	let energiaporvez = window.document.querySelector("input#revez");
	let tempo = 60;
	let meio_dia = 12;
	let dia = 24;

	let n1 = Number(recolha.value);
	let n2 = Number(energiaporvez.value);

	let calculo1 = (n1 * n2);
	let n4 = Number(calculo1);

	let tempocalc = (tempo / n1);
	let n5 = Number(tempocalc);

	let calculo2 = (n5 * n2);
	let n6 = Number(calculo2);

	let n7 = (calculo2 * tempo);
	let n8 = (n7 * meio_dia);
	let n9 = (n7 * dia);

	let tempor = window.document.getElementById("tempores");
	let n10 = Number(tempor.value);
	let n11 = (n6 * n10);

	// Pontuação
	let res1 = n11.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res2 = calculo2.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res3 = n7.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res4 = n8.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res5 = n9.toLocaleString('pt-br', {maximumFractionDigits: 0});
	
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

    let resultado = window.document.querySelector("#resultadoxp");

    let cinco = window.document.getElementById("5porcem");
    let atual = window.document.querySelector("input#porcematual");

    let n0 = Number(atual.value);
    let n1 = Number(cinco.value);

    let cinco2 = 5;
    let cem = 100;

    let divisaocincoporcemporum = (n1 / cinco2);
    let n2 = Number(divisaocincoporcemporum)

    let cemporcem = (n2 * cem);
    let n3 = Number(cemporcem);

   
    let umporcemporcem = (n0 * n2);
    let n4 = Number(umporcemporcem);
    
    
    let quantofalta = (n3 - n4);
    let n5 = Number(quantofalta);

	// Pontuação
	let res1 = n3.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res2 = n5.toLocaleString('pt-br', {maximumFractionDigits: 0});

	resultado.innerHTML = '';

    resultado.innerHTML += `Total do Level Atual <strong>${res1}</strong> de Experiência` + '<br>';
	resultado.innerHTML += `Faltam <strong>${res2}</strong> de Experiência` + '<br>';

}

function exp2() {
    
    let resultado2 = window.document.querySelector("#resultadofarm");
    
    let xp_res = window.document.getElementById("restante");
    let n6 = Number(xp_res.value);

    let monstro = window.document.getElementById("xpmob");
    let n7 = Number(monstro.value);

    let segundos = window.document.getElementById("segmob");
    let n8 = Number(segundos.value);

    let mobsfaltam = (n6 / n7);
    let n9 = Number(mobsfaltam);

    let mob_por_minuto = (60 / n8);
    let n10 = Number(mob_por_minuto);

    let xp_por_minuto = (n10 * n7);
    let n11 = Number(xp_por_minuto);

    let xp_por_hora = (n11 * 60);
    let n12 = Number(xp_por_hora);

    let horas_totais_up = (n6 / n12);
    let n13 = Number(horas_totais_up);

    let tempo_de_farm = window.document.getElementById("tempofarmxp");
	let n14 = Number(tempo_de_farm.value);
	let n15 = (n11 * n14);

	// Pontuação
	let res1 = n15.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res2 = n11.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res3 = n12.toLocaleString('pt-br', {maximumFractionDigits: 0});
	let res4 = n13.toLocaleString('pt-br', {maximumFractionDigits: 0});
	

     resultado2.innerHTML = '';
	 resultado2.innerHTML += '<br>';

     resultado2.innerHTML += `Nessa Tempo Você Vai Receber <strong>${res1}</strong> de Experiência` + '<br>';
     resultado2.innerHTML += `Você Recebe <strong>${res2}</strong> de Experiência Por Minuto` + '<br>';
     resultado2.innerHTML += `Você Recebe <strong>${res3}</strong> de Experiência Por Hora` + '<br>';
     resultado2.innerHTML += `Nessa Taxa de XP Você Upa em <strong>${res4}</strong> Horas` + '<br>';
}

