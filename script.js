function embaralhar(lista){
    let valorTemporario;
    let indiceAleatorio;
    
    for(let i = lista.length - 1; i !== 0; i--){
        indiceAleatorio = Math.floor(Math.random() * i);
        
        valorTemporario = lista[i];
        lista[i] = lista[indiceAleatorio];
        lista[indiceAleatorio] = valorTemporario;
    }
    
    return lista;
}

let cartas = document.querySelectorAll(".carta");

let cartaVirada = null;

let imagensSalvas = ["draven.png", "jhin.png", "kaisa.png", "lucian.png", "sivir.png", "tristana.png", "varus.png", "vayne.png"];

let imagens = imagensSalvas.concat(imagensSalvas);

imagens = embaralhar(imagens);

for(let i = 0; i < cartas.length; i++){
    cartas[i].style.backgroundImage = `url("images/${imagens[i]}")`;
}

setTimeout(function(){
    for(let carta of cartas){
        carta.style.backgroundImage = 'url("images/questionmark.png")';
        carta.onclick = function(){
            carta.style.backgroundImage = `url("images/${imagens[Number(carta.id)]}")`;
            if (cartaVirada && cartaVirada.id !== carta.id){
                setTimeout(function(){
                    if(cartaVirada.style.backgroundImage === carta.style.backgroundImage){
                        cartaVirada.onclick = null;
                        carta.onclick = null;
                    }
                    else{
                        carta.style.backgroundImage = 'url("images/questionmark.png")';
                        cartaVirada.style.backgroundImage = 'url("images/questionmark.png")';
                    }
                    cartaVirada = null;
                }, 1500)
            }
            else{
                cartaVirada = carta;
            }
        }
    }
}, 3000);





