# Mir4 Tools

### Site para calculos e informações sobre o [Mir4](https://mir4global.com/?lang=pt)
### Versão 1.1

1. Calculadora Dark Steel
![aconegro](/images/markdown/aconegro_md.png)
<br>
<b>Input Exemplo</b>
Em quantos segundos você minera?
R. 8 Segundos
Media de dark steel minerado por vez?
R. 120 Dark Steel
Tempo restante em minutos? / Tempo restante de mineração
R. 240 Minutos = 4 Horas
<b>Output Exemplo</b>
Seu Farm Restante - 54.000 Dark Steel = A Minerar
1 Minuto - 900 Dark Steel = Ja Minerado
<br>
<i>
<b>Calculo Dark Steel</b> 
input -> minerada, dsporMinerada, temporestante = X, Y, Z
var1 = 60 / X
var2 = var1 * Y
var3 = var2 * Z <br>
output ->
Farm Restante = var3
1 Minuto - var2
1 Hora - var2 * 60
<i>
