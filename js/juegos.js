window.addEventListener('load', function() {
    class Fauna {
        constructor(){
            this.animales = [
                {
                    id: 1,
                    nombre: "grison menor",
                    familia: "mamiferos" ,
                    peso: [1.2, 2.4],
                    tamanno: [0.4, 0.75],
                    alimentacion: ["omnivoro", "animales pequeños", "fruta"],
                    habitat: ["pastizales", "bosques", "matorrales", "prados"],
                    esMasculino: true,
                    imagenes: "grisonMenor"
                },
                {
                    id: 2,
                    nombre: "guanaco",
                    familia: "mamiferos",
                    peso: [100, 140],
                    tamanno: [1.8, 1.9],
                    alimentacion: ["hierbas", "musgos", "tuberculos", "herbivoro"],
                    habitat: ["matorrales", "montaña", "pendientes"],
                    esMasculino: true,
                    imagenes: "guanaco"
                },
                {
                    id: 3,
                    nombre: "puma",
                    familia: "mamiferos",
                    peso: [60, 100],
                    tamanno: [2, 2.7],
                    alimentacion: ["insectos grandes", "animales pequeños", "reptiles", "animales grandes", "carnivoro"],
                    habitat: ["desierto", "montaña", "bosques", "llanuras"],
                    esMasculino: true,
                    imagenes: "puma"
                },
                {
                    id: 4,
                    nombre: "zorrillo",
                    familia: "mamiferos",
                    peso: [0.150, 0.320],
                    tamanno: [0.180, 0.240],
                    alimentacion: ["omnivoro", "insectos", "huevos", "aves", "pequeños mamiferos", "frutas", "semillas"],
                    habitat: ["selva", "cuerpos de agua", "llanuras"],
                    esMasculino: true,
                    imagenes: "zorrillo"
                },
                {
                    id: 5,
                    nombre: "zorro culpeo",
                    familia: "mamiferos",
                    peso: [7, 14],
                    tamanno: [0.9, 1.6],
                    alimentacion: ["roedores", "liebres", "aves", "lagartos", "plantas", "carroña", "carnivoro"],
                    habitat: ["montaña", "praderas", "desiertos", "bosques"],
                    esMasculino: true,
                    imagenes: "zorroCulpeo"                    
                },
                {
                    id: 6,
                    nombre: "condor",
                    familia: "aves",
                    peso: [8, 15],
                    tamanno: [1, 3.3],
                    alimentacion: ["carroña", "animales enfermos", "animales desvalidos"],
                    habitat: ["montaña", "sierra"],
                    esMasculino: true,
                    imagenes: "condor"
                },
                {
                    id: 7,
                    nombre: "gorrion",
                    familia: "aves",
                    peso: [0.0134, 0.042],
                    tamanno: [0.114, 0.18],
                    alimentacion: ["semilas", "insectos"],
                    habitat: ["ciudades", "llanura"],
                    esMasculino: true,
                    imagenes: "gorrion"
                },
                {
                    id: 8,
                    nombre: "halcon peregrino",
                    familia: "aves",
                    peso: [0.440, 1.5],
                    tamanno: [0.34, 1.2],
                    alimentacion: ["aves", "pequeños mamiferos"],
                    habitat: ["selva", "montaña", "llanura", "sierra", "tundra"],
                    esMasculino: true,
                    imagenes: "halconPeregrino"
                },
                {
                    id: 9,
                    nombre: "paloma",
                    familia: "aves",
                    peso: [0.030, 2],
                    tamanno: [0.15, 0.75],
                    alimentacion: ["semillas", "fruta"],
                    habitat: ["todo el territorio"],
                    esMasculino: false,
                    imagenes: "paloma"
                },
                {
                    id: 10,
                    nombre: "tijereta",
                    familia: "aves",
                    peso: [0.031, 0.035],
                    tamanno: [0.25, 0.42],
                    alimentacion: ["insectos", "fruta"],
                    habitat: ["area rural", "arboladas", "bosques", "parques", "jardines"],
                    esMasculino: false,
                    imagenes: "tijereta"
                },
                {
                    id: 11,
                    nombre: "cascabel austral",
                    familia: "reptiles",
                    peso: [3, 5],
                    tamanno: [1.4, 1.5],
                    alimentacion: ["canivora", "lagartos", "roedores"],
                    habitat: ["bosques", "selvas", "matorrales"],
                    esMasculino: false,
                    imagenes: "cascabelAustral"
                },
                {
                    id: 12,
                    nombre: "coral argentina",
                    familia: "reptiles",
                    peso: [0.19, 0.22],
                    tamanno: [1.1, 1.3],
                    alimentacion: ["serpientes", "lagartos", "cecilias", "culebrillas ciegas", "peces", "anguilas", "canibales"],
                    habitat: ["monte", "semiaridos", "bosques secos", "pastizales", "sabanas", "humedales", "pedregales serranos"],
                    esMasculino: false,
                    imagenes: "coralArgentina"
                },
                {
                    id: 13,
                    nombre: "gecko salamanca",
                    familia: "reptiles",
                    peso: [0.015, 0.05],
                    tamanno: [0.06, 0.140],
                    alimentacion: ["insectos"],
                    habitat: ["subtropical", "arbustos", "desiertos", "arboleadas"],
                    esMasculino: true,
                    imagenes: "geckoSalamanca"
                },
                {
                    id: 14,
                    nombre: "tortuga pintada",
                    familia: "reptiles",
                    peso: [0.2, 2.7],
                    tamanno: [0.15, 0.215],
                    alimentacion: ["animales pequeños", "plantas"],
                    habitat: ["cienagas", "agua dulce"],
                    esMasculino: false,
                    imagenes: "tortugaPintada"
                },
                {
                    id: 15,
                    nombre: "tortuga terrestre argentina",
                    familia: "reptiles",
                    peso: [2, 2.7],
                    tamanno: [0.25, 0.35],
                    alimentacion: ["tallos", "frutos", "gramineas", "herbaceas", "vainas", "hojas", "pastos", "frutas", "verduras", "tuberculos", "invertebrados", "caracoles", "babosas", "lombrices"],
                    habitat: ["llanuras secas", "semidesiertos", "chaco seco", "espinal"],
                    esMasculino: false,
                    imagenes: "tortugaTerrestreArgentina"
                },
                {
                    id: 16,
                    nombre: "camoati",
                    familia: "insectos",
                    peso: [0.0038, 0.0671],
                    tamanno: [0.0036, 0.0047],
                    alimentacion: ["nectar", "insectos", "hidratos de carbono"],
                    habitat: ["arboladas", "ciudad", "riscos"],
                    esMasculino: true,
                    imagenes: "camoati"
                },
                {
                    id: 17,
                    nombre: "hormiga roja argentina",
                    familia: "insectos",
                    peso: [0.0005, 0.0015],
                    tamanno: [0.0015, 0.005],
                    alimentacion: ["insectos", "carroña", "secreciones", "pequños animales"],
                    habitat: ["todo el territorio"],
                    esMasculino: false,
                    imagenes: "hormigaRojaArgentina"
                },
                {
                    id: 18,
                    nombre: "mosca domestica",
                    familia: "insectos",
                    peso: [0.0025, 0.0035],
                    tamanno: [0.005, 0.015],
                    alimentacion: ["omnivora", "grasas", "proteinas", "azucares"],
                    habitat: ["todo el territorio"],
                    esMasculino: false,
                    imagenes: "moscaDomestica"
                },
                {
                    id: 19,
                    nombre: "mosquito comun",
                    familia: "insectos",
                    peso: [0.0005, 0.0015],
                    tamanno: [0.004, 0.010],
                    alimentacion: ["nectar", "sangre", "plantas", "polen", "jugo de frutas"],
                    habitat: ["agua estancada"],
                    esMasculino: true,
                    imagenes: "mosquitoComun"
                },
                {
                    id: 20,
                    nombre: "vinchuca",
                    familia: "insectos",
                    peso: [0.003, 0.007],
                    tamanno: [0.02, 0.03],
                    alimentacion: ["sangre"],
                    habitat: ["cercania a animales"],
                    esMasculino: false,
                    imagenes: "vinchuca"
                },
                {
                    id: 21,
                    nombre: "carpa",
                    familia: "peces",
                    peso: [7, 10],
                    tamanno: [0.6, 1.2],
                    alimentacion: ["omnivora", "plantas", "insectos", "crustaceos", "zooplancton"],
                    habitat: ["agua estancada", "agua lenta", "aguas templadas"],
                    esMasculino: false,
                    imagenes: "carpa"
                },
                {
                    id: 22,
                    nombre: "dientudo",
                    familia: "peces",
                    peso: [0.3, 0.35],
                    tamanno: [0.25, 0.35],
                    alimentacion: ["peces", "macrocrustaceos", "insectos"],
                    habitat: ["agua dulce"],
                    esMasculino: true,
                    imagenes: "dientudo"
                },
                {
                    id: 23,
                    nombre: "morenita",
                    familia: "peces",
                    peso: [0.01, 0.02],
                    tamanno: [0.015, 0.07],
                    alimentacion: ["insectos", "crustaceos", "anfipodos", "quironomidos", "efemeropteros", "ostracodos", "algas"],
                    habitat: ["agua dulce", "agua salobre", "climas templados", "climas calidos"],
                    esMasculino: false,
                    imagenes: "morenita"
                },
                {
                    id: 24,
                    nombre: "pejerrey",
                    familia: "peces",
                    peso: [0.5, 3],
                    tamanno: [0.4, 0.6],
                    alimentacion: ["peces", "algas", "plantas acuaticas"],
                    habitat: ["agua dulce", "agua salobre", "rios", "lagunas", "estuarios"],
                    esMasculino: true,
                    imagenes: "pejerrey"
                },
                {
                    id: 25,
                    nombre: "trucha arcoiris",
                    familia: "peces",
                    peso: [8, 15],
                    tamanno: [0.5, 1.2],
                    alimentacion: ["omnivoros", "invertebrados", "peces", "zooplancton"],
                    habitat: ["aguas subtropicales", "pelagico", "mar"],
                    esMasculino: false,
                    imagenes: "truchaArcoiris"
                }
            ]
        }
    }

    const individuos = new Fauna();


}, false);