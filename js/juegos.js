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
            ubicacion: ["matorrales", "montaña", "pendientes"],
            masculino: true
        },
        {
            id: 3,
            nombre: "puma",
            familia: "mamifero",
            peso: [60, 100],
            tamanno: [2, 2.7],
            alimentacion: ["insectos grandes", "animales pequeños", "reptiles", "animales grandes", "carnivoro"],
            ubicacion: ["desierto", "montaña", "bosques", "llanuras"],
            masculino: true
        },
        {
            id: 4,
            nombre: "zorrillo",
            familia: "mamifero",
            peso: [0.150, 0.320],
            tamanno: [0.180, 0.240],
            alimentacion: ["omnivoro", "insectos", "huevos", "aves", "pequeños mamiferos", "frutas", "semillas"],
            ubicacion: ["selva", "cuerpos de agua", "llanuras"],
            masculino: true
        },
        {
            id: 5,
            nombre: "zorro culpeo",
            familia: "mamifero",
            peso: [7, 14],
            tamanno: [0.9, 1.6],
            alimentacion: ["roedores", "liebres", "aves", "lagartos", "plantas", "carroña", "carnivoro"],
            ubicacion: ["montaña", "praderas", "desiertos", "bosques"],
            masculino: true
        },
        {
            id: 6,
            nombre: "condor",
            familia: "aves",
            peso: [8, 15],
            tamanno: [1, 3.3],
            alimentacion: ["carroña", "animales enfermos", "animales desvalidos"],
            ubicacion: ["montaña", "sierra"],
            masculino: true,
        },
        {
            id: 7,
            nombre: "gorrion",
            familia: "aves",
            peso: [0.0134, 0.042],
            tamanno: [0.114, 0.18],
            alimentacion: ["semilas", "insectos"],
            ubicacion: ["ciudades", "llanura"],
            masculino: true,
        },
        {
            id: 8,
            nombre: "halcon peregrino",
            familia: "aves",
            peso: [0.440, 1.5],
            tamanno: [0.34, 1.2],
            alimentacion: ["aves", "pequeños mamiferos"],
            ubicacion: ["selva", "montaña", "llanura", "sierra", "tundra"],
            masculino: true,
        },
        {
            id: 9,
            nombre: "paloma",
            familia: "aves",
            peso: [0.030, 2],
            tamanno: [0.15, 0.75],
            alimentacion: ["semillas", "fruta"],
            ubicacion: ["todo el territorio"],
            masculino: false,
        },
        {
            id: 10,
            nombre: "tijereta",
            familia: "aves",
            peso: [0.031, 0.035],
            tamanno: [0.25, 0.42],
            alimentacion: ["insectos", "fruta"],
            ubicacion: ["area rural", "arboladas", "bosques", "parques", "jardines"],
            masculino: false,
        },
        {
            id: 11,
            nombre: "cascabel austral",
            familia: "reptiles",
            peso: [3, 5],
            tamanno: [1.4, 1.5],
            alimentacion: ["canivora", "lagartos", "roedores"],
            ubicacion: ["bosques", "selvas", "matorrales"],
            masculino: false,
        },
        {
            id: 12,
            nombre: "coral argentina",
            familia: "reptiles",
            peso: [0.19, 0.22],
            tamanno: [1.1, 1.3],
            alimentacion: ["serpientes", "lagartos", "cecilias", "culebrillas ciegas", "peces", "anguilas", "canibales"],
            ubicacion: ["monte", "semiaridos", "bosques secos", "pastizales", "sabanas", "humedales", "pedregales serranos"],
            masculino: false,
        },
        {
            id: 13,
            nombre: "gecko salamanca",
            familia: "reptiles",
            peso: [0.015, 0.05],
            tamanno: [0.06, 0.140],
            alimentacion: ["insectos"],
            ubicacion: ["subtropical", "arbustos", "desiertos", "arboleadas"],
            masculino: true,
        },
        {
            id: 14,
            nombre: "tortuga pintada",
            familia: "reptiles",
            peso: [0.2, 2.7],
            tamanno: [0.15, 0.215],
            alimentacion: ["animales pequeños", "plantas"],
            ubicacion: ["cienagas", "agua dulce"],
            masculino: false,
        },
        {
            id: 15,
            nombre: "tortuga terrestre argentina",
            familia: "reptiles",
            peso: [2, 2.7],
            tamanno: [0.25, 0.35],
            alimentacion: ["tallos", "frutos", "gramineas", "herbaceas", "vainas", "hojas", "pastos", "frutas", "verduras", "tuberculos", "invertebrados", "caracoles", "babosas", "lombrices"],
            ubicacion: ["llanuras secas", "semidesiertos", "chaco seco", "espinal"],
            masculino: false,
        },
        {
            id: 16,
            nombre: "camoti",
            familia: "insectos",
            peso: [0.0038, 0.0671],
            tamanno: [0.0036, 0.0047],
            alimentacion: ["nectar", "insectos", "hidratos de carbono"],
            ubicacion: ["arboladas", "ciudad", "riscos"],
            masculino: true,
        },
        {
            id: 17,
            nombre: "hormiga roja argentina",
            familia: "insecto",
            peso: [0.0005, 0.0015],
            tamanno: [0.0015, 0.005],
            alimentacion: ["insectos", "carroña", "secreciones", "pequños animales"],
            ubicacion: ["todo el territorio"],
            masculino: false,
        },
        {
            id: 18,
            nombre: "mosca domestica",
            familia: "insecto",
            peso: [0.0025, 0.0035],
            tamanno: [0.005, 0.015],
            alimentacion: [""],
            ubicacion: ["omnivora", "grasas", "proteinas", "azucares"],
            masculino: false,
        },
        {
            id: 19,
            nombre: "mosquito comun",
            familia: "insectos",
            peso: [0.0005, 0.0015],
            tamanno: [0.004, 0.010],
            alimentacion: ["nectar", "sangre", "plantas", "polen", "jugo de frutas"],
            ubicacion: ["agua estancada"],
            masculino: true,
        },
        {
            id: 20,
            nombre: "vinchuca",
            familia: "insecto",
            peso: [0.003, 0.007],
            tamanno: [0.02, 0.03],
            alimentacion: ["sangre"],
            ubicacion: ["cercania a animales"],
            masculino: false,
        },
        {
            id: 21,
            nombre: "carpa",
            familia: "peces",
            peso: [7, 10],
            tamanno: [0.6, 1.2],
            alimentacion: ["omnivora", "plantas", "insectos", "crustaceos", "zooplancton"],
            ubicacion: ["agua estancada", "agua lenta", "aguas templadas"],
            masculino: false,
        },
        {
            id: 22,
            nombre: "dientudo",
            familia: "peces",
            peso: [0.3, 0.35],
            tamanno: [0.25, 0.35],
            alimentacion: ["peces", "macrocrustaceos", "insectos"],
            ubicacion: ["agua dulce"],
            masculino: true,
        },
        {
            id: 23,
            nombre: "morenita",
            familia: "peces",
            peso: [0.01, 0.02],
            tamanno: [0.015, 0.07],
            alimentacion: ["insectos", "crustaceos", "anfipodos", "quironomidos", "efemeropteros", "ostracodos", "algas"],
            ubicacion: ["agua dulce", "agua salobre", "climas templados", "climas calidos"],
            masculino: false,
        },
        {
            id: 24,
            nombre: "pejerrey",
            familia: "peces",
            peso: [0.5, 3],
            tamanno: [0.4, 0.6],
            alimentacion: ["peces", "algas", "plantas acuaticas"],
            ubicacion: ["agua dulce", "agua salobre", "rios", "lagunas", "estuarios"],
            masculino: true,
        },
        {
            id: 25,
            nombre: "trucha arcoiris",
            familia: "peces",
            peso: [8, 15],
            tamanno: [0.5, 1.2],
            alimentacion: ["omnivoros", "invertebrados", "peces", "zooplancton"],
            ubicacion: ["aguas subtropicales", "pelagico", "mar"],
            masculino: false,
        }
    ],
    // {
    //     id: ,
    //     nombre: ,
    //     familia: ,
    //     peso: ,
    //     tamanno: ,
    //     alimentacion: ,
    //     ubicacion: ,
    //     masculino: ,
    // },

    animal(id){
        for(let i = 0; i < this.animales.length; i++) {
            if(id === this.animales[i].id){
                return this.animales[i];
            }
        }
    }
};

