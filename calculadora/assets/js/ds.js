function calculo() {

	let resultado = window.document.querySelector("#resultado");

	let minerada = window.document.getElementById("cadaminerada");
	let dsporvez = window.document.querySelector("input#dsvez");
	let tempo = 60;
	let meio_dia = 12;
	let dia = 24;

	let n1 = Number(minerada.value);
	let n2 = Number(dsporvez.value);
	let n3 = Number(tempo);

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
	
	resultado.innerHTML = '';

	resultado.innerHTML += '<br><br>';

	resultado.innerHTML += `Seu Farm Restante - ${n11} Dark Steel` + '<br>';
	resultado.innerHTML += `1 Minuto - ${calculo2} Dark Steel` + '<br>';
	resultado.innerHTML += `1 Hora - ${n7} Dark Steel` + '<br>';
	resultado.innerHTML += `12 Horas - ${n8} Dark Steel` + '<br>';
	resultado.innerHTML += `24 Horas - ${n9} Dark Steel` + '<br>';
}

function calculo() {

	let resultado = window.document.querySelector("#resultado");

	let minerada = window.document.getElementById("cadaminerada");
	let dsporvez = window.document.querySelector("input#dsvez");
	let tempo = 60;
	let meio_dia = 12;
	let dia = 24;

	let n1 = Number(minerada.value);
	let n2 = Number(dsporvez.value);
	let n3 = Number(tempo);

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
	
	resultado.innerHTML = '';

	resultado.innerHTML += '<br><br>';

	resultado.innerHTML += `Seu Farm Restante - ${n11} Dark Steel` + '<br>';
	resultado.innerHTML += '<br>';
	resultado.innerHTML += `1 Minuto - ${calculo2} Dark Steel` + '<br>';
	resultado.innerHTML += `1 Hora - ${n7} Dark Steel` + '<br>';
	resultado.innerHTML += `12 Horas - ${n8} Dark Steel` + '<br>';
	resultado.innerHTML += `24 Horas - ${n9} Dark Steel` + '<br>';
}
