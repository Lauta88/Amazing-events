let htmlEvents = "";
 
for (let event of data.events){
   let currentDate = new Date(data.currentDate);
   let eventDate = new Date(event.date);
   console.log(currentDate);
   console.log(eventDate);
   if (eventDate > currentDate){
       htmlEvents += `<div class="card" style="width: 20rem;">
       <img src="${event.image}" class="card-img-top" alt="...">
       <div class="card-body d-flex flex-column justify-content-between">
           <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <p class="text-muted">Price: $${event.price}<p>
            <a href="./details.html" class="btn btn-primary ">Buy ticket</a>
       </div>
        </div>`; 
       } 

   }

   document.querySelector('div .eventsCards').innerHTML += htmlEvents;
