angular
.module('principal')
.controller('SliderController', 
	function ($scope, $timeout) {
        
        $scope.cursosCarregados = false;

        $scope.cursos = [
			{
				"escola" : "Escola do municipio de Jandira",
				"curso" : "Violão",
				"imagemEscola" : "jandira.jpg",
				"imagem" : "violao.jpg",
				"data" : "1996"
			},
			{
				"escola" : "E.E.P.G Alferes Henrique Sammartino",
				"curso" : "Ensino Fundamental",
				"imagemEscola" : "escola.jpg",
				"imagem" : "chapeu.png",
				"data" : "12/1997"
			},	
			{
				"escola" : "Escola do municipio de Jandira",
				"curso" : "Kung fu",
				"imagemEscola" : "jandira.jpg",
				"imagem" : "kungfu.jpg",
				"data" : "1997"
			},
			{
				"escola" : "Senai - Professor Vicente Amato",
				"curso" : "Primeiros Socorros",
				"imagemEscola" : "senai.jpg",
				"imagem" : "primeiro-socorros.jpg",
				"data" : "1998"
			},
			{
				"escola" : "Senai - Professor Vicente Amato",
				"curso" : "Informática Básica",
				"imagemEscola" : "senai.jpg",
				"imagem" : "informatica.png",
				"data" : "1998"
			},
			{
				"escola" : "Senai - Professor Vicente Amato",
				"curso" : "Eletricista de manutenção e Eletroeletrônica",
				"imagemEscola" : "senai.jpg",
				"imagem" : "eletricista.jpg",
				"data" : "1998"
			},
			{
				"escola" : "Seven Informática",
				"curso" : "Informática Básica",
				"imagemEscola" : "escola.jpg",
				"imagem" : "informatica.png",
				"data" : "1998"
			},
			{
				"escola" : "Centro Profissionalizante Rio Branco",
				"curso" : "Desenho Arquitetônico",
				"imagemEscola" : "cepro.jpg",
				"imagem" : "compasso.jpg",
				"data" : "1999"
			},
			{
				"escola" : "Centro Profissionalizante Rio Branco",
				"curso" : "Hardware - Manutenção de computadores",
				"imagemEscola" : "cepro.jpg",
				"imagem" : "hardware.jpg",
				"data" : "1999"
			},
			{
				"escola" : "Centro Profissionalizante Rio Branco",
				"curso" : "Computação Gráfica",
				"imagemEscola" : "cepro.jpg",
				"imagem" : "pena.jpg",
				"data" : "1999"
			},
			{
				"escola" : "Centro Profissionalizante Rio Branco",
				"curso" : "Desenho Publicitário",
				"imagemEscola" : "cepro.jpg",
				"imagem" : "pena2.jpg",
				"data" : "1999"
			},
			{
				"escola" : "Escola de Karatê Kibokushin",
				"curso" : "Karatê Kibokushin",
				"imagemEscola" : "escola.jpg",
				"imagem" : "kybokushin.jpg",
				"data" : "1999"
			},
			{
				"escola" : "E.E.P.S.G Josepha Pinto Chiavelli",
				"curso" : "Ensino Médio",
				"imagemEscola" : "escola.jpg",
				"imagem" : "chapeu.png",
				"data" : "12/2000"
			},	
			{
				"escola" : "Centro Profissionalizante Rio Branco",
				"curso" : "Cabelereiro",
				"imagemEscola" : "cepro.jpg",
				"imagem" : "tesoura.jpg",
				"data" : "2000"
			},
			{
				"escola" : "Centro Profissionalizante Rio Branco",
				"curso" : "Coral",
				"imagemEscola" : "cepro.jpg",
				"imagem" : "coral.png",
				"data" : "2000"
			},
			{
				"escola" : "Centro Profissionalizante Rio Branco",
				"curso" : "Serigrafia",
				"imagemEscola" : "cepro.jpg",
				"imagem" : "serigrafia.png",
				"data" : "2000"
			},
			{
				"escola" : "Centro Profissionalizante Rio Branco",
				"curso" : "Monitoria de treinamento",
				"imagemEscola" : "cepro.jpg",
				"imagem" : "monitoria.png",
				"data" : "2000"
			},
			{
				"escola" : "ASSA",
				"curso" : "Jiu jitsu",
				"imagemEscola" : "escola.jpg",
				"imagem" : "jiujitsu.jpg",
				"data" : "2000"
			},
			{
				"escola" : "Centro Profissionalizante Rio Branco",
				"curso" : "Web Design",
				"imagemEscola" : "cepro.jpg",
				"imagem" : "web.png",
				"data" : "2002"
			},
			{
				"escola" : "Centro Profissionalizante Rio Branco",
				"curso" : "Pintura em quadros",
				"imagemEscola" : "cepro.jpg",
				"imagem" : "pincel.png",
				"data" : "2002"
			},
			{
				"escola" : "Centro Profissionalizante Rio Branco",
				"curso" : "Agentes Educadores",
				"imagemEscola" : "cepro.jpg",
				"imagem" : "monitoria.png",
				"data" : "2004"
			},
			{
				"escola" : "Centro Profissionalizante Rio Branco",
				"curso" : "Sistema de Informação",
				"imagemEscola" : "cepro.jpg",
				"imagem" : "sistemas.png",
				"data" : "2005"
			},
			{
				"escola" : "SEBRAE",
				"curso" : "Planejamento Financeiro",
				"imagemEscola" : "sebrae.jpg",
				"imagem" : "financeiro.jpg",
				"data" : "2005"
			},
			{
				"escola" : "SEBRAE",
				"curso" : "Aprender a empreender",
				"imagemEscola" : "sebrae.jpg",
				"imagem" : "financeiro.jpg",
				"data" : "2006"
			},
			{
				"escola" : "Kinoforum",
				"curso" : "Curso de cinema",
				"imagemEscola" : "kinoforum.jpg",
				"imagem" : "cinema.png",
				"data" : "2006"
			},
			{
				"escola" : "Impacta",
				"curso" : "Design de Websites",
				"imagemEscola" : "impacta.jpg",
				"imagem" : "web.png",
				"data" : "2007"
			},
			{
				"escola" : "USP - IME - Instituto de Matemática",
				"curso" : "Algorítmos em Java",
				"imagemEscola" : "imeusp.png",
				"imagem" : "java.png",
				"data" : "2007"
			},
			{
				"escola" : "FAAC - Faculdades Associadas de Cotia",
				"curso" : "Formação Pedagógica",
				"imagemEscola" : "faac.jpg",
				"imagem" : "chapeu.png",
				"data" : "2007"
			},
			{
				"escola" : "Memphis School / Bliss Campout",
				"curso" : "Acampamento de Imersão em Inglês",
				"imagemEscola" : "memphis.png",
				"imagem" : "usa.png",
				"data" : "2008"
			},
			{
				"escola" : "Memphis School / Bliss Campout",
				"curso" : "Acampamento de Imersão em Inglês",
				"imagemEscola" : "memphis.png",
				"imagem" : "usa.png",
				"data" : "2009"
			},
			{
				"escola" : "Memphis School / Bliss Campout",
				"curso" : "Acampamento de Imersão em Inglês",
				"imagemEscola" : "memphis.png",
				"imagem" : "usa.png",
				"data" : "2010"
			},
			{
				"escola" : "Memphis School",
				"curso" : "Curso de Inglês - Módulo 1",
				"imagemEscola" : "memphis.png",
				"imagem" : "usa.png",
				"data" : "2008"
			},
			{
				"escola" : "Memphis School",
				"curso" : "Curso de Inglês - Módulo 2",
				"imagemEscola" : "memphis.png",
				"imagem" : "usa.png",
				"data" : "2008"
			},
			{
				"escola" : "Memphis School",
				"curso" : "Curso de Inglês - Módulo 3",
				"imagemEscola" : "memphis.png",
				"imagem" : "usa.png",
				"data" : "2008"
			},
			{
				"escola" : "Senai - Cotia",
				"curso" : "Predreiro Revestidor Azulejista",
				"imagemEscola" : "senai.jpg",
				"imagem" : "pedreiro.jpg",
				"data" : "2010"
			},
			{
				"escola" : "Memphis School / Bliss Campout",
				"curso" : "Acampamento de Imersão em Inglês",
				"imagemEscola" : "memphis.png",
				"imagem" : "usa.png",
				"data" : "2011"
			},
			{
				"escola" : "Memphis School / Bliss Campout",
				"curso" : "Acampamento de Imersão em Inglês",
				"imagemEscola" : "memphis.png",
				"imagem" : "usa.png",
				"data" : "2012"
			},
			{
				"escola" : "Memphis School / Bliss Campout",
				"curso" : "Acampamento de Imersão em Inglês",
				"imagemEscola" : "memphis.png",
				"imagem" : "usa.png",
				"data" : "2013"
			},
			{
				"escola" : "Gracie Barra - Cotia",
				"curso" : "Jiu jitsu",
				"imagemEscola" : "gracie.png",
				"imagem" : "jiujitsu.jpg",
				"data" : "2013"
			},
			{
				"escola" : "CCB - Congregação Cristã no Brasil",
				"curso" : "Violino",
				"imagemEscola" : "ccb.png",
				"imagem" : "violino.jpg",
				"data" : "2013"
			},
			{
				"escola" : "FIAP",
				"curso" : "MBA - Arquitetura Java SOA",
				"imagemEscola" : "fiap.jpg",
				"imagem" : "arquiteto.png",
				"data" : "2014"
			},
			{
				"escola" : "ALURA - CAELUM",
				"curso" : "Email marketing: design do seu e-mail",
				"imagemEscola" : "alura.jpg",
				"imagem" : "alura-e-mail-marketing.jpg",
				"data" : "2015"
			},
			{
				"escola" : "ALURA - CAELUM",
				"curso" : "Segurança web em Java: Evitando SQL Injection, força bruta etc.",
				"imagemEscola" : "alura.jpg",
				"imagem" : "java.png",//seguranca-web-em-java-parte-1
				"data" : "2015"
			},
			{
				"escola" : "ALURA - CAELUM",
				"curso" : "Shell Scripting parte 1",
				"imagemEscola" : "alura.jpg",
				"imagem" : "shell.jpg", 
				"data" : "2015"
			},
			{
				"escola" : "ALURA - CAELUM",
				"curso" : "Integração Contínua: Maturidade e Produtividade no Desenvolvimento de Software",
				"imagemEscola" : "alura.jpg",
				"imagem" : "jenkins.png", 
				"data" : "2015"
			},
			{
				"escola" : "ALURA - CAELUM",
				"curso" : "JavaScript avançado I: ES6, orientação a objetos e padrões de projetos",
				"imagemEscola" : "alura.jpg",
				"imagem" : "javascript.jpg", 
				"data" : "2015"
			},
			{
				"escola" : "ALURA - CAELUM",
				"curso" : "Java e MongoDB: Integre uma webapp Java com um banco NoSQL",
				"imagemEscola" : "alura.jpg",
				"imagem" : "mongodb.png", 
				"data" : "2015"
			},
			{
				"escola" : "ALURA",
				"curso" : "Maven - build do zero a web",
				"imagemEscola" : "alura.jpg",
				"imagem" : "maven.jpg", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Certificacao Java - SE 7",
				"imagemEscola" : "alura.jpg",
				"imagem" : "java.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Java 8: Tire proveito dos novos recursos da linguagem",
				"imagemEscola" : "alura.jpg",
				"imagem" : "java.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Servlets: Fundamentos de Java na Web",
				"imagemEscola" : "alura.jpg",
				"imagem" : "java.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Git: Controle e compartilhe seu código",
				"imagemEscola" : "alura.jpg",
				"imagem" : "git.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Linux I: Conhecendo e utilizando o terminal",
				"imagemEscola" : "alura.jpg",
				"imagem" : "linux.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Angular 1: crie webapps poderosas",
				"imagemEscola" : "alura.jpg",
				"imagem" : "angular.jpg", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Angular 2: webapps ainda mais poderosas parte 1",
				"imagemEscola" : "alura.jpg",
				"imagem" : "angular.jpg", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Node.js: Inovando com Javascript no backend",
				"imagemEscola" : "alura.jpg",
				"imagem" : "node.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "MEAN Stack: criando aplicações completas com Javascript",
				"imagemEscola" : "alura.jpg",
				"imagem" : "mean.jpg", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "LESS: CSS simples e produtivo",
				"imagemEscola" : "alura.jpg",
				"imagem" : "less.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Grunt: Automação de tarefas front-end",
				"imagemEscola" : "alura.jpg",
				"imagem" : "grunt.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Gulp: automação de tarefas front-end",
				"imagemEscola" : "alura.jpg",
				"imagem" : "gulp.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Bootstrap: criação de uma single-page responsiva",
				"imagemEscola" : "alura.jpg",
				"imagem" : "bootstrap.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Meteor: Crie single page applications com JavaScript",
				"imagemEscola" : "alura.jpg",
				"imagem" : "meteor.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Inbound marketing: Email marketing da segmentação ao AB",
				"imagemEscola" : "alura.jpg",
				"imagem" : "mailchimp.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "jQuery: Domine a biblioteca mais popular do mercado",
				"imagemEscola" : "alura.jpg",
				"imagem" : "jquery.gif", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Laravel: facilitando o desenvolvimento PHP",
				"imagemEscola" : "alura.jpg",
				"imagem" : "laravel.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Laravel II: Mais técnicas e webapps poderosas",
				"imagemEscola" : "alura.jpg",
				"imagem" : "laravel.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Mongo DB",
				"imagemEscola" : "alura.jpg",
				"imagem" : "mongodb.png", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "MySQL I: Iniciando suas consultas",
				"imagemEscola" : "alura.jpg",
				"imagem" : "mysql.jpg", 
				"data" : "2016"
			},
			{
				"escola" : "ALURA",
				"curso" : "Selenium: Sua webapp testada de ponta a ponta em java",
				"imagemEscola" : "alura.jpg",
				"imagem" : "selenium.png", 
				"data" : "2016"
			},
			{
				"escola" : "PLURALSIGHT",
				"curso" : "React Fundamentals",
				"imagemEscola" : "pluralsight.png",
				"imagem" : "react.png", 
				"data" : "2017"
			},
			{
				"escola" : "IMPACTA",
				"curso" : "Desenvolvimento de aplicações Java Web com Spring MVC",
				"imagemEscola" : "impacta.jpg",
				"imagem" : "java.png", 
				"data" : "2017"
			},
			{
				"escola" : "AMAZON AWS",
				"curso" : "Profissional Técnico da AWS (Lançado em Abril 2017)",
				"imagemEscola" : "amazon.gif",
				"imagem" : "aws.png", 
				"data" : "12/2017"
			},
			{
				"escola" : "AMAZON AWS",
				"curso" : "AWS Technical Professional Online (Released November 2016)",
				"imagemEscola" : "amazon.gif",
				"imagem" : "aws.png", 
				"data" : "12/2017"
			},
			{
				"escola" : "ALURA - CAELUM",
				"curso" : "Docker: Criando containers sem dor de cabeça",
				"imagemEscola" : "alura.jpg",
				"imagem" : "docker.png", 
				"data" : "12/2017"
			},	

        ]
        

        var init = function(){
        	$timeout( function(){
				//$scope.cursosCarregados = true;
				aplicarSwipe();
            }, 2000 );
        }

        init();
    }
);