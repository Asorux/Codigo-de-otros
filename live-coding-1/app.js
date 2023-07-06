const inputNombre = document.getElementById('palabra-input');
const parrafo = document.getElementById('texto');

inputNombre.addEventListener('input', e=>{
    parrafo.textContent = e.target.value;
});

// Escribe tu código aquí.


//Creación de array
myArray=['insecto', 'bootcamp', 'escritorio']

document.querySelector("ul").innerHTML=(myArray)