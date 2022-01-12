const fauna = {
    
    animales: [
        {
            id: 1,
            nombre: "grison menor",
            familia: "mamifero" ,
            peso: [1.2, 2.4],
            tamanno: [0.4, 0.75],
            alimentacion: ["omnivoro", "animales pequeños", "fruta"],
            habitat: ["pastizales", "bosques", "matorrales", "prados"],
            masculino: true
        },
        {
            id: 2,
            nombre: "guanaco",
            familia: "mamifero",
            peso: [100, 140],
            tamanno: [1.8, 1.9],
            alimentacion: ["hierbas", "musgos", "tuberculos", "herbivoro"],
            habitat: ["matorrales", "montaña", "pendientes"],
            masculino: true
        },
        {
            id: 3,
            nombre: "puma",
            familia: "mamifero",
            peso: [60, 100],
            tamanno: [2, 2.7],
            alimentacion: ["insectos grandes", "animales pequeños", "reptiles", "animales grandes", "carnivoro"],
            habitat: ["desierto", "montaña", "bosques", "llanuras"],
            masculino: true
        },
        {
            id: 4,
            nombre: "zorrillo",
            familia: "mamifero",
            peso: [0.150, 0.320],
            tamanno: [0.180, 0.240],
            alimentacion: ["omnivoro", "insectos", "huevos", "aves", "pequeños mamiferos", "frutas", "semillas"],
            habitat: ["selva", "cuerpos de agua", "llanuras"],
            masculino: true
        },
        {
            id: 5,
            nombre: "zorro culpeo",
            familia: "mamifero",
            peso: [7, 14],
            tamanno: [0.9, 1.6],
            alimentacion: ["roedores", "liebres", "aves", "lagartos", "plantas", "carroña", "carnivoro"],
            habitat: ["montaña", "praderas", "desiertos", "bosques"],
            masculino: true
        },
        {
            id: 6,
            nombre: "condor",
            familia: "aves",
            peso: [8, 15],
            tamanno: [1, 3.3],
            alimentacion: ["carroña", "animales enfermos", "animales desvalidos"],
            habitat: ["montaña", "sierra"],
            masculino: true,
        },
        {
            id: 7,
            nombre: "gorrion",
            familia: "aves",
            peso: [0.0134, 0.042],
            tamanno: [0.114, 0.18],
            alimentacion: ["semilas", "insectos"],
            habitat: ["ciudades", "llanura"],
            masculino: true,
        },
        {
            id: 8,
            nombre: "halcon peregrino",
            familia: "aves",
            peso: [0.440, 1.5],
            tamanno: [0.34, 1.2],
            alimentacion: ["aves", "pequeños mamiferos"],
            habitat: ["selva", "montaña", "llanura", "sierra", "tundra"],
            masculino: true,
        },
        {
            id: 9,
            nombre: "paloma",
            familia: "aves",
            peso: [0.030, 2],
            tamanno: [0.15, 0.75],
            alimentacion: ["semillas", "fruta"],
            habitat: ["todo el territorio"],
            masculino: false,
        },
        {
            id: 10,
            nombre: "tijereta",
            familia: "aves",
            peso: [0.031, 0.035],
            tamanno: [0.25, 0.42],
            alimentacion: ["insectos", "fruta"],
            habitat: ["area rural", "arboladas", "bosques", "parques", "jardines"],
            masculino: false,
        },
        {
            id: 11,
            nombre: "cascabel austral",
            familia: "reptiles",
            peso: [3, 5],
            tamanno: [1.4, 1.5],
            alimentacion: ["canivora", "lagartos", "roedores"],
            habitat: ["bosques", "selvas", "matorrales"],
            masculino: false,
        },
        {
            id: 12,
            nombre: "coral argentina",
            familia: "reptiles",
            peso: [0.19, 0.22],
            tamanno: [1.1, 1.3],
            alimentacion: ["serpientes", "lagartos", "cecilias", "culebrillas ciegas", "peces", "anguilas", "canibales"],
            habitat: ["monte", "semiaridos", "bosques secos", "pastizales", "sabanas", "humedales", "pedregales serranos"],
            masculino: false,
        },
        {
            id: 13,
            nombre: "gecko salamanca",
            familia: "reptiles",
            peso: [0.015, 0.05],
            tamanno: [0.06, 0.140],
            alimentacion: ["insectos"],
            habitat: ["subtropical", "arbustos", "desiertos", "arboleadas"],
            masculino: true,
        },
        {
            id: 14,
            nombre: "tortuga pintada",
            familia: "reptiles",
            peso: [0.2, 2.7],
            tamanno: [0.15, 0.215],
            alimentacion: ["animales pequeños", "plantas"],
            habitat: ["cienagas", "agua dulce"],
            masculino: false,
        },
        {
            id: 15,
            nombre: "tortuga terrestre argentina",
            familia: "reptiles",
            peso: [2, 2.7],
            tamanno: [0.25, 0.35],
            alimentacion: ["tallos", "frutos", "gramineas", "herbaceas", "vainas", "hojas", "pastos", "frutas", "verduras", "tuberculos", "invertebrados", "caracoles", "babosas", "lombrices"],
            habitat: ["llanuras secas", "semidesiertos", "chaco seco", "espinal"],
            masculino: false,
        },
        {
            id: 16,
            nombre: "camoti",
            familia: "insectos",
            peso: [0.0038, 0.0671],
            tamanno: [0.0036, 0.0047],
            alimentacion: ["nectar", "insectos", "hidratos de carbono"],
            habitat: ["arboladas", "ciudad", "riscos"],
            masculino: true,
        },
        {
            id: 17,
            nombre: "hormiga roja argentina",
            familia: "insecto",
            peso: [0.0005, 0.0015],
            tamanno: [0.0015, 0.005],
            alimentacion: ["insectos", "carroña", "secreciones", "pequños animales"],
            habitat: ["todo el territorio"],
            masculino: false,
        },
        {
            id: 18,
            nombre: "mosca domestica",
            familia: "insecto",
            peso: [0.0025, 0.0035],
            tamanno: [0.005, 0.015],
            alimentacion: [""],
            habitat: ["omnivora", "grasas", "proteinas", "azucares"],
            masculino: false,
        },
        {
            id: 19,
            nombre: "mosquito comun",
            familia: "insectos",
            peso: [0.0005, 0.0015],
            tamanno: [0.004, 0.010],
            alimentacion: ["nectar", "sangre", "plantas", "polen", "jugo de frutas"],
            habitat: ["agua estancada"],
            masculino: true,
        },
        {
            id: 20,
            nombre: "vinchuca",
            familia: "insecto",
            peso: [0.003, 0.007],
            tamanno: [0.02, 0.03],
            alimentacion: ["sangre"],
            habitat: ["cercania a animales"],
            masculino: false,
        },
        {
            id: 21,
            nombre: "carpa",
            familia: "peces",
            peso: [7, 10],
            tamanno: [0.6, 1.2],
            alimentacion: ["omnivora", "plantas", "insectos", "crustaceos", "zooplancton"],
            habitat: ["agua estancada", "agua lenta", "aguas templadas"],
            masculino: false,
        },
        {
            id: 22,
            nombre: "dientudo",
            familia: "peces",
            peso: [0.3, 0.35],
            tamanno: [0.25, 0.35],
            alimentacion: ["peces", "macrocrustaceos", "insectos"],
            habitat: ["agua dulce"],
            masculino: true,
        },
        {
            id: 23,
            nombre: "morenita",
            familia: "peces",
            peso: [0.01, 0.02],
            tamanno: [0.015, 0.07],
            alimentacion: ["insectos", "crustaceos", "anfipodos", "quironomidos", "efemeropteros", "ostracodos", "algas"],
            habitat: ["agua dulce", "agua salobre", "climas templados", "climas calidos"],
            masculino: false,
        },
        {
            id: 24,
            nombre: "pejerrey",
            familia: "peces",
            peso: [0.5, 3],
            tamanno: [0.4, 0.6],
            alimentacion: ["peces", "algas", "plantas acuaticas"],
            habitat: ["agua dulce", "agua salobre", "rios", "lagunas", "estuarios"],
            masculino: true,
        },
        {
            id: 25,
            nombre: "trucha arcoiris",
            familia: "peces",
            peso: [8, 15],
            tamanno: [0.5, 1.2],
            alimentacion: ["omnivoros", "invertebrados", "peces", "zooplancton"],
            habitat: ["aguas subtropicales", "pelagico", "mar"],
            masculino: false,
        }
    ]
};

