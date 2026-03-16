document.addEventListener("DOMContentLoaded", function(){

/* SCROLL SUAVE */

window.scrollSection = function(id){

const section = document.getElementById(id)

if(section){
section.scrollIntoView({
behavior:"smooth"
})
}

}


/* MENU MOBILE */

window.toggleMenu = function(){

const menu = document.getElementById("menuMobile")

if(menu){
menu.classList.toggle("ativo")
}

}


/* NOTÍCIAS */

const noticias = [

{
titulo:"Espaço Cultural Arandu conclui formações",
img:"imagens/noticia1.jpg",
texto:"O Espaço Cultural Arandu concluiu formações do projeto Barca em parceria com a Porto Iracema das Artes."
},

{
titulo:"CEI Olga e Parsifal Barroso celebra seis anos",
img:"imagens/noticia2.jpg",
texto:"O CEI Olga e Parsifal Barroso comemorou seis anos de atividades voltadas à educação infantil."
},

{
titulo:"Projeto Mulheres de Negócios",
img:"imagens/noticia3.jpg",
texto:"O Centro de Formação Profissional realizou mais uma edição do projeto Mulheres de Negócios."
}

]


/* ABRIR NOTÍCIA */

window.abrirNoticia = function(i){

const modal = document.getElementById("modal")

modal.style.display="flex"

document.getElementById("modal-titulo").innerText = noticias[i].titulo
document.getElementById("modal-img").src = noticias[i].img
document.getElementById("modal-texto").innerText = noticias[i].texto

}


/* FECHAR MODAL */

window.fecharModal = function(){

document.getElementById("modal").style.display="none"

}


/* FECHAR CLICANDO FORA */

window.addEventListener("click", function(event){

const modal = document.getElementById("modal")

if(event.target === modal){
modal.style.display = "none"
}

})


/* BOTÃO SUBIR */

const circle = document.querySelector("#scrollTopBtn .progress-ring-circle")
const button = document.getElementById("scrollTopBtn")

if(circle && button){

const radius = circle.r.baseVal.value
const circumference = 2 * Math.PI * radius

circle.style.strokeDasharray = circumference
circle.style.strokeDashoffset = circumference


function setProgress(percent){

const offset = circumference - (percent * circumference)
circle.style.strokeDashoffset = offset

}

window.addEventListener("scroll", function(){

const scrollTop = window.scrollY
const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

const progress = scrollTop / scrollHeight

setProgress(progress)

})


button.addEventListener("click", function(){

window.scrollTo({
top:0,
behavior:"smooth"
})

})

}

})