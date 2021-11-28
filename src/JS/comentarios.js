const db=firebase.firestore()

function cargarInicio(){
    const miFormulario = document.querySelector('#MiComentario');


    miFormulario.addEventListener("submit", async(e)=> {
        e.preventDefault();
        
        const Cnombre = miFormulario['nombre'].value;
        const Copiniones = miFormulario['opiniones'].value;
        
        
        const respuesta= await db.collection('comentarios').doc().set({
            nombre:Cnombre, opiniones:Copiniones
        })
        console.log(Cnombre+"-"+Ccomentarios);
        console.log("click en Submit")
    })
}