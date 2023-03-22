

//crea cards dinamicas

let htmlEvents = "";
let contenedorCard = document.querySelector('div .eventsCards');
for (let event of data.events){
   let currentDate = new Date(data.currentDate);
   let eventDate = new Date(event.date);
   console.log(currentDate);
   console.log(eventDate);
   if (eventDate > currentDate){
        htmlEvents += crearCard(event);
       } 

   }
 contenedorCard.innerHTML += htmlEvents;
   

 // generar checkbox dinamicos
let contenedorCheckbox = document.querySelector('form .contenedorCheckbox');
let htmlCategorias = "";
for(let categoria of categorias){
     htmlCategorias +=
     `<div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="${categoria}checkbox" value="${categoria}">
          <label class="form-check-label" for="${categoria}checkbox">${categoria}</label>
      </div>`
}
 contenedorCheckbox.innerHTML = htmlCategorias;
  

 // agregrar eschucha de evento a los checkbox y crear las cards segun la categoria
 let checkboxInput = document.querySelectorAll(".form-check-input");

 checkboxInput.forEach(input => input.onchange = () => {
     let htmlResultados = "";
     let categoriaSeleccionada=[];
     checkboxInput.forEach(input => {
       if (input.checked){
          categoriaSeleccionada.push(input.value);
      }
    })  
    console.log(categoriaSeleccionada);

    if(categoriaSeleccionada.length > 0){
      data.events.filter(event =>

         categoriaSeleccionada.includes(event.category)).forEach(event =>{
            let currentDate = new Date(data.currentDate);
            let eventDate = new Date(event.date);
            if (eventDate > currentDate){
                 htmlResultados += crearCard(event)}   
       });
    } else{
      data.events.forEach(event =>{
        let currentDate = new Date(data.currentDate);
            let eventDate = new Date(event.date);
            if (eventDate > currentDate){
                 htmlResultados += crearCard(event)} 
        });
    }
    contenedorCard.innerHTML = htmlResultados;
  });

// busqueda por texto

let inputSearch = document.getElementById("search");
let botonBusqueda = document.getElementById("botonSearch");
botonBusqueda.onsubmit = (e) => {
  e.preventDefault();
  let htmlResultadoTexto="";
  let textoIngresado = inputSearch.value.toLowerCase().trim();
  let resultadosBusqueda = [];
  

  for (let event of data.events){
    if (event.name.toLowerCase().includes(textoIngresado)
    ||event.description.toLowerCase().includes(textoIngresado)){
        let currentDate = new Date(data.currentDate);
            let eventDate = new Date(event.date);
            if (eventDate > currentDate){
                 htmlResultadoTexto += crearCard(event);
                resultadosBusqueda.push(event)}
      
      
    } 
  }
    if(resultadosBusqueda.length == 0){
    htmlResultadoTexto += `<h4 class="text-muted">No es posible encontrar su busqueda</h4>`

  }
  console.log(resultadosBusqueda)
  contenedorCard.innerHTML = htmlResultadoTexto;
}



  
