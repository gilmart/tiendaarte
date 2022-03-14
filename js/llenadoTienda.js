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

console.log(productosBD)

let fila=document.getElementById("fila")


productosBD.forEach(function(producto){
    console.log(producto.nombre)
    console.log(producto.foto)
    console.log(producto.precio)

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto

    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})