function cargarCuantoSabes(){
    limpiar("encabezado");
    limpiar("preguntas");
    limpiar("respuestas");
    limpiar("contenido");

    let titulo = document.createElement("h2");
    titulo.innerHTML = "¿Cuanto Sabes?<br><br>";
    document.getElementById("encabezado").appendChild(titulo);

    let presentacion = "Bienvenido, a continuacion te hare unas preguntas para ver cuanto has aprendido sobre nuestra fauna local. ¿Estas listo?";
    cantPreguntas = "¿Cuantas pregunta deseas responder?";

    let descripcion1 = document.createElement("p");
    descripcion1.id = "descripcion1";
    descripcion1.innerHTML = presentacion + "<br><br>";
    document.getElementById("encabezado").appendChild(descripcion1);

    let descripcion2 = document.createElement("p");
    descripcion2.id = "descripcion2";
    descripcion2.innerHTML = cantPreguntas;
    document.getElementById("encabezado").appendChild(descripcion2);

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

    let resultados = document.createElement("ul");
    resultados.innerHTML = "Resultados";
    resultados.setAttribute("id", "resultadosLista");
    document.getElementById("respuestas").appendChild(resultados);

    let resultado = document.createElement("p");
    resultado.innerHTML = "";
    resultado.setAttribute("id", "resultado");
    
}

