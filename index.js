function fraseAle(){

    var opciones = [
        "No hay que ir para atrás ni para darse impulso -Lao Tsé-",
        "No hay caminos para la paz; la paz es el camino -Mahatma Gandhi-",
        "Haz el amor y no la guerra -John Lennon-",
        "Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse -Charles Baudelaire-",
        "Lo peor que hacen los malos es obligarnos a dudar de los buenos -Jacinto Benavente-",
        "Las guerras seguirán mientras el color de la piel siga siendo más importante que el de los ojos -Bob Marley-",
        "Aprende a vivir y sabrás morir bien -Confucio-",
        "Cada día sabemos más y entendemos menos -Albert Einstein-",
        "El mundo no está en peligro por las malas personas sino por aquellas que permiten la maldad -Albert Einstein-",
        "En cuanto terminemos la implementació La medida del amor es amar sin medida -San Agustín-"
    ]

    var fraseSelec = opciones[Math.floor(Math.random() * opciones.length)];
    return fraseSelec;

}

console.log(fraseAle());


function colocaFrase() {
    document.getElementById("frase").innerHTML = fraseAle();
}
    colocaFrase();