import { pintarTienda } from "./llenadoTienda.js";
import {ampliarInformacion} from "./ampliarInfo.js";
import { pintarCarrito } from "./pintarCarrito.js";

let producto
pintarTienda()
let modalinfoproducto

let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){


    if (event.target.classList.contains("btn")){
    modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))

    producto=ampliarInformacion(event)
    modalinfoproducto.show()

    }
})

let carrito=[]

let boton = document.getElementById("botonAdd")
boton.addEventListener('click', function(event){


    let cantidad=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidad   
    carrito.push(producto)
   
    let suma=0
    carrito.forEach(function(producto){

        suma=suma+Number(producto.cantidad)    
  })


   // CALCULAR TOTAL
   let totalProductos=0
   carrito.forEach(function(producto){
    totalProductos=+totalProductos + Number(producto.precio.split("$")[1])*producto.cantidad
    
       let total= document.getElementById("totalModal")
       total.textContent= "total: " +totalProductos
       
    })
       

    // CALCULAR DIVISAS
    let dolar=4000
    let valorp = document.getElementById("pesos")
    let valord=document.getElementById("dolar")
    let divisap=document.getElementById("divisapesos") 
    let divisad= document.getElementById("divisadolar")   

    carrito.forEach(function(producto){
    divisap.addEventListener("click", function(evento){

            if( valorp === pesos){
                totalModal.textContent= "Total pesos $:" +totalProductos
            }
            else { 
                    
                totalModal.textContent= "Total dolares $:" +totalProductos/dolar
            }

    divisad.addEventListener("click", function(evento){

                if( valord == dolar){
                   console.log("funcniona el if de dolar")
                }
                else { 
                    
                    totalModal.textContent= "Total dolares $:" +totalProductos/dolar
                }
            })
               
        })
    })


    pintarCarrito(suma)
    modalinfoproducto.hide()
    document.getElementById("cantidadProducto").value = "1";
})


let limpiarCarrito = document.getElementById("limpiar")
limpiarCarrito.addEventListener("click", function(evento){
    carrito=[]

    let capsula = document.getElementById("capsula")
    capsula.textContent=0
    capsula.classList.add("invisible")

    modalinfoproducto.hide()
})





let botonCarrito= document.getElementById("botonCarrito")
botonCarrito.addEventListener('click', function(evento){

    let contenedor = document.getElementById("contenedorVenta")
    let modalVenta = new bootstrap.Modal(document.getElementById('resumenCarrito'))
 

    contenedor.innerHTML=""
    
    carrito.forEach(function(producto){

    let fila= document.createElement("div")
    fila.classList.add("row")

    let columna1= document.createElement("div")
    columna1.classList.add("col-6" , "col-md-6")


    let columna2= document.createElement("div")
    columna1.classList.add("col-6" , "col-md-6")

    
    let foto = document.createElement("img")
    foto.classList.add("img-fluid" , "w-100")
    foto.src=producto.foto

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center")
    nombre.textContent=producto.nombre

    let cantidad=document.createElement("h5")
    cantidad.classList.add("text-center")
    cantidad.textContent="Cantidad de articulos: "+producto.cantidad 
    
    let precio=document.createElement("h6")
    precio.classList.add("text-center")
    precio.textContent="precio es: " +producto.precio


    let subtotal=document.createElement("h5")
   // console.log(Number(producto.precio.split("$")[1]))
   // console.log(Number(producto.precio))
   subtotal.classList.add("text-center")
   subtotal.textContent= "subtotal: " +Number(producto.precio.split("$")[1])* producto.cantidad

 

    columna1.appendChild(foto)
    fila.appendChild(columna1)
    fila.appendChild(columna2)

    columna2.appendChild(nombre)
    columna2.appendChild(cantidad)
    columna2.appendChild(precio)
    columna2.appendChild(subtotal)

    contenedor.appendChild(fila)

})

    modalVenta.show()


})