function limpiar(id){
    let contenedor = document.getElementById(id);

    while(contenedor.hasChildNodes()){
        contenedor.removeChild(contenedor.firstChild);
    }
}

function comenzarJuego(){
    numero = document.getElementById("resp").value;
    cont = 1;

    send.onclick = next;
    generarPregunta();

}

function next(){
    respuesta = document.getElementById("resp").value;

    if(analizarRespuesta(respuesta, caracteristica, correcto)){
        document.getElementById("resultado").innerHTML = respuesta;
        document.getElementById("resultadosLista").appendChild(document.getElementById("resultado"));
    } else {
        alert("Respuesta Incorrecta!");
    }
    document.getElementById("resp").value = "";

    if(cont <= numero){
        generarPregunta();
        console.log(correcto);
    } else {
        preguntas.innerHTML = "Cuestionario finalizado.";
        document.getElementById("preguntas").removeChild(document.getElementById("preguntas").lastChild);
        document.getElementById("preguntas").removeChild(document.getElementById("preguntas").lastChild);
    }
}

function generarPregunta(){
    cantPreguntas = "Pregunta " + cont + " de " + numero + ".";
    descripcion2.innerHTML = cantPreguntas;
    document.getElementById("resp").value = "";

    let id = Math.floor(Math.random() * (fauna.animales.length)) + 1; // Genera un numero aleatorio con el cual determina un animal.
    let preg = Math.floor(Math.random() * 5) + 1;  // Genera un numero aleatorio para determinar el tipo de pregunta.
    
    animal = articulo(animalAleatorio(id));

    // -> Genera la estructura de la pregunta y su repuesta correcta
    switch (preg) {
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

    preguntas.innerHTML = cont + ")- " + pregunta + animal + "?";
    
    cont++;
}

// -> Extraigo un animal del objeto en funcion del id ingresado
function animalAleatorio(idnum){
    for(let i = 0; i < fauna.animales.length; i++) {
        if(idnum === fauna.animales[i].id){
            return fauna.animales[i];
        }
    }
}
// <-

// -> En funcion del animal ingresado, determino el articulo correspondiente para que la pregunta sea legible
function articulo(ani){
    if(ani.masculino){
        return "el " + ani.nombre;
    } else {
        return "la " + ani.nombre;
    }
}
// <-

// -> Determina si una respuesta es correecta cuando hay muchas opciones para dicha condicion
function respuestaString(res, cor){
    for(let j = 0; j < cor.length; j++){
        if(res === cor[j]){
            return true;
        } 
    }
}
// <-

// -> Determina si una respuesta es correecta cuando esta se encuentra en un rango de valores
function respuestaNumber(res, cor){
    if(parseFloat(res) >= cor[0] && parseFloat(res) <= cor[1]){
        return true;
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
            if(res == cor){
                return true;
            }
        }
}
// <- 



let cantPreguntas;
let numero;
let cont;
let pregunta;
let caracteristica;
let correcto;
let respuesta;
let animal;
let preguntas;
let resp = document.createElement("input");
let send = document.createElement("input");
let cuantoSabes = document.getElementById("cuantoSabes");
cuantoSabes.onclick = cargarCuantoSabes;

