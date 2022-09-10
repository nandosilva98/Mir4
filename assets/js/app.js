
function teste() {
// Query Selector
let resultado = document.querySelector('#res');
let input_1 = document.querySelector('#item1');
let input_2 = document.querySelector('#item2');
let input_3 = document.querySelector('#item3');


// Fazer um array

const raro = ["100", "25", "25"];


input_a = Number(input_1.value);
input_b = Number(input_2.value);
input_c = Number(input_3.value);

// Equipamentos Raros
let item1 = 100;
let item2 = 25;
let item3 = 25;

// // Equipamentos Epicos
// let item5 = 300;
// let item6 = 100;
// let item7 = 100;

// // Equipamentos Lendarios
// let item9 = 100;
// let item10 = 25;
// let item11 = 25;

// Calculo
calculo_item1 = Number(item1 - input_a);
calculo_item2 = Number(item2 - input_b);
calculo_item3 = Number(item3 - input_c);

if (calculo_item1 < 0) {
    calculo_item1 = calculo_item1 * 0;
} 
if (calculo_item2 < 0) {
    calculo_item2 = calculo_item2 * 0;
} 
if (calculo_item3 < 0) {
    calculo_item3 = calculo_item3 * 0;
} 

console.log(input_a, calculo_item1, calculo_item2, calculo_item3);

resultado.innerHTML = '';
resultado.innerHTML += '<br>';
resultado.innerHTML += `Você Precisa de <strong>${calculo_item1}</strong> - Aço/Platina <br><br>` ;
resultado.innerHTML += `Você Precisa de <strong>${calculo_item2}</strong> - <br> Esfera, Quintessencia, Fragmento <br><br>` ;
resultado.innerHTML += `Você Precisa de <strong>${calculo_item3}</strong> - <br> Pedra Sombra, Bugiganga, Pedra Anima <br>` ;

}




