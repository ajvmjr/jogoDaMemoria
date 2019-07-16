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

let imagensSalvas = ["draven.png", "jhin.png", "kaisa.png", "lucian.png", "sivir.png", "tristana.png", "varus.png", "vayne.png"];

let imagens = imagensSalvas.concat(imagensSalvas);

imagens = embaralhar(imagens);

for(let i = 0; i < cartas.length; i++){
    cartas[i].style.backgroundImage = `url("images/${imagens[i]}")`;
}

setTimeout(function(){
    for(let carta of cartas){
        carta.style.backgroundImage = 'url("images/logo.png")';
    }
}, 3000);





