// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// La lista vacía donde se guardarán los nombres de los amigos.
let amigos = [];

//Constantes de  manejo de IDs de los elementos
const ID_LISTA_AMIGOS = 'listaAmigos';
const ID_LISTA_RESULTADO = 'resultado';
const ID_ENTRADA_AMIGO = 'amigo';

//Constantes para manejo de mensajes
const MENSAJE_ENTRADA_AMIGO_VACIA = '¡Debe ingresar un nombre!';
const MENSAJE_LISTA_AMIGO_VACIA = '¡Debes agregar amigos a la lista!';
const MENSAJE_AMIGO_SORTEADO = 'El amigo secreto sorteado es: ';



// Esta función se ejecuta para añadir un amigo a la lista.
function agregarAmigo(){
    // Obtiene el texto del campo de entrada con ID 'amigo'.
    let nuevoAmigo = obtenerNombreAmigo();
    
    // Verifica si el campo de texto está vacío.
    if (nuevoAmigo == ""){
        // Muestra una alerta si no hay texto.
        alert(MENSAJE_ENTRADA_AMIGO_VACIA);
    }else{
        // Limpia el campo de texto.
        borrarNombreAmigo();
        // Añade el nuevo amigo al arreglo 'amigos'.
        amigos.push(nuevoAmigo);
        // Actualiza la lista que se ve en la página.
        listarAmigos(amigos);
    }
}

// Esta función se encarga de mostrar los nombres en la página web.
function listarAmigos(nombres){
    // Itera sobre cada nombre en la lista.
    borrarlistas();
    for(i=0; i<nombres.length; i++){
        agregarALista(nombres[i],ID_LISTA_AMIGOS)
    }
}

function agregarALista(elemento, idLista){
    lista = document.getElementById(idLista);
    // Crea un nuevo elemento de lista (<li>).
    nuevoItem = document.createElement("li");
    nuevoItem.textContent = elemento;
    // Añade el nuevo elemento a la lista en la página.
    lista.appendChild(nuevoItem);
}

// Esta función limpia el campo de entrada.
function borrarNombreAmigo(){
    // Establece el valor del campo amigo a una cadena vacía.
    document.getElementById(ID_ENTRADA_AMIGO).value = "";
}
// Esta función obtiene el campo de entrada.
function obtenerNombreAmigo(){
    //Obtener el valor del campo amigo.
    return  document.getElementById(ID_ENTRADA_AMIGO).value;
}
//Esta función limpia las listas
function borrarlistas(){
    // Limpia las listas de amigos, y resultado.
    document.getElementById(ID_LISTA_AMIGOS).innerHTML = "";
    document.getElementById(ID_LISTA_RESULTADO).innerHTML = "";
}
//Esta funcion sortea el amigo secreto y lo coloca en la lista de resultado
function sortearAmigo(){
    if (amigos.length == 0){
        //Mensaje si la lista esta vaciá
        alert(MENSAJE_LISTA_AMIGO_VACIA);
    }else{
        //Seleccion amigo secreto
        let amigoNro = Random(0, amigos.length);
        let amigoSeleccionado = amigos[amigoNro];
        //Mostrar amigo secreto
        borrarlistas();
        agregarALista(MENSAJE_AMIGO_SORTEADO + amigoSeleccionado, ID_LISTA_RESULTADO)
    }
}
//Esta funcion crea el nro aleatorio
function Random (min, max) { 
  return Math.floor(Math.random() * (max - min) + min);
}