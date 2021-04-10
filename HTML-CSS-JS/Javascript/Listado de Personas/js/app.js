const personas = [
    new Persona ('Juan', 'Perez'),
    new Persona ('Charlie', 'Lara'),
];
function mostrarPersonas(){
    console.log('MOstrar personas');

    let texto = '';
    //definimos variable persona del arreglo personas
    for (let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona (){
    //recuperamos los elementos, los input text
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma ['apellido'];

    if (nombre.value != '' && apellido.value != ''){
    //creamos objeto de tipo persona
    const persona = new Persona (nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
    
    } else {
        console.log('No hay informacion que agregar')
    }

    

    




}