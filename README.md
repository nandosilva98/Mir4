# Mir4 Tools

### Site para calculos e informações sobre o [Mir4](https://mir4global.com/?lang=pt)
### Versão 1.1

1. Calculadora Dark Steel <br> <br>
![aconegro](/images/markdown/aconegro_md.png) 
<br>
<b>Input Exemplo</b> <br>
Em quantos segundos você minera? <br>
R. 8 Segundos <br>
Media de dark steel minerado por vez? <br>
R. 120 Dark Steel <br>
Tempo restante em minutos? / Tempo restante de mineração <br>
R. 240 Minutos = 4 Horas <br>
<b>Output Exemplo</b> <br>
Seu Farm Restante - 54.000 Dark Steel = A Minerar <br>
1 Minuto - 900 Dark Steel = Ja Minerado 
<br> 
<br>
<i>
<b>Calculo Dark Steel</b> <br>
input -> minerada, dsporMinerada, temporestante = X, Y, Z <br>
var1 = 60 / X <br>
var2 = var1 * Y <br>
var3 = var2 * Z <br>
<br>
output -> <br>
Farm Restante = var3  <br>
1 Minuto - var2 <br>
1 Hora - var2 * 60 <br>
<i>
