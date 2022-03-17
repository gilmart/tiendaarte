import { ampliarInformacion } from "./ampliarInfo";
import { pintarCarrito } from "./carritoprueba";


function agregarProductoCarro(evento){
    pintarCarrito.push(evento.target.getAttribute("marcador"))

    ampliarInformacion()
}