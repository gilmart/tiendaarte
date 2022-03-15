import { pintarTienda } from "./llenadoTienda.js";
import {ampliarInformacion} from "./ampliarInfo.js";

pintarTienda()

let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){

    if (event.target.classList.contains("btn")){
    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    ampliarInformacion(event)
    modalinfoproducto.show()
    }
})