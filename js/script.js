const botao = document.querySelector('.botao')
var pontos = 0;
// irá contar caso acerte cada questao(qX)
var q1=1;
var q2=1;
var q3=1;
var q4=1;
var q5=1;
var q6=1;
var q7=1;

//apaga as barras de opção antes do jogo iniciar
document.querySelector('#op1').style.display="none";
document.querySelector('#op2').style.display="none";
document.querySelector('#op3').style.display="none";
document.querySelector('#op4').style.display="none";

//inicia jogo
botao.addEventListener('click', function(iniciar){
    //devolve as opçoes para tela
    document.getElementById('button').style.display = "none";
    document.querySelector('#op1').style.display="block";
    document.querySelector('#op2').style.display="block";
    document.querySelector('#op3').style.display="block";
    document.querySelector('#op4').style.display="block";
   
    //altera imagem
   alterarImagem('img','imagens/infinita.jpg');
    
   function alterarImagem(objeto, caminhoNovaImagem){
    document.getElementById(objeto).src = caminhoNovaImagem;
   }

   //preenche as opçoes
   document.querySelector('#op1').textContent = `Vingadores: Guerra Infinita`;
   document.querySelector('#op2').textContent = `Vingadores: A Era de Ultron`;
   document.querySelector('#op3').textContent = `Vingadores: Ultimato`;
   document.querySelector('#op4').textContent = `Liga da Justiça`;

   //se clicou na certa
  document.querySelector('#op1').addEventListener('click', function acerto(green){
      if(q1===1){
          pontos++;
          q1++;
      }
      console.log(q1);
        document.querySelector('#op1').style.background = 'green';
        setTimeout(() => {  fase2() }, 1000);
  })

  //tres para se clicou na errada
  document.querySelector('#op2').addEventListener('click', function erro(red,green){
      q1++;
    console.log(q1);
    document.querySelector('#op2').style.background = 'red';
      document.querySelector('#op1').style.background = 'green';
      setTimeout(() => {  fase2() }, 1000);
})

document.querySelector('#op3').addEventListener('click', function erro(red,green){
    q1++;
    console.log(q1);
    document.querySelector('#op3').style.background = 'red';
      document.querySelector('#op1').style.background = 'green';
      setTimeout(() => {  fase2() }, 1000);
})

document.querySelector('#op4').addEventListener('click', function erro(red,green){
    q1++;
    console.log(q1);
    document.querySelector('#op4').style.background = 'red';
      document.querySelector('#op1').style.background = 'green';
      setTimeout(() => {  fase2() }, 1000);
})

})

// MESMA COISA PARA TODAS AS FASES

function fase2(){
    document.querySelector('#op1').removeAttribute('style');
    document.querySelector('#op2').removeAttribute('style');
    document.querySelector('#op3').removeAttribute('style');
    document.querySelector('#op4').removeAttribute('style');
       
    
    alterarImagem('img','imagens/hp.jpeg');
  
    
   function alterarImagem(objeto, caminhoNovaImagem){
    document.getElementById(objeto).src = caminhoNovaImagem;
   }
   

   document.querySelector('#op1').textContent = `Percy Jackson: O ladrão de Raios`;
   document.querySelector('#op2').textContent = `Harry Potter e a Câmara Secreta`;
   document.querySelector('#op3').textContent = `Harry Potter e a Pedra filosofal`;
   document.querySelector('#op4').textContent = `Harry Potter e o Cálice de Fogo`;

  document.querySelector('#op3').addEventListener('click', function acerto(green,gray){
    if(q2===1){
        pontos++;
        q2++;
    }
      console.log(q2);
        document.querySelector('#op3').style.background = 'green';
        document.querySelector('#op1').style.background = 'gray';
         document.querySelector('#op4').style.background = 'gray';
         document.querySelector('#op2').style.background = 'gray';
        setTimeout(() => {  fase3() }, 1000);
})

document.querySelector('#op2').addEventListener('click', function erro(red,green,gray){
    q2++;
    console.log(q2);
    document.querySelector('#op2').style.background = 'red';
    document.querySelector('#op1').style.background = 'gray';
    document.querySelector('#op4').style.background = 'gray';
      document.querySelector('#op3').style.background = 'green';
      setTimeout(() => {  fase3() }, 1000);
})

document.querySelector('#op1').addEventListener('click', function erro(red,green,gray){
    q2++;
    console.log(q2);
    document.querySelector('#op1').style.background = 'red';
    document.querySelector('#op2').style.background = 'gray';
    document.querySelector('#op4').style.background = 'gray';
      document.querySelector('#op3').style.background = 'green';
      setTimeout(() => {  fase3() }, 1000);
})

document.querySelector('#op4').addEventListener('click', function erro(red,green,gray){
    q2++;
    console.log(q2);
    document.querySelector('#op4').style.background = 'red';
    document.querySelector('#op1').style.background = 'gray';
    document.querySelector('#op2').style.background = 'gray';
      document.querySelector('#op3').style.background = 'green';
      setTimeout(() => {  fase3() }, 1000);
})
}


