function calculoPromocao(){
    var medicamento = document.getElementById('medicamento').value
    var preco = document.getElementById('preco').value
    
    var precoPromo = Math.floor(preco * 2)

    

    document.getElementById('resposta').innerHTML = "Promoção de " + medicamento + "<br>" + "leve 2 por apenas R$: " + precoPromo.toFixed(2)
}

var mostrar = document.getElementById('mostrar')
mostrar.addEventListener('click', calculoPromocao)

