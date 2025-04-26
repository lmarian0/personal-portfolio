//Guardar preferencia de modo en caso de no haber preferencia almacenada
if(localStorage.getItem("modo")===null){
    localStorage.setItem("modo", JSON.stringify(false));
}


//Variable light almacena el valor booleano de la cadena almacenada
let light = JSON.parse(localStorage.getItem("modo"));

function cambioDeTema(){
    //Cambio de valor de preferencia
    light = !light;
    localStorage.setItem("modo", JSON.stringify(light));
    //Cambio de tema
    if(light){
        try {
            document.querySelectorAll(".texto").forEach(elemento => {
                elemento.style.color = "#272727";
            });
            document.body.style.backgroundColor = "#EFFFFB";
            document.querySelectorAll(".fotos").forEach(elemento =>{
                elemento.style.borderColor = "#272727";
                elemento.style.boxShadow = "inset 0 0 1vh 0.5vh #EFFFFB";
            });
            document.getElementById("caja_git").style.borderColor="#272727";
        } catch (e) {}

    }else{
        try {
            document.querySelectorAll(".texto").forEach(elemento => {
                elemento.style.color = "#EFFFFB";
            });
            document.body.style.backgroundColor = "#272727";
            document.querySelectorAll(".fotos").forEach(elemento =>{
                elemento.style.borderColor = "#EFFFFB";
                elemento.style.boxShadow = "inset 0 0 1vh 0.5vh #272727";
            });
            document.getElementById("caja_git").style.borderColor="#EFFFFB";
        } catch (e) {}
    }
}

//Funcion para tomar preferencias de usuario preestablecidas

function inicioDeTema(){
    if(light){
        try{
            document.querySelectorAll(".texto").forEach(elemento => {
            elemento.style.color = "#272727";
            });
            document.body.style.backgroundColor = "#EFFFFB";
            document.querySelectorAll(".fotos").forEach(elemento =>{
                elemento.style.borderColor = "#272727";
                elemento.style.boxShadow = "inset 0 0 1vh 0.5vh #EFFFFB";
            });
            document.getElementById("caja_git").style.borderColor="#272727";
        }catch(e){}
        

    }else{
        try {
            document.querySelectorAll(".texto").forEach(elemento => {
            elemento.style.color = "#EFFFFB";
            });
            document.body.style.backgroundColor = "#272727";
            document.querySelectorAll(".fotos").forEach(elemento =>{
                elemento.style.borderColor = "#EFFFFB";
                elemento.style.boxShadow = "inset 0 0 1vh 0.5vh #272727";
            });
            document.getElementById("caja_git").style.borderColor="#EFFFFB";
        } catch (e) {}
        
    }
}

// Funcion para diseño responsive, abrir menu de opciones
let menu = false

function menuOpciones(){
    let nav = document.getElementsByTagName("nav")[0];
    if(!menu){
        nav.style.display="grid";
        try {
            Array.from(document.getElementsByClassName("fotos")).forEach(foto => {
                foto.classList.add("animacion_encimar");
            });
        } catch (e) {}
    }else{
        nav.style.display="none";
        try {
            Array.from(document.getElementsByClassName("fotos")).forEach(foto => {
                foto.classList.remove("animacion_encimar");
            });
        } catch (e) {}
    }
    menu = !menu;
}

// Función para corregir cuando se cambia el tamaño de la pantalla
function verificarTamañoPantalla() {
    let nav = document.getElementsByTagName("nav")[0];
    if (window.innerWidth > 500) {
        nav.style.display = "grid";
        menu = false; // Resetea el estado
    } else {
        if(!menu) {
            nav.style.display = "none";
        }
    }
}

// Escucha cambios de tamaño de ventana
window.addEventListener("resize", verificarTamañoPantalla);

inicioDeTema();