window.addEventListener('load', function() {
    let individuos = [];
    let espera = 0;

    // -> Solicito datos desde el archivo .json
    fetch("https://raw.githubusercontent.com/Leonardo-JK/FaunaMendocina-LeonardoKoryl/main/data/animales.json")
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

            presentacion = "Bienvenido, a continuación te mostrare unas imagenes y tu tendras que responder a que animal corresponde.<br> ¿Estás listo?";
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

            document.getElementById("preguntas").style.flexDirection = "row";

            facil.innerHTML = "<strong>FACIL</strong> <br>(Multiple Choice <br>con 3 oportunidades)";
            facil.href = "#";
            facil.id = "facil";
            facil.onclick = () => {
                                    dificultadValor = "facil";
                                    comenzarJuego();
                                } ;
            document.getElementById("preguntas").appendChild(facil);

            medio.innerHTML = "<strong>MEDIO</strong> <br>(Multiple Choice <br>sin oportunidades)";
            medio.href = "#";
            medio.id = "medio";
            medio.onclick = () => {
                                    dificultadValor = "medio";
                                    comenzarJuego();
                                } ;
            document.getElementById("preguntas").appendChild(medio);

            dificil.innerHTML = "<strong>DIFICIL</strong> <br>(Respuesta escrita)";
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
        respCorr = 0;
        pregunta = 0;
        document.getElementById("preguntas").style.flexDirection = "row";
        document.getElementById("encabezado").removeChild(document.getElementById("encabezado").lastChild);
        document.getElementById("preguntas").removeChild(document.getElementById("preguntas").lastChild);
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
            case "medio":
                juegoFacil();
                break;
            case "dificil":
                juegoDificil();
                break;
        }
    }

    function juegoFacil(){
        limpiar("divImagen");
        limpiar("divRespuestas");

        console.log(pregunta);

        if(pregunta === 3){
            resultado = respCorr / pregunta * 100;
            let final = document.createElement("p");
            final.innerHTML = "Fin del jugo. <br> Has respondido correctamente el " + resultado + " % de las imagenes.";
            limpiar("preguntas");
            document.getElementById("preguntas").appendChild(final);
        } else {
            let id = Math.floor(Math.random() * (individuos.length)) + 1;   // -> Genera un numero random para determinar el animal. <-
            let img = Math.floor(Math.random() * (individuos[(id-1)].imagenes[0])); // -> Genera un numero random para genera una imagen del animal. <-

            animal = animalAleatorio(id);

            let imagen = document.createElement("img");
            imagen.src = "../img/" + animal.imagenes[1] + img + ".jpg";

            document.getElementById("divImagen").appendChild(imagen);

            let opciones = document.createElement("ul");
            opciones.id = "opciones";
            opciones.style.listStyle = "none";
            document.getElementById("divRespuestas").appendChild(opciones);
            
            let opcionCorrecta = Math.floor(Math.random() * 5);

            for(let i = 0; i < 5; i++){
                id = Math.floor(Math.random() * (individuos.length)) + 1;
                let opcionIncorrecta = animalAleatorio(id);

                let opcion = document.createElement("li");
                opcion.id = "opcion" + i;
                document.getElementById("opciones").appendChild(opcion);
                input = document.createElement("input");
                input.type = "radio";
                input.name = "opcion";
                
                let label = document.createElement("label");
                
                if(opcionIncorrecta === animal){
                    i--;
                    continue;
                }

                if(i === opcionCorrecta){
                    input.id = animal.nombre;
                    input.value = animal.nombre;
                    label.setAttribute("for", animal.nombre);
                    label.innerHTML = animal.nombre;
                } else {
                    input.id = opcionIncorrecta.nombre;
                    input.value = opcionIncorrecta.nombre;
                    label.setAttribute("for", opcionIncorrecta.nombre);
                    label.innerHTML = opcionIncorrecta.nombre;
                }

                console.log(input.id);
                document.getElementById("opcion" + i).appendChild(input);
                document.getElementById("opcion" + i).appendChild(label);
            }

            send.type = "button";
            send.value = "Responder";
            send.id = "send2";
            document.getElementById("divRespuestas").appendChild(send);
            document.getElementById("send2").onclick = verificar;
        }
    }
    
    function verificar() {
        respuesta = document.querySelector('input[name="opcion"]:checked').value;
        
        if(dificultadValor === "facil" && cont <= 2){
            cont++;
            color(respuesta);
        } else if(dificultadValor === "medio" || cont === 3){
            color(respuesta);
            cont = 1;
            disable();
            send.id = "next";
            send.value = "Siguiente";
            pregunta++;
            document.getElementById("next").onclick = juegoFacil;
        } 

        function color(r){
            if(r === animal.nombre){
                document.querySelector('label[for="' + document.querySelector('input[name="opcion"]:checked').id + '"]').style.color = "#27ad27";
                document.querySelector('label[for="' + document.querySelector('input[name="opcion"]:checked').id + '"]').style.fontWeight = "Bolder";
                disable();
                send.id = "next";
                send.value = "Siguiente";
                cont = 1;
                respCorr++;
                if(dificultadValor === "facil"){
                    pregunta++;
                }
                document.getElementById("next").onclick = juegoFacil;
            } else {
                document.querySelector('label[for="' + document.querySelector('input[name="opcion"]:checked').id + '"]').style.color = "red";
                document.querySelector('label[for="' + document.querySelector('input[name="opcion"]:checked').id + '"]').style.fontWeight = "Bolder";
                document.querySelector('input[name="opcion"]:checked').disabled = true;
            }
        }

        function disable(){
            for(let j = 0; j < 5; j++){
                document.getElementsByName("opcion")[j].disabled = true;
            }
        }
    }
    
    // -> Extrae un animal del objeto en funcion del id ingresado
    function animalAleatorio(idnum){
        return individuos.find(individuo => individuo.id === idnum);
    }
    // <-

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
    let input;
    let numero;
    let cont = 1;
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
    let medio = document.createElement("a");
    let dificil = this.document.createElement("a");
    let queAnimalEs = document.getElementById("queAnimalEs");
    //

    // -> Eventos que determinan lanzan los juegos.
    queAnimalEs.onclick = cargaQueAnimalEs;
    // <- 



}, false);