function fase3(){
    document.querySelector('#op3').removeAttribute('style');
    document.querySelector('#op2').removeAttribute('style');
    document.querySelector('#op3').removeAttribute('style');
    document.querySelector('#op4').removeAttribute('style'); 
    
    alterarImagem('img','imagens/lenda.jpg');
  
    
   function alterarImagem(objeto, caminhoNovaImagem){
    document.getElementById(objeto).src = caminhoNovaImagem;
   }
   

   document.querySelector('#op1').textContent = `Hora do Pesadelo`;
   document.querySelector('#op2').textContent = `Eu sou a Lenda`;
   document.querySelector('#op3').textContent = `Resident Evil`;
   document.querySelector('#op4').textContent = `Independence Day`;

  document.querySelector('#op2').addEventListener('click', function acerto(green,gray){
    if(q3===1){
        pontos++;
        q3++;
    }
      console.log(q3);
        document.querySelector('#op2').style.background = 'green';
        document.querySelector('#op1').style.background = 'gray';
        document.querySelector('#op4').style.background = 'gray';
        document.querySelector('#op3').style.background = 'gray';
        setTimeout(() => {  fase4() }, 1000);
})

document.querySelector('#op1').addEventListener('click', function erro(red,green,gray){
    q3++;
    console.log(q3);
    document.querySelector('#op1').style.background = 'red';
    document.querySelector('#op3').style.background = 'gray';
    document.querySelector('#op4').style.background = 'gray';
      document.querySelector('#op2').style.background = 'green';
      setTimeout(() => {  fase4() }, 1000);
})

document.querySelector('#op3').addEventListener('click', function erro(red,green,gray){
    q3++;
    console.log(q3);
    document.querySelector('#op3').style.background = 'red';
    document.querySelector('#op1').style.background = 'gray';
    document.querySelector('#op4').style.background = 'gray';
      document.querySelector('#op2').style.background = 'green';
      setTimeout(() => {  fase4() }, 1000);
})

document.querySelector('#op4').addEventListener('click', function erro(red,green,gray){
    q3++;
    console.log(q3);
    document.querySelector('#op4').style.background = 'red';
    document.querySelector('#op1').style.background = 'gray';
    document.querySelector('#op3').style.background = 'gray';
      document.querySelector('#op2').style.background = 'green';
      setTimeout(() => {  fase4() }, 1000);
})
}


function fase4(){
    document.querySelector('#op2').removeAttribute('style');
    document.querySelector('#op2').removeAttribute('style');
    document.querySelector('#op3').removeAttribute('style');
    document.querySelector('#op4').removeAttribute('style'); 
    
    alterarImagem('img','imagens/kingod.jpg');
  
    
   function alterarImagem(objeto, caminhoNovaImagem){
    document.getElementById(objeto).src = caminhoNovaImagem;
   }
   

   document.querySelector('#op1').textContent = `King Kong: a Ilha da Caveira`;
   document.querySelector('#op2').textContent = `Jurassic Park`;
   document.querySelector('#op3').textContent = `Godzilla: Rei do Monstros`;
   document.querySelector('#op4').textContent = `Godzilla VS Kong`;

  document.querySelector('#op4').addEventListener('click', function acerto(green,gray){
    if(q4===1){
        pontos++;
        q4++;
    }
      console.log(q4);
        document.querySelector('#op4').style.background = 'green';
        document.querySelector('#op1').style.background = 'gray';
        document.querySelector('#op3').style.background = 'gray';
        document.querySelector('#op2').style.background = 'gray';
        setTimeout(() => {  fase5() }, 1000);
})

document.querySelector('#op2').addEventListener('click', function erro(red,green,gray){
    q4++;
    console.log(q4);
    document.querySelector('#op2').style.background = 'red';
    document.querySelector('#op1').style.background = 'gray';
    document.querySelector('#op3').style.background = 'gray';
      document.querySelector('#op4').style.background = 'green';
      setTimeout(() => {  fase5() }, 1000);
})

document.querySelector('#op3').addEventListener('click', function erro(red,green,gray){
    q4++;
    console.log(q4);
    document.querySelector('#op3').style.background = 'red';
    document.querySelector('#op1').style.background = 'gray';
    document.querySelector('#op2').style.background = 'gray';
      document.querySelector('#op4').style.background = 'green';
      setTimeout(() => {  fase5() }, 1000);
})

document.querySelector('#op1').addEventListener('click', function erro(red,green,gray){
    q4++;
    console.log(q4);
    document.querySelector('#op1').style.background = 'red';
    document.querySelector('#op2').style.background = 'gray';
    document.querySelector('#op3').style.background = 'gray';
      document.querySelector('#op4').style.background = 'green';
      setTimeout(() => {  fase5() }, 1000);
})
}

