window.addEventListener('load', function() {
    
    // -> Restablece la pantalla y carga la presentacion del juego y la estrutura principla del mismo.
    function cargarCuantoSabes(){
        // -> Limpía la pantalla.
        limpiar("encabezado");
        limpiar("preguntas");
        limpiar("respuestas");
        limpiar("contenido");
        // <- 

        //-> Genera el encabezado del juego.
        let titulo = document.createElement("h2");
        titulo.innerHTML = "¿Cuánto Sabes?<br><br>";
        document.getElementById("encabezado").appendChild(titulo);

        let presentacion = "Bienvenido, a continuación te hare unas preguntas para ver cuánto has aprendido sobre nuestra fauna local. ¿Estás listo?";
        cantPreguntas = "¿Cuántas preguntas deseas responder?";

        let descripcion1 = document.createElement("p");
        descripcion1.id = "descripcion1";
        descripcion1.innerHTML = presentacion + "<br><br>";
        document.getElementById("encabezado").appendChild(descripcion1);

        let descripcion2 = document.createElement("p");
        descripcion2.id = "descripcion2";
        descripcion2.innerHTML = cantPreguntas;
        document.getElementById("encabezado").appendChild(descripcion2);
        // <- 

        // -> Genera la seccion interactiva.
        preguntas = document.createElement("p");
        preguntas.innerHTML = "";
        document.getElementById("preguntas").appendChild(preguntas);
        
        resp.setAttribute("id", "resp");
        document.getElementById("preguntas").appendChild(resp);
            
        send.innerText = "enviar";
        send.type = "submit";
        send.id = "send";
        send.onclick = comenzarJuego;
        document.getElementById("preguntas").appendChild(send);
        // <-

        // -> Genera la lista que presentara los resultados.
        resultados = document.createElement("ul");
        resultados.innerHTML = "Resultados";
        resultados.setAttribute("id", "resultadosLista");
        document.getElementById("respuestas").appendChild(resultados);    
        // <-
    }

    // -> Funcion para limpiar elementos.
    function limpiar(id){
        let contenedor = document.getElementById(id);

        while(contenedor.hasChildNodes()){
            contenedor.removeChild(contenedor.firstChild);
        }
    }
    // <-

    // -> Evalua que se ingrese un numero valido de preguntas para poder comenzar el juego.
    function comenzarJuego(){
        numero = parseInt(document.getElementById("resp").value);
        if(isNaN(numero) || numero <= 0 || numero === ""){
            alert("Ingreso un numero valido.");
            cargarCuantoSabes();
        } else {
            cont = 1;
            respCorr = 0;
            send.onclick = next;
            generarPregunta();
        }
    }
    // <-

    // -> Agrega la pregunta a responder, la respuesta del usuario y las respuestas correctas en la lista de resultados
    //    marcando en rojo las respuestas incorrectas y en verdes las correctas.  
    function next(){
        respuesta = document.getElementById("resp").value;

        itemResultado = document.createElement("ul");
        itemResultado.id = "itemResultado" + cont;
        itemResultado.className = "resuladoPreguntas";
        itemResultado.innerHTML = preg;
        document.getElementById("resultadosLista").appendChild(itemResultado);

        resultado = document.createElement("li");
        resultado.className = "resultado" + cont;
        resultado.innerHTML = "Tu respuesta fue: " + respuesta;
            
        if(analizarRespuesta(respuesta, caracteristica, correcto)){
            resultado.style.color = "#27ad27";
            resultado.style.fontWeight = "Bolder";
            respCorr++;
        } else {
            resultado.style.color = "red";
            resultado.style.fontWeight = "Bolder";
        }

        document.getElementById("itemResultado" + cont).appendChild(resultado);
        resultado = document.createElement("li");
        let solucion;
        for(const valor of correcto){
            solucion += valor + " ";
        }
        resultado.innerHTML = "Las respuestas posibles son: " + correcto;
        document.getElementById("itemResultado" + cont).appendChild(resultado);
        
        document.getElementById("resp").value = "";

        if(cont <= numero){
            generarPregunta();
        } else {
            preguntas.innerHTML = "Cuestionario finalizado.<br>Has respondido correctamente el " + (respCorr * 100 / numero) + "% de las preguntas.";
            document.getElementById("preguntas").removeChild(document.getElementById("preguntas").lastChild);
            document.getElementById("preguntas").removeChild(document.getElementById("preguntas").lastChild);
        }
    }
    // <-

    // -> Genera una nueva pregunta aleatoria.
    function generarPregunta(){
        cantPreguntas = "Pregunta " + cont + " de " + numero + ".";
        descripcion2.innerHTML = cantPreguntas;
        document.getElementById("resp").value = "";

        let id = Math.floor(Math.random() * (individuos.animales.length)) + 1; // Genera un numero aleatorio con el cual determina un animal.
        let numPreg = Math.floor(Math.random() * 5) + 1;  // Genera un numero aleatorio para determinar el tipo de pregunta.
        
        animal = articulo(animalAleatorio(id));

        // -> Genera la estructura de la pregunta y su repuesta correcta
        switch (numPreg) {
            case 1:
                pregunta = "De que se alimenta ";
                caracteristica = "alimento";
                correcto = animalAleatorio(id).alimentacion;
                break;
                
            case 2:
                pregunta = "Donde habita ";
                caracteristica = "habitat";
                correcto = animalAleatorio(id).habitat;
                break;

            case 3:
                pregunta = "Cuanto puede medir (en metros) ";
                caracteristica = "tamanno";
                correcto = animalAleatorio(id).tamanno;
                break;

            case 4:
                pregunta = "Cuanto puede pesar (en kilogramos) ";
                caracteristica = "peso";
                correcto = animalAleatorio(id).peso;
                break;

            case 5:
                pregunta = "A que familia pertenece ";
                caracteristica = "familia";
                correcto = animalAleatorio(id).familia;
                break;
        }
        // <- 
        preg = cont + ")- " + pregunta + animal + "?"
        preguntas.innerHTML = preg;
        
        cont++;
    }
    // <-

    // -> Extrae un animal del objeto en funcion del id ingresado
    function animalAleatorio(idnum){
        return individuos.animales.find(individuo => individuo.id === idnum);
    }
    // <-

    // -> En funcion del animal ingresado, determino el articulo correspondiente para que la pregunta sea legible
    function articulo(ani){
        if(ani.esMasculino){
            return "el " + ani.nombre;
        } else {
            return "la " + ani.nombre;
        }
    }
    // <-

    // -> Determina si una respuesta es correecta cuando hay muchas opciones para dicha condicion
    function respuestaString(res, cor){
        correcto = "";
        for(const valor of cor){
            if(res === valor){
                for(const item of cor){
                    correcto += item + " - ";
                }
                return true;
            }  
        }

        for(const valor of cor){
            correcto += valor + " - ";
        } 
    }
    // <-

    // -> Determina si una respuesta es correecta cuando esta se encuentra en un rango de valores
    function respuestaNumber(res, cor){
        res = res.toLowerCase();
        if(parseFloat(res) >= cor[0] && parseFloat(res) <= cor[1]){
            correcto = "valores entre " + cor[0] + " y " + cor[1] + ".";
            return true;
        } else {
            correcto = "valores entre " + cor[0] + " y " + cor[1] + ".";
        }
    }
    // <-

    // -> Analiza la respuesta ingresada segun el tipo de solucion que tenga dicha pregunta
    function analizarRespuesta(res, car, cor){
        if(res == ""){
            return 0;
        }
        switch(car){
            case "alimento":
                return respuestaString(res, cor);
            case "habitat":
                return respuestaString(res, cor);
            case "tamanno":
                return respuestaNumber(res, cor);
            case "peso":
                return respuestaNumber(res, cor);
            case "familia":
                res = res.toLowerCase();
                if(res == cor){
                    return true;
                }
            }
    }
    // <- 

    function cargaQueAnimalEs(){
        // -> Limpía la pantalla.
        limpiar("encabezado");
        limpiar("preguntas");
        limpiar("respuestas");
        limpiar("contenido");
        // <- 
    }

    // -> Decalaracion de variables globales.
    let itemResultado;
    let resultados;
    let resultado;
    let preg
    let cantPreguntas;
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
    let cuantoSabes = document.getElementById("cuantoSabes");
    let queAnimalEs = document.getElementById("queAnimalEs");
    // <-

    // -> Eventos que determinan lanzan los juegos.
    cuantoSabes.onclick = cargarCuantoSabes;
    // <-    
}, false);