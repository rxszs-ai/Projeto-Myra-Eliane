function scrollSection(id){

document.getElementById(id).scrollIntoView({

behavior:"smooth"

})

}



let noticias = [

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



function abrirNoticia(i){

document.getElementById("modal").style.display="flex"

document.getElementById("modal-titulo").innerText = noticias[i].titulo

document.getElementById("modal-img").src = noticias[i].img

document.getElementById("modal-texto").innerText = noticias[i].texto

}



function fecharModal(){

document.getElementById("modal").style.display="none"

}