function fase5(){
    document.querySelector('#op4').removeAttribute('style');
    document.querySelector('#op2').removeAttribute('style');
    document.querySelector('#op3').removeAttribute('style');
    document.querySelector('#op4').removeAttribute('style'); 
    
    alterarImagem('img','imagens/sw.jpg');
  
    
   function alterarImagem(objeto, caminhoNovaImagem){
    document.getElementById(objeto).src = caminhoNovaImagem;
   }
   

   document.querySelector('#op1').textContent = `Star Wars: o Despertar da Força`;
   document.querySelector('#op2').textContent = `Star Wars: Episodio II`;
   document.querySelector('#op3').textContent = `Star Wars: Rogue one`;
   document.querySelector('#op4').textContent = `Star Trek`;

  document.querySelector('#op3').addEventListener('click', function acerto(green,gray){
    if(q5===1){
        pontos++;
        q5++;
    }
      console.log(q5);
        document.querySelector('#op3').style.background = 'green';
        document.querySelector('#op1').style.background = 'gray';
        document.querySelector('#op4').style.background = 'gray';
        document.querySelector('#op2').style.background = 'gray';
        setTimeout(() => {  fase6() }, 1000);
})

document.querySelector('#op2').addEventListener('click', function erro(red,green,gray){
    q5++;
    console.log(q5);
    document.querySelector('#op2').style.background = 'red';
    document.querySelector('#op1').style.background = 'gray';
    document.querySelector('#op4').style.background = 'gray';
      document.querySelector('#op3').style.background = 'green';
      setTimeout(() => {  fase6() }, 1000);
})

document.querySelector('#op1').addEventListener('click', function erro(red,green,gray){
    q5++;
    console.log(q5);
    document.querySelector('#op1').style.background = 'red';
    document.querySelector('#op2').style.background = 'gray';
    document.querySelector('#op4').style.background = 'gray';
      document.querySelector('#op3').style.background = 'green';
      setTimeout(() => {  fase6() }, 1000);
})

document.querySelector('#op4').addEventListener('click', function erro(red,green,gray){
    q5++;
    console.log(q5);
    document.querySelector('#op4').style.background = 'red';
    document.querySelector('#op1').style.background = 'gray';
    document.querySelector('#op2').style.background = 'gray';
      document.querySelector('#op3').style.background = 'green';
      setTimeout(() => {  fase6() }, 1000);
})
}


