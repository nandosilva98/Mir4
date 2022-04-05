function calculo() {

	var resultado = window.document.querySelector("#resultado");

	var minerada = window.document.getElementById("cadaminerada");
	var dsporvez = window.document.querySelector("input#dsvez");
	var tempo = 60;
	var meio_dia = 12;
	var dia = 24;

	var n1 = Number(minerada.value);
	var n2 = Number(dsporvez.value);
	var n3 = Number(tempo);

	var calculo1 = (n1 * n2);
	var n4 = Number(calculo1);

	var tempocalc = (tempo / n1);
	var n5 = Number(tempocalc);

	var calculo2 = (n5 * n2);
	var n6 = Number(calculo2);

	var n7 = (calculo2 * tempo);
	var n8 = (n7 * meio_dia);
	var n9 = (n7 * dia);

	var tempor = window.document.getElementById("tempores");
	var n10 = Number(tempor.value);
	var n11 = (n6 * n10);
	
	resultado.innerHTML = '';

	// resultado.innerHTML += `${minerada.value} Segundos do tempo de cada minerada x ${dsporvez.value} Dark Steel por vez` + '<br>';
	// resultado.innerHTML += `${tempo} Segundo divido por ${minerada.value} Segundos Minera = ${tempocalc}` + '<br>';
	// resultado.innerHTML += `${tempocalc} Vezes Minerada por Minuto x ${dsporvez.value} DS  = ${calculo2} DS` + '<br>';
	// resultado.innerHTML += `${calculo2} DS x ${tempo} Minutos = ${n7} DS` + '<br>';
	// resultado.innerHTML += `${n7} DS x ${dia} Horas = ${n9}`;

	resultado.innerHTML += '<br><br>';

	resultado.innerHTML += `Seu Farm Restante - ${n11} Dark Steel` + '<br>';
	resultado.innerHTML += `1 Minuto - ${calculo2} Dark Steel` + '<br>';
	resultado.innerHTML += `1 Hora - ${n7} Dark Steel` + '<br>';
	resultado.innerHTML += `12 Horas - ${n8} Dark Steel` + '<br>';
	resultado.innerHTML += `24 Horas - ${n9} Dark Steel` + '<br>';
}

function calculo() {

	var resultado = window.document.querySelector("#resultado");

	var minerada = window.document.getElementById("cadaminerada");
	var dsporvez = window.document.querySelector("input#dsvez");
	var tempo = 60;
	var meio_dia = 12;
	var dia = 24;

	var n1 = Number(minerada.value);
	var n2 = Number(dsporvez.value);
	var n3 = Number(tempo);

	var calculo1 = (n1 * n2);
	var n4 = Number(calculo1);

	var tempocalc = (tempo / n1);
	var n5 = Number(tempocalc);

	var calculo2 = (n5 * n2);
	var n6 = Number(calculo2);

	var n7 = (calculo2 * tempo);
	var n8 = (n7 * meio_dia);
	var n9 = (n7 * dia);

	var tempor = window.document.getElementById("tempores");
	var n10 = Number(tempor.value);
	var n11 = (n6 * n10);
	
	resultado.innerHTML = '';

	// resultado.innerHTML += `${minerada.value} Segundos do tempo de cada minerada x ${dsporvez.value} Dark Steel por vez` + '<br>';
	// resultado.innerHTML += `${tempo} Segundo divido por ${minerada.value} Segundos Minera = ${tempocalc}` + '<br>';
	// resultado.innerHTML += `${tempocalc} Vezes Minerada por Minuto x ${dsporvez.value} DS  = ${calculo2} DS` + '<br>';
	// resultado.innerHTML += `${calculo2} DS x ${tempo} Minutos = ${n7} DS` + '<br>';
	// resultado.innerHTML += `${n7} DS x ${dia} Horas = ${n9}`;

	resultado.innerHTML += '<br><br>';

	resultado.innerHTML += `Seu Farm Restante - ${n11} Dark Steel` + '<br>';
	resultado.innerHTML += '<br>';
	resultado.innerHTML += `1 Minuto - ${calculo2} Dark Steel` + '<br>';
	resultado.innerHTML += `1 Hora - ${n7} Dark Steel` + '<br>';
	resultado.innerHTML += `12 Horas - ${n8} Dark Steel` + '<br>';
	resultado.innerHTML += `24 Horas - ${n9} Dark Steel` + '<br>';
}

