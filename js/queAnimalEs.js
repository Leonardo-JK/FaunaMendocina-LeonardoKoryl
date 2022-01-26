window.addEventListener('load', function() {
    let individuos = [];
    let espera = 0;

    // -> Solicito datos desde el archivo .json
    fetch("https://raw.githubusercontent.com/Leonardo-JK/CursoJS/main/faunaMendocina/data/animales.json")
        .then(response => response.json())
        .then(data => individuos = data)
    // <-

    // -> Genera un loop de espera de respuesta de datos, que se mantiene mientras no se realice ninguna accion
    //      si el array individuos sigue vacio despues de 500 ms se vuelve a ejucutar y comienza un contador,
    //      pasado 20 s, envia un msj de error por alert y comienza nuevamente el loop de espera por otros 
    //      20 s. Al ejecutar la espera de esta forma evita que el hilo se bloquee como pasa con el metodo await, 
    //      permitiendo el funcionamiento normal de la pagina.       
    function loopEspera(){
        if(individuos.length === 0){
            espera++;
            setTimeout(function() {
                if(espera >= 20){
                    espera = 0;
                    error();
                }else {
                    loopEspera();
                }                
            }, 500);
        }
    }

    function error(){
        alert("Hubo un error al cargar los datos o el tiempo de respuesta de la base de datos fue mayor a la esperada. Por recarga la pagina o espera un poco mas.");
        loopEspera();
    }
    
    loopEspera();
    // <-

    function cargaQueAnimalEs(){
        // -> Limpía la pantalla.
        limpiar("encabezado");
        limpiar("preguntas");
        limpiar("respuestas");
        limpiar("contenido");
        // <- 

        if(individuos.length === 0){    // -> Si el usuario inicia el juego y los datos no se han cargado, 
            error();                    //      envia el mensaje e inicia el loop de espera. <-
        } else {
            //-> Genera el encabezado del juego.
            titulo = document.createElement("h2");
            titulo.innerHTML = "¿Que animal es?<br><br>";
            document.getElementById("encabezado").appendChild(titulo);

            presentacion = "Bienvenido, a continuación te mostrare unas imagenes y tu tendras que responder a que animal corresponde ¿Estás listo?";
            dificultad = "¿Elige la dificultad?";

            let descripcion1 = document.createElement("p");
            descripcion1.id = "descripcion1";
            descripcion1.innerHTML = presentacion + "<br><br>";
            document.getElementById("encabezado").appendChild(descripcion1);

            let descripcion2 = document.createElement("p");
            descripcion2.id = "descripcion2";
            descripcion2.innerHTML = dificultad;
            document.getElementById("encabezado").appendChild(descripcion2);
            // <- 

            facil.innerHTML = "<strong>FACIL</strong> (Multiple Choice)";
            facil.href = "#";
            facil.id = "facil";
            facil.onclick = () => {
                                    dificultadValor = "facil";
                                    comenzarJuego();
                                } ;
            document.getElementById("preguntas").appendChild(facil);

            dificil.innerHTML = "<strong>DIFICIL</strong> (Respuesta escrita)";
            dificil.href = "#";
            dificil.id = "dificil";
            dificil.onclick = () => {
                                    dificultadValor = "facil";
                                    comenzarJuego();
                                } ;
            document.getElementById("preguntas").appendChild(dificil);


        }
    }

    function comenzarJuego(){
        document.getElementById("preguntas").style.flexDirection = "row";
        document.getElementById("preguntas").removeChild(document.getElementById("preguntas").lastChild);
        document.getElementById("preguntas").removeChild(document.getElementById("preguntas").lastChild);

        divImagen = document.createElement("div");
        divImagen.id = "divImagen";
        document.getElementById("preguntas").appendChild(divImagen);

        divRespuestas = document.createElement("div");
        divRespuestas.id = "divRespuestas";
        document.getElementById("preguntas").appendChild(divRespuestas);

        switch(dificultadValor){
            case "facil":
                juegoFacil();
                break;
            case "dificil":
                juegoDificil();
                break;
        }
    }

    function juegoFacil(){
        let id = Math.floor(Math.random() * (individuos.length)) + 1;
        let img = Math.floor(Math.random() * (individuos[(id-1)].imagenes[0]));

        let imagen = document.createElement("img");
        imagen.src = "";
    }

    // -> Funcion para limpiar elementos.
    function limpiar(id){
        let contenedor = document.getElementById(id);

        while(contenedor.hasChildNodes()){
            contenedor.removeChild(contenedor.firstChild);
        }
    }
    // <-

    // -> Decalaracion de variables globales.
    let itemResultado;
    let resultados;
    let resultado;
    let preg;
    let titulo;
    let presentacion;
    let dificultad;
    let dificultadValor = "";
    let divImagen;
    let divRespuestas;
    let numero;
    let cont;
    let pregunta;
    let caracteristica;
    let correcto;
    let respuesta;
    let animal;
    let preguntas;
    let respCorr;
    let resp = document.createElement("input");
    let send = document.createElement("input");
    let facil = document.createElement("a");
    let dificil = this.document.createElement("a");
    let queAnimalEs = document.getElementById("queAnimalEs");
    //

    // -> Eventos que determinan lanzan los juegos.
    queAnimalEs.onclick = cargaQueAnimalEs;
    // <- 



}, false);