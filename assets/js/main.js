// // cards dinamicas
// let htmlEvents = "";
 
// for (let event of data.events){
 
//        htmlEvents += `<div class="card" style="width: 20rem;">
//        <img src="${event.image}" class="card-img-top" alt="...">
//        <div class="card-body d-flex flex-column justify-content-between">
//            <h5 class="card-title">${event.name}</h5>
//             <p class="card-text">${event.description}</p>
//             <p class="text-muted">Price: $${event.price}<p>
//             <a href="./details.html" class="btn btn-primary ">Buy ticket</a>
//        </div>
//         </div>`; 


//    }

//    document.querySelector('div .eventsCards').innerHTML += htmlEvents;

  



// array de categorias
 categorias=[];
 data.events.forEach(evento => {
    if(!categorias.includes(evento.category)){
       categorias.push(evento.category);
    }
});   

    console.log(categorias);  

// generar checkbox dinamicos
let form = document.querySelector('div form div');
let htmlCategorias = "";
for(let categoria of categorias){
     htmlCategorias +=
     `<div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="${categoria}checkbox" value="${categoria}">
          <label class="form-check-label" for="${categoria}checkbox">${categoria}</label>
      </div>`
}
 
 form.innerHTML = htmlCategorias;

 // agregrar eschucha de evento a los checkbox y crear las cards segun la categoria
 let checkboxInput = document.querySelectorAll("div input");
 checkboxInput.forEach(input => {input.onclick = () => {
     htmlEvents = "";
     document.querySelector('div .eventsCards').innerHTML += htmlEvents;
     let categoria = input.value;
     console.log(categoria);
     for (let event of data.events) {
          if(categoria == event.category && input.checked == true ) {
               
       htmlEvents += `<div class="card" style="width: 20rem;">
       <img src="${event.image}" class="card-img-top" alt="...">
       <div class="card-body d-flex flex-column justify-content-between">
           <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <p class="text-muted">Price: $${event.price}<p>
            <a href="./details.html?id=${event._id}" class="btn btn-primary ">Buy ticket</a>
       </div>
        </div>`; ; 
          }
     }
     document.querySelector('div .eventsCards').innerHTML = htmlEvents;
   }  
 });
