import {  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
import {limpiarformulario} from "./pintarCarrito.js"

let botonregistro=document.getElementById("botonregistro")
let modalInformativo = new  bootstrap.Modal(document.getElementById('modalInformativo'))

botonregistro.addEventListener("click", function(evento){

    evento.preventDefault()

    let correo = document.getElementById("correo").value 
    let password = document.getElementById("password").value
    
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, correo, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...

      let textoinformativo=document.getElementById("informacionGeneral")
      let formulario=document.getElementById("formulario")
      formulario.reset()

      textoinformativo.textContent="Exito registrando al usuario"
      modalInformativo.show()
      setTimeout(function(){
          modalInformativo.hide()
      },3000)

      limpiarformulario()
    })
      
 
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..

      let textoinformativo=document.getElementById("informacionGeneral")
        textoinformativo.textContent="Usuario no Válido: "+errorMessage
        modalInformativo.show()
    });

})

let botonIngresar= document.getElementById("botonIngresar")
botonIngresar.addEventListener("click", function(evento){
   
    evento.preventDefault()

    let email2 = document.getElementById("correoIngresar").value
    let password2 = document.getElementById("passwordIngresar").value
    
        const auth = getAuth();
         signInWithEmailAndPassword(auth, email2, password2)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("sesion funciona ")

        let icono = document.getElementById("iconoLogin")
        icono.textContent= email2


        let session=document.getElementById("session")
        session.reset()
        limpiarformulario()

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("sesion  no funciona ")

    });
  })
