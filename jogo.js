//Ajustando o palco do jogo

var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

//Posições randômicas para o mosquito

function posicaoRandomica(){
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	//Se posição x ou y for menor que zero, recebe zero, senão recebe ela mesma
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//Criar o elemento html de forma dinâmica

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = 'mosquito1'
	mosquito.style.left = posicaoX + 'px' //pixel
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'

	document.body.appendChild(mosquito)
}

