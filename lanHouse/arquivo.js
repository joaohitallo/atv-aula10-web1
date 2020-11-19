function calculoPromocao(){
    var precoTempo = document.getElementById('precoTempo').value
    var tempoUso = document.getElementById('tempoUso').value
    
    var valor = precoTempo * Math.ceil(tempoUso / 15)

    

    document.getElementById('resposta').innerHTML = "Valor a pagar R$: " + valor.toFixed(2)
}

var mostrar = document.getElementById('mostrar')
mostrar.addEventListener('click', calculoPromocao)

 