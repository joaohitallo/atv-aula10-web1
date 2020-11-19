function calculoPromocao(){
    var precoKg = document.getElementById('precoKg').value
    var consumoGr = document.getElementById('consumoGr').value
    
    var precoGr = precoKg / 1000
    var consumoValor = precoGr * consumoGr

    

    document.getElementById('resposta').innerHTML = "Valor a pagar R$: " + consumoValor.toFixed(2)
}

var mostrar = document.getElementById('mostrar')
mostrar.addEventListener('click', calculoPromocao)

