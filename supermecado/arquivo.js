function calculoPromocao(){
    var produto = document.getElementById('produto').value
    var preco = document.getElementById('preco').value
    

    var precoPromo = preco / 2
    var precoTotalPromo = precoPromo + (2 * preco)

    

    document.getElementById('resposta').innerHTML = produto + " - Promoção leve 3 por R$: " + precoTotalPromo.toFixed(2) + "<br>" + "O terceiro produto custa apenas R$: " + precoPromo.toFixed(2)
}

var mostrar = document.getElementById('mostrar')
mostrar.addEventListener('click', calculoPromocao)

 