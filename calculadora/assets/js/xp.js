function calculo() {

    var resultado = window.document.querySelector("#resultado");

    var cinco = window.document.getElementById("5porcem");
    var atual = window.document.querySelector("input#porcematual");

    var n0 = Number(atual.value);
    var n1 = Number(cinco.value);

    var cinco2 = 5;
    var cem = 100;

    var divisaocincoporcemporum = (n1 / cinco2);
    var n2 = Number(divisaocincoporcemporum)

    var cemporcem = (n2 * cem);
    var n3 = Number(cemporcem);

   
    var umporcemporcem = (n0 * n2);
    var n4 = Number(umporcemporcem);
    
    
    quantofalta = (n3 - n4);
    n5 = Number(quantofalta);

    var test = (10 * 5);

    
    // Resultado no Console
    // console.log(n1);
    // console.log(n2);
    // console.log(n3);
    // console.log(n4);
    // console.log(n5);
    // console.log(quantofalta)
    // console.log(n6);
    // console.log(n7);
    // console.log(n8);

    resultado.innerHTML += `Total do Level Atual <strong>${n3}</strong> de Experiência` + '<br>';
	resultado.innerHTML += `Faltam <strong>${n5}</strong> de Experiência` + '<br>';

}

function calculo2() {
    var resultado2 = window.document.querySelector("#resultadofarm");
    
    var xp_res = window.document.getElementById("restante");
    var n6 = Number(xp_res.value);

    var monstro = window.document.getElementById("xpmob");
    var n7 = Number(monstro.value);

    var segundos = window.document.getElementById("segmob");
    var n8 = Number(segundos.value);

    var mobsfaltam = (n6 / n7);
    var n9 = Number(mobsfaltam);

    var mob_por_minuto = (60 / n8);
    var n10 = Number(mob_por_minuto);

    var xp_por_minuto = (n10 * n7);
    var n11 = Number(xp_por_minuto);

    var xp_por_hora = (n11 * 60);
    var n12 = Number(xp_por_hora);

    var horas_totais_up = (n6 / n12);
    var n13 = Number(horas_totais_up);

    var tempo_de_farm = window.document.getElementById("tempofarmxp");
	var n14 = Number(tempo_de_farm.value);
	var n15 = (n11 * n14);

     // Resultado Farm

     resultado.innerHTML = '';
     resultado.innerHTML += '<br><br>';

     resultado2.innerHTML += `Nessa Tempo Você Vai Receber <strong>${n15}</strong> de Experiência` + '<br>';
     resultado2.innerHTML += `Você Precisa Matar <strong>${n9}</strong> Monstros para Upar seu Level` + '<br>';
     resultado2.innerHTML += `Você Mata <strong>${n10}</strong> Monstros Por Minuto` + '<br>';
     resultado2.innerHTML += `Você Recebe <strong>${n11}</strong> de Experiência Por Minuto` + '<br>';
     resultado2.innerHTML += `Você Recebe <strong>${n12}</strong> de Experiência Por Hora` + '<br>';
     resultado2.innerHTML += `Nessa Taxa de XP Você Upa em <strong>${n13}</strong> Horas` + '<br>';
}
