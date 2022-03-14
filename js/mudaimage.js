const music = new Audio('msc/chupadinha.mp3');
const music2 = new Audio('msc/chupada.mp3') 
const music3 = new Audio('msc/sumidao.mp3')
var cont = 0
var img = document.querySelector("#image");
const mudaimage = () => {
    if (cont == 0){
        img.setAttribute('src', 'img/sumidaoreverso.gif');
        music2.play();
        cont += 1
    }
    else if (cont==1){
        img.setAttribute('src', 'img/chupada1.gif');
        music.play();
        cont += 1
   } 
   else {
     img.setAttribute('src', 'img/tobi-or-mardara-naruto.gif');
     music3.play();
     cont -= 2
    
   }
}


