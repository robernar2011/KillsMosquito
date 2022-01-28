var altura = 0
var largura = 0
var vidas = 1

//Ajustando o palco do jogo

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

//Posições randômicas para o mosquito

function posicaoRandomica(){

	// remover o mosquito, caso exista
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		if (vidas >3) {
			alert('GAME OVER')
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	//Se posição x ou y for menor que zero, recebe zero, senão recebe ela mesma
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//Criar o elemento html de forma dinâmica

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px' //pixel
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)

	ladoAleatorio()

}

//Tamanhos randômicos para o mosquito

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

//Mudanças de lado do mosquito (esquerda/direita)
function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}