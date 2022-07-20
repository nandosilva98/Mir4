function calculo() {

    let resultado = window.document.querySelector("#resultado");

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
    
    
    quantofalta = (n3 - n4);
    n5 = Number(quantofalta);

    let test = (10 * 5);

    resultado.innerHTML += `Total do Level Atual <strong>${n3}</strong> de Experiência` + '<br>';
	resultado.innerHTML += `Faltam <strong>${n5}</strong> de Experiência` + '<br>';

}

function calculo2() {
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

     // Resultado Farm

     resultado.innerHTML = '';
     resultado.innerHTML = '';
     resultado.innerHTML += '<br><br>';

     resultado2.innerHTML += `Nessa Tempo Você Vai Receber <strong>${n15}</strong> de Experiência` + '<br>';
     resultado2.innerHTML += `Você Precisa Matar <strong>${n9}</strong> Monstros para Upar seu Level` + '<br>';
     resultado2.innerHTML += `Você Mata <strong>${n10}</strong> Monstros Por Minuto` + '<br>';
     resultado2.innerHTML += `Você Recebe <strong>${n11}</strong> de Experiência Por Minuto` + '<br>';
     resultado2.innerHTML += `Você Recebe <strong>${n12}</strong> de Experiência Por Hora` + '<br>';
     resultado2.innerHTML += `Nessa Taxa de XP Você Upa em <strong>${n13}</strong> Horas` + '<br>';
}
