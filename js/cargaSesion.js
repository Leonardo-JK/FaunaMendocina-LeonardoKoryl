window.addEventListener('load', function() {
    if(localStorage.usuariosFM === null){
        localStorage.setItem("usuariosFM", JSON.stringify([]));
    }

    sessionStorage.setItem("usuarioActivo", "");
    
    let userDiv = document.createElement("div");
    let passDiv = document.createElement("div");
    let ingresoDiv = document.createElement("div");
    
    document.getElementById("encabezado").appendChild(userDiv);
    userDiv.id = "userDiv";
    document.getElementById("encabezado").appendChild(passDiv);
    passDiv.id = "passDiv";
    document.getElementById("encabezado").appendChild(ingresoDiv);
    ingresoDiv.id = "ingresoDiv";
    let userTag = document.createElement("p");
    userTag.innerHTML = "User"
    userTag.style.textAlign = "center";
    userTag.style.margin = 0;
    userTag.style.textIndent = 0;
    let passTag = document.createElement("p");
    passTag.innerHTML = "Password";
    passTag.style.textAlign = "center";
    passTag.style.margin = 0;
    passTag.style.textIndent = 0;
    let userInput = document.createElement("input");
    userInput.id = "userInput";
    userInput.required = true;
    userInput.type ="text";
    let passInput = document.createElement("input");
    passInput.id = "passInput";
    passInput.type = "password";

    let ingresar = document.createElement("button");
    ingresar.id = "ingresar";
    ingresar.innerText = "INGRESAR";
    let ingresarInv = document.createElement("button");
    ingresarInv.id = "ingresarInv";
    ingresarInv.innerText = "Ingresar como invitado";
    ingresarInv.style.marginBottom = "1rem";
    let registro = document.createElement("button");
    registro.id = "registro";
    registro.innerText = "Registrarse";
    

    document.getElementById("encabezado").style.display = "flex";
    document.getElementById("encabezado").style.flexDirection = "column";
    document.getElementById("encabezado").style.alignItems = "center";

    document.getElementById("ingresoDiv").style.display = "flex";
    document.getElementById("ingresoDiv").style.flexDirection = "column";
    document.getElementById("ingresoDiv").style.alignItems = "center";

    document.getElementById("userDiv").appendChild(userTag);
    document.getElementById("userDiv").appendChild(userInput);
    document.getElementById("passDiv").appendChild(passTag);
    document.getElementById("passDiv").appendChild(passInput);
    document.getElementById("ingresoDiv").appendChild(ingresar);
    document.getElementById("ingresoDiv").appendChild(ingresarInv);
    document.getElementById("ingresoDiv").appendChild(registro);

    ingresar.onclick = verificarUsuario;
    ingresarInv.onclick = () => {sessionStorage.setItem("usuarioActivo", "usuarioInvitado");}
    registro.onclick = registrar;

    document.querySelector(".popup__close").onclick = () => {
        document.querySelector(".popup").style.visibility = "hidden";
    };

    if(sessionStorage.usuarioActivo != ""){
        document.getElementById("queAnimalEs").setAttribute("href", "#");
        document.getElementById("cuantoSabes").setAttribute("href", "#");
    }

    function verificarUsuario(){
        let user = userInput.value;
        let passw = passInput.value;

        let lStorage = JSON.parse(localStorage.usuariosFM);

        for(const u of lStorage){
            if(user === u.usuario && passw === u.password){
                sessionStorage.setItem("usuarioActivo", user);
                document.getElementById("mensaje1").innerHTML = "Bienvenido " + user;
                document.getElementById("mensaje2").innerHTML = "";
                document.querySelector(".popup").style.visibility = "visible";
                document.getElementById("queAnimalEs").setAttribute("href", "#");
                document.getElementById("cuantoSabes").setAttribute("href", "#");
                return;
            }        
        }
        document.getElementById("mensaje1").innerHTML = "Usuario o contraseña invalidos."
        document.getElementById("mensaje2").innerHTML = "Intentenlo de nuevo o registre un nuevo usuario."
        document.querySelector(".popup").style.visibility = "visible";
        
        document.querySelector(".popup__close").onclick = () => {
            document.querySelector(".popup").style.visibility = "hidden";
        };

        console.log(sessionStorage.usuarioActivo);
        console.log(JSON.parse(localStorage.usuariosFM))
    }

    function registrar(){
        let user = userInput.value;
        let passw = passInput.value;

        let lStorage = JSON.parse(localStorage.usuariosFM);

        for(const u of lStorage){
            if(user === u.usuario){
                document.getElementById("mensaje1").innerHTML = "Usuario ya registrado."
                document.querySelector(".popup").style.visibility = "visible";
                return;
            }
        }

        lStorage.push({usuario: user, password: passw, puntajeQAEF: 0, puntajeQAEM: 0, puntajeQAED: 0, puntajeCS: 0});
        localStorage.usuariosFM = JSON.stringify(lStorage);

        document.getElementById("mensaje1").innerHTML = "Usuario registrado.";
        document.getElementById("mensaje2").innerHTML = ""
        document.querySelector(".popup").style.visibility = "visible";

    }

    

    console.log(sessionStorage.usuarioActivo);
    console.log(JSON.parse(localStorage.usuariosFM))

}, false);