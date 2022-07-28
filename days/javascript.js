
var foto = window.document.getElementById('foto')

var botaoMorning = window.document.getElementById('li1')
var botaoAfternoon = window.document.getElementById('li2')
var botaoEvenning = window.document.getElementById('li3')

botaoMorning.onclick = function(){
    foto.setAttribute("src", "medi1.png")
}


botaoAfternoon.onclick = function(){
    foto.setAttribute("src", "medi2.png")
}

botaoEvenning.onclick = function(){
    foto.setAttribute("src", "medi3.png")
}