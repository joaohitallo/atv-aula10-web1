function calculoPromocao(){
    var veiculo = document.getElementById('veiculo').value
    var preco = document.getElementById('preco').value
    
    var valorEntrada = preco / 2
    var valorParcelado = (preco / 2) / 12

    document.getElementById('resposta').innerHTML = "Promoção: " + veiculo + "<br>" + "Entrada de R$: " + valorEntrada.toFixed(2) + "<br>" + "+ 12x de R$: " + valorParcelado.toFixed(2)
}

var mostrar = document.getElementById('mostrar')
mostrar.addEventListener('click', calculoPromocao)

