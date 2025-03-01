// Função para criar um coração
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // Usando emoji de coração
    heart.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
    heart.style.animationDuration = Math.random() * 4 + 5 + 's'; // Duração da animação aleatória
    document.querySelector('.hearts-container').appendChild(heart);

    // Remove o coração após a animação terminar
    setTimeout(() => {
        heart.remove();
    }, 1000); // Ajuste o tempo conforme a duração da animação
}

// Cria corações em intervalos regulares
setInterval(createHeart, 300); // Intervalo de 300ms entre cada coração
let number= 4;
let stringNumber= String(number);
function nextphoto(){
    if(stringNumber!=1){
        document.querySelector('.foto'+ stringNumber).style.display='none';
        number = number-1;
        stringNumber= String(number);
        console.log(stringNumber);
        console.log(typeof stringNumber);
    }else if(stringNumber=1){
        for (stringNumber = 1;stringNumber < 5; stringNumber ++) {
            document.querySelector('.foto'+ stringNumber).style.display='block';
            console.log(stringNumber);
        }
        number=4;
        stringNumber=String(number);
    }
    
}