$(document).ready(function(){
    $('li.sobrenos').click(function(){
        $('html, body').animate({
            scrollTop: $("div.bloco-texto1").offset().top
        }, 1000)
    }),
    $('li.cadastro').click(function(){
        $('html, body').animate({
            scrollTop: $("h1.cadastro2").offset().top
        }, 1000)
    }),
    $('li.curiosidade').click(function(){
        $('html, body').animate({
            scrollTop: $("div.texto-2").offset().top
        }, 1000)
    }),
    $('li.patrocinio').click(function(){
        $('html, body').animate({
            scrollTop: $("div.bloco-logos").offset().top
        }, 1000)
    }),
    $('div.logo').click(function(){
        $('html, body').animate({
            scrollTop: $("div.master").offset().top
        }, 1000)
    }),
    $('li.login').click(function(){
        $('html, body').animate({
            scrollTop: $("div.login").offset().top
        }, 1000)
    }),
    $('p.link').click(function(){
        $('html, body').animate({
            scrollTop: $("div.login").offset().top
        }, 1000)
    })
    
});