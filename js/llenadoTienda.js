export function pintarTienda(){
    let productosBD= [

        {nombre: "coolie", precio: 45000, descripcion: "Coolies personalizados para latas de cervezas", foto: "img/coolie1.png"},
        {nombre: "coolie2", precio: 45000, descripcion: "Coolies personalizados para latas de cervezas", foto: "img/coolie1.png"},
        {nombre: "coolie3", precio: 45000, descripcion: "Coolies personalizados para latas de cervezas", foto: "img/coolie1.png"},
        {nombre: "coolie4", precio: 45000, descripcion: "Coolies personalizados para latas de cervezas", foto: "img/coolie1.png"},
        {nombre: "coolie5", precio: 45000, descripcion: "Coolies personalizados para latas de cervezas", foto: "img/coolie1.png"},
        {nombre: "coolie6", precio: 45000, descripcion: "Coolies personalizados para latas de cervezas", foto: "img/coolie1.png"},
        {nombre: "coolie7", precio: 45000, descripcion: "Coolies personalizados para latas de cervezas", foto: "img/coolie1.png"},
        {nombre: "coolie8", precio: 45000, descripcion: "Coolies personalizados para latas de cervezas", foto: "img/coolie1.png"},
        {nombre: "coolie9", precio: 45000, descripcion: "Coolies personalizados para latas de cervezas", foto: "img/coolie1.png"},
        {nombre: "coolie10", precio: 45000, descripcion: "Coolies personalizados para latas de cervezas", foto: "img/coolie1.png"},
    ]
    

        //console.log(productosBD)
    
    let fila=document.getElementById("fila")
    productosBD.forEach(function(producto){
        /*
        console.log(producto.nombre)
        console.log(producto.foto)
        console.log(producto.precio)
        */
        
        let columna=document.createElement("div")
        columna.classList.add("col","mt-5")
    
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto
    
        let titulo=document.createElement("h1")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        let precio=document.createElement("h2")
        precio.classList.add("text-left")
        precio.textContent=producto.precio

        
        let descripcion=document.createElement("h3")
        descripcion.classList.add("text-center")
        descripcion.textContent=producto.descripcion
        descripcion.hidden=producto.descripcion

        /*
        let agregarArticulo=document.createElement("list")
        agregarArticulo.classList.add("number")
        agregarArticulo.textContent = "+"
       // agregarArticulo.setAttribute("marcador")
        //agregarArticulo.addEventListener("click")
        */
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-4")
        boton.textContent="ver producto"

             
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
      //  tarjeta.appendChild(agregarArticulo)
        tarjeta.appendChild(boton)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

      
        
    })
}


