/*------------------------------
 * Copyright 2015 Willians Martins
 * http://www.williansmartins.com
 *
 * 
------------------------------*/

$(document).ready(function() {
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-3749716-2', 'auto');
	ga('send', 'pageview');
	
	ga('send', 'event', 'entrou_na_pagina_sorteio', $("body").attr('data-page'), 'sorteio');

	$("a").click(function(e){
		// e.preventDefault();
		ga('send', 'event', 'click', $(this).attr('href') , '');
		// alert($(this).attr('href'));
	});

           
	$('.sorteio .btn-sortear').click(function(e){
		e.preventDefault();
		terminou = false;
		
		//capturar os nomes vindo do textarea
		var nomes_val = $(".sorteio #textos").val()

		//criar um vetor 
		var nomes_array = [];

		//adicionar todos os nomes no vetor
		$.each(nomes_val.split(/\n/), function (i, nome) {     
		      if($.trim(nome) != ""){
		          nomes_array.push(nome.toUpperCase());
		      }        
		});

		//gerar um número aleatório com no máximo a quantidade de nomes
		var numero = Math.floor(Math.random()*nomes_array.length);

		//apresentar a quantidade de nomes
		console.error(numero);

		//apresentar o nome da posiçao do vetor, baseada no numero gerado
		console.info(nomes_array[numero]);
		// console.info(nomes_val);

		$('.resultado').flightboard('destroy');
		$('.resultado').flightboard({
			messages: ['CAPTURANDO NOMES DIGITADOS', 
			'TOTAL DE PARTICIPANTES ' + nomes_array.length,
			'SORTEANDO UM DOS NOMES',
			$.trim( nomes_array[numero].toUpperCase())],
			maxLength: 30,
			afterFlip: endedFlip,
			shading: true,
			speed: 100,
			// repeat: false,
			lettersImage: 'flightBoardLarge.png',
			shadingImages: ['flightBoardHigh.png', 'flightBoardShad.png']
		});

		$('.resultado').flightboard('start');
	});

});

function endedFlip(current, next) { 
	console.info(terminou);
	if(current == "SORTEANDO UM DOS NOMES"){
    	terminou = true;
	}
	
	if(terminou){
    	$('.resultado').flightboard('stop');
	}
}