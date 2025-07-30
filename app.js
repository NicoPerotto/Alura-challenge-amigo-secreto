// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// La lista vacía donde se guardarán los nombres de los amigos.
let amigos = [];

// Esta función se ejecuta para añadir un amigo a la lista.
function agregarAmigo(){
    // Obtiene el texto del campo de entrada con ID 'amigo'.
    let nuevoAmigo = document.getElementById('amigo').value;
    
    // Verifica si el campo de texto está vacío.
    if (nuevoAmigo == ""){
        // Muestra una alerta si no hay texto.
        alert('vacio');
    }else{
        // Limpia el campo de texto.
        borrarInput();
        // Añade el nuevo amigo al arreglo 'amigos'.
        amigos.push(nuevoAmigo);
        // Actualiza la lista que se ve en la página.
        agregarALista(amigos, 'listaAmigos');
    }
}

// Esta función se encarga de mostrar los nombres en la página web.
function agregarALista(nombres, idElemento){
    let nuevoItem;
    // Selecciona el elemento de la lista por su ID.
    let lista =  document.getElementById(idElemento);
    // Borra el contenido actual para evitar duplicados.
    lista.innerHTML = "";

    // Itera sobre cada nombre en la lista.
   for(i=0; i<nombres.length; i++){
        // Crea un nuevo elemento de lista (<li>).
        nuevoItem = document.createElement("li");
        // Asigna el nombre al nuevo elemento.
        nuevoItem.textContent = nombres[i];
        // Añade el nuevo elemento a la lista en la página.
        lista.appendChild(nuevoItem);
   }
}

// Esta función limpia el campo de entrada.
function borrarInput(){
    // Establece el valor del campo con ID 'amigo' a una cadena vacía.
    document.getElementById('amigo').value = "";
}