function fase6(){
    document.querySelector('#op3').removeAttribute('style');
    document.querySelector('#op2').removeAttribute('style');
    document.querySelector('#op3').removeAttribute('style');
    document.querySelector('#op4').removeAttribute('style'); 
    
    alterarImagem('img','imagens/cao.jpg');
  
    
   function alterarImagem(objeto, caminhoNovaImagem){
    document.getElementById(objeto).src = caminhoNovaImagem;
   }
   

   document.querySelector('#op1').textContent = `Sempre ao Seu Lado`;
   document.querySelector('#op2').textContent = `Quatro Vidas de Um Cachorro`;
   document.querySelector('#op3').textContent = `Marley e eu`;
   document.querySelector('#op4').textContent = `Resgate Abaixo de Zero`;

  document.querySelector('#op1').addEventListener('click', function acerto(green,gray){
    if(q6===1){
        pontos++;
        q6++;
    }
      console.log(q6);
        document.querySelector('#op1').style.background = 'green';
        document.querySelector('#op4').style.background = 'gray';
        document.querySelector('#op3').style.background = 'gray';
        document.querySelector('#op2').style.background = 'gray';
        setTimeout(() => {  fase7() }, 1000);
})

document.querySelector('#op2').addEventListener('click', function erro(red,green,gray){
    q6++;
    console.log(q6);
    document.querySelector('#op2').style.background = 'red';
    document.querySelector('#op3').style.background = 'gray';
    document.querySelector('#op4').style.background = 'gray';
      document.querySelector('#op1').style.background = 'green';
      setTimeout(() => {  fase7() }, 1000);
})

document.querySelector('#op3').addEventListener('click', function erro(red,green,gray){
    q6++;
    console.log(q6);
    document.querySelector('#op3').style.background = 'red';
    document.querySelector('#op2').style.background = 'gray';
    document.querySelector('#op4').style.background = 'gray';
      document.querySelector('#op1').style.background = 'green';
      setTimeout(() => {  fase7() }, 1000);
})

document.querySelector('#op4').addEventListener('click', function erro(red,green,gray){
    q6++;
    console.log(q6);
    document.querySelector('#op4').style.background = 'red';
    document.querySelector('#op2').style.background = 'gray';
    document.querySelector('#op3').style.background = 'gray';
      document.querySelector('#op1').style.background = 'green';
      setTimeout(() => {  fase7() }, 1000);
})
}


function fase7 (){
    document.querySelector('#op1').removeAttribute('style');
    document.querySelector('#op2').removeAttribute('style');
    document.querySelector('#op3').removeAttribute('style');
    document.querySelector('#op4').removeAttribute('style');
    
    alterarImagem('img','imagens/gg.jpg');
  
    
   function alterarImagem(objeto, caminhoNovaImagem){
    document.getElementById(objeto).src = caminhoNovaImagem;
   }
   

   document.querySelector('#op1').textContent = `Vingadores: Ultimato`;
   document.querySelector('#op2').textContent = `Guardiões da Galáxia`;
   document.querySelector('#op3').textContent = `Guardiões da Galáxia Vol. 2`;
   document.querySelector('#op4').textContent = `Thor: Ragnarok`;

  document.querySelector('#op3').addEventListener('click', function acerto(green,gray){
    if(q7===1){
        pontos++;
        q7++;
    }
      console.log(q7);
        document.querySelector('#op3').style.background = 'green';
        document.querySelector('#op1').style.background = 'gray';
        document.querySelector('#op4').style.background = 'gray';
        document.querySelector('#op2').style.background = 'gray';
        setTimeout(() => {  final() }, 1000);
})

document.querySelector('#op2').addEventListener('click', function erro(red,green,gray){
    q7++;
    console.log(q7);
    document.querySelector('#op2').style.background = 'red';
    document.querySelector('#op1').style.background = 'gray';
    document.querySelector('#op4').style.background = 'gray';
      document.querySelector('#op3').style.background = 'green';
      setTimeout(() => {  final() }, 1000);
})

document.querySelector('#op1').addEventListener('click', function erro(red,green,gray){
    q7++;
    console.log(q7);
    document.querySelector('#op1').style.background = 'red';
    document.querySelector('#op2').style.background = 'gray';
    document.querySelector('#op4').style.background = 'gray';
      document.querySelector('#op3').style.background = 'green';
      setTimeout(() => {  final() }, 1000);
})

document.querySelector('#op4').addEventListener('click', function erro(red,green){
    q7++;
    console.log(q7);
    document.querySelector('#op4').style.background = 'red';
    document.querySelector('#op2').style.background = 'gray';
    document.querySelector('#op1').style.background = 'gray';
      document.querySelector('#op3').style.background = 'green';
      setTimeout(() => {  final() }, 1000);
})
}


function final(){
    document.querySelector('#op1').style.display="none";
    document.querySelector('#op2').style.display="none";
    document.querySelector('#op3').style.display="none";
    document.querySelector('#op4').style.display="none";

    alterarImagem('img','imagens/oscar.jpg');
  
    
   function alterarImagem(objeto, caminhoNovaImagem){
    document.getElementById(objeto).src = caminhoNovaImagem;
   }

   

   document.querySelector('#text').textContent = `Você Acertou`;
   document.querySelector('#subtext').textContent = `${pontos} / 7`;


}



