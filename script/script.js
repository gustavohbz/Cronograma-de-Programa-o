// Variáveis para armazenar as horas disponíveis para cada dia da semana
//com o .value eu capturo o valor inserido pelo usuario no input, mas como o script é carregado antes do usuario inserir os valores, ele captura o valor vazio, por isso a necessidade de criar a função ArmazenarHorasSemanas() para capturar os valores após o usuario clicar no botão "Armazenar Horas por Semana"
var Segunda = document.getElementById("seg").value
var Terca  = document.getElementById("ter").value
var Quarta = document.getElementById("qua").value
var Quinta = document.getElementById("qui").value
var Sexta  = document.getElementById("sex").value
var Sabado = document.getElementById("sab").value
var Domingo = document.getElementById("dom").value

function ArmazenarHorasSemanas(){
   var Segunda = document.getElementById("seg")
    var Terca  = document.getElementById("ter")
    var Quarta = document.getElementById("qua")
    var Quinta = document.getElementById("qui")
    var Sexta  = document.getElementById("sex")
    var Sabado = document.getElementById("sab")
    var Domingo = document.getElementById("dom")
    window.alert(`Só confirmando: Segunda-Feira:${Segunda.value}, Terça-Feira:${Terca.value}, Quarta-Feira:${Quarta.value}, Quinta-Feira:${Quinta.value}, Sexta-Feira:${Sexta.value}, Sábado:${Sabado.value}, Domingo:${Domingo.value}`)
    
}
///window.alert(Segunda + Terca + Quarta + Quinta + Sexta + Sabado + Domingo)
function gerarCronograma(){
    window.alert("Gerando Cronograma...")
}