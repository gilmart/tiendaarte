export function pintarTienda(){

    let productosBD= [

        {nombre: "Zipper Bottle", precio: "$" + 7000, descripcion: "Koozie personalizados para botellas 12oz", foto: "img/koozie2.png", ranking:"img/rating4.png",  envío: "img/gratis.png"},
        {nombre: "Can Koozie", precio: "$" + 21000, descripcion: "Tripack de koozies para latas tamaño standard", foto: "img/koozie10.png",ranking:"img/rating5.png", envío: "img/gratis.png"},
        {nombre: "24oz Can ", precio: "$" + 12000, descripcion: "Koozie personalizados para latas tamaño 24oz", foto: "img/koozie3.png", ranking:"img/rating5.png",  envío: "img/gratis.png"},
        {nombre: "Jersey Bottle", precio: "$" + 15000, descripcion: "Koozie personalizados para botellas tamaño standard", foto: "img/koozie4.png", ranking:"img/rating5.png",  envío: "img/gratis.png"},
        {nombre: "Strap Can", precio: "$" + 17000, descripcion: "Koozies para latas con cinta para sostener", foto: "img/koozie7.png",ranking:"img/rating2.png",  envío: "img/gratis.png"},
        {nombre: "Water Bottle", precio:"$" + 14000, descripcion: "Perfectos koozies para botella de agua tamaño 12oz", foto: "img/koozie9.png",ranking:"img/rating5.png", envío: ""},
       
        {nombre: "Can Koozie", precio: "$" +5000, descripcion: "Koozie personalizados para latas tamaño standard", foto: "img/coolieIndex.png", ranking:"img/rating5.png", envío: ""},
        {nombre: "Camo Can", precio: "$" +5000, descripcion: "Koozie con impresion de camuflaje", foto: "img/koozie5.png", ranking:"img/rating4.png", envío: ""},
        {nombre: "Round Can", precio: "$" +6000, descripcion: "Koozie con bordes redondeados", foto: "img/koozie6.jpg",ranking:"img/rating3.png", envío: "" },
        {nombre: "Wine Glass", precio: "$" +20000, descripcion: "Koozies para copas de vinos", foto: "img/koozie8.png",ranking:"img/rating4.png", envío: ""},

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
    
        let envío=document.createElement("img")
        envío.classList.add("col-2")
        envío.src=producto.envío
    
        let ranking=document.createElement("img")
        ranking.classList.add("col-3")
        ranking.src=producto.ranking

        let titulo=document.createElement("h1")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        let precio=document.createElement("h6")
        precio.classList.add("text-center")
        precio.textContent=producto.precio

        
        let descripcion=document.createElement("h5")
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
        tarjeta.appendChild(envío)     
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(ranking)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(boton)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
   
    
    })
}


