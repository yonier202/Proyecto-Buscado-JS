const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const resultado = document.querySelector('#resultado');

const max= new Date().getFullYear();
const min = max - 10;

// console.log(max);
// console.log(min);

//Generar Objeto con la busuqeda
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: ""
}

//eventos
document.addEventListener("DOMContentLoaded", ()=> {
    mostrarAutos(autos);

    //llena las opciones de años

    llenarSelect();
}); 

marca.addEventListener("change", (e)=> {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});
year.addEventListener("change", (e)=> {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});
minimo.addEventListener("change", (e)=> {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});
maximo.addEventListener("change", (e)=> {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});
puertas.addEventListener("change", (e)=> {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});
transmision.addEventListener("change", (e)=> {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();

});
color.addEventListener("change", (e)=> {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});

// funciones 
function mostrarAutos(autos) {
    //elimina el html previo
    limpiarHtml();
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

function limpiarHtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
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

// filtrar base en la busqueda 
function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarAno).filter( filtrarPminimo).filter( filtrarPmaximo).filter( filtrarPuertas ).filter(filtrarTransmision).filter( filtrarColor);
    
    if (resultado.length) {
        mostrarAutos(resultado);
    }else{
        noResultados();
    }
    
}

function filtrarMarca(auto){
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca
    }
    return auto;
}

function filtrarAno(auto){
    if (datosBusqueda.year) {
        //el objeto datosBusqueda tiene sus propiedades como string
        //se convierte su propiedad year a number para comparar con el objeto en DB
        return auto.year === parseInt(datosBusqueda.year);
    }
    return auto;
}

function filtrarPminimo(auto) {
    if (datosBusqueda.minimo) {
        
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}

function filtrarPmaximo(auto) {
    if (datosBusqueda.maximo) {
        
        return auto.precio <= datosBusqueda.maximo;
    }

    return auto;
}

function filtrarPuertas(auto){
    if (datosBusqueda.puertas) {

        return auto.puertas === parseInt(datosBusqueda.puertas);
    }

    return auto;
}

function filtrarTransmision(auto){
    if (datosBusqueda.transmision) {

        return auto.transmision === datosBusqueda.transmision;
    }

    return auto;
}

function filtrarColor(auto){
    if (datosBusqueda.color) {

        return auto.color === datosBusqueda.color;
    }

    return auto;
}

function noResultados() {
    limpiarHtml();
    const noResultados = document.createElement('div');
    noResultados.classList.add('alerta', 'error');
    noResultados.textContent = 'No hay resultado';
    resultados.appendChild(noResultados)
}
