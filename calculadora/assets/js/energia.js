function calculo() {

	var resultado = window.document.querySelector("#resultado");

	var recolha = window.document.getElementById("cadarecolha");
	var energiaporvez = window.document.querySelector("input#revez");
	var tempo = 60;
	var meio_dia = 12;
	var dia = 24;

	var n1 = Number(recolha.value);
	var n2 = Number(energiaporvez.value);
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

	// resultado.innerHTML += `${recolha.value} Segundos do tempo de cada recolha x ${dsporvez.value} Energia por vez` + '<br>';
	// resultado.innerHTML += `${tempo} Segundo divido por ${recolha.value} Segundos Minera = ${tempocalc}` + '<br>';
	// resultado.innerHTML += `${tempocalc} Vezes recolha por Minuto x ${dsporvez.value} DS  = ${calculo2} DS` + '<br>';
	// resultado.innerHTML += `${calculo2} DS x ${tempo} Minutos = ${n7} DS` + '<br>';
	// resultado.innerHTML += `${n7} DS x ${dia} Horas = ${n9}`;

	resultado.innerHTML += '<br><br>';
    
	resultado.innerHTML += `Seu Farm Restante - ${n11} de Energia` + '<br>';
	resultado.innerHTML += '<br>';
	resultado.innerHTML += `1 Minuto - ${calculo2} de Energia` + '<br>';
	resultado.innerHTML += `1 Hora - ${n7} de Energia` + '<br>';
	resultado.innerHTML += `12 Horas - ${n8} de Energia` + '<br>';
	resultado.innerHTML += `24 Horas - ${n9} de Energia` + '<br>';
}