function cuantoSabes(){
    let respuesta;
    let correcto;
    let animal;
    let respCorr = 0;
    let msj;
    alert("Bienvenido, a continuacion te hare unas preguntas para ver cuanto has aprendido sobre nuestra fauna local. Estas listo?");

    for(let p = 0; p < 5; p++){
        let id = Math.floor(Math.random() * (fauna.animales.length)) + 1;
        let preg = Math.floor(Math.random() * 4) + 1; 
        let pregunta;
        let caracteristica;
                
        if(fauna.animal(id).masculino === true){
            animal = "el " + fauna.animal(id).nombre;
        } else {
            animal = "la " + fauna.animal(id).nombre;
        }

        switch (preg) {
            case 1:
                pregunta = "De que se alimenta ";
                caracteristica = "alimento";
                correcto = fauna.animal(id).alimentacion;
                break;
                
            case 2:
                pregunta = "Donde habita ";
                caracteristica = "ubicacion";
                correcto = fauna.animal(id).ubicacion;
                break;

            case 3:
                pregunta = "Cuanto puede medir (en metros) ";
                caracteristica = "tamanno";
                correcto = fauna.animal(id).tamanno;
                break;

            case 4:
                pregunta = "Cuanto puede pesar (en kilogramos)";
                caracteristica = "peso";
                correcto = fauna.animal(id).peso;
                break;
        }
        
        respuesta = prompt((p+1) + "°) - ¿" + pregunta + animal + "?");

        if(caracteristica == "alimento" || caracteristica == "ubicacion"){
            let n = 0;
            
            for(let j = 0; j < correcto.length; j++){
                if(respuesta == correcto[j]){
                    n++;
                }
            }

            if(n > 0){
                alert("Respuesta Correcta");
                respCorr++;
            } else {
                alert("Respuesta Incorrecta");
            }

        } else if(caracteristica == "peso" || caracteristica == "tamanno"){
            if(respuesta >= correcto[0] && respuesta <= correcto[1]){
                alert("Respuesta Correcta");
                respCorr++;
            } else {
                alert("Respuesta Incorrecta");
            }
        }
        
    }

    if(respCorr <=3){
        msj = " Aun puedes mejorar!";
    } else if(respCorr > 3){
        msj = " Bien Hecho!"
    }
    prompt("Acertaste " + respCorr + " de 5." + msj);
}

// function queAnimalEs(){
//
// }

let juego = prompt("¿Que juego quieres jugar?(introduce el numero)\n 1)- Cuanto Sabes...\n 2)- ¿Que animal es?");

if(juego == 1){
    cuantoSabes();
}