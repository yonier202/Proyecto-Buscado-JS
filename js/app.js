const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max= new Date().getFullYear();
const min = max - 10;

// console.log(max);
// console.log(min);


document.addEventListener("DOMContentLoaded", ()=> {
    mostrarAutos();

    //llena las opciones de años

    llenarSelect();
});  

// funciones 
function mostrarAutos() {
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision}=auto;
        const autoHtml = document.createElement("P");
        autoHtml.textContent = `
        ${marca} ${modelo} - ${year} - Puertas: ${puertas} - Color: ${color} - Transmisión: ${transmision} - Precio: ${precio}
        `;

        //insertar en el Html
        resultado.appendChild(autoHtml);

    });

    
}

function llenarSelect(){
    for (let i = max; i >= min; i--){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i
        //agregando las opciones
        year.appendChild(opcion);
    }   
}