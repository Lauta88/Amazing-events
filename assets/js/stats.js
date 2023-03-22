
let pastEvents = [];
for (let event of data.events){

    let currentDate= new Date(data.currentDate);
    let eventDate = new Date(event.date);
  
    if (eventDate<currentDate){
        pastEvents.push(event);
    }
}

console.log(pastEvents);

function getBigger(){
    return pastEvents.reduce((bigger, current) => {
        if ((current.assistance/current.capacity) > (bigger.assistance/bigger.capacity)){
            return current;
        } else {
            return bigger;
        }
    });
}


function getSmaller(pastevents){
    return pastEvents.reduce((smaller, current) => {
        if ((current.assistance/current.capacity) < (smaller.assistance/smaller.capacity)){
            return current;
        } else {
            return smaller;
        }
    });
}


function getLarger(){
    return data.events.reduce((larger, current) => {
        if (current.capacity > larger.capacity){
            return current;
        } else {
            return larger;
        }
    });
}

let tableStats = document.getElementById("eventStats")

let tableStatsHtml = "";
tableStatsHtml += `<tr>
        <td>${getBigger().name}</td>
        <td>${getSmaller().name}</td>
        <td>${getLarger().name} </td>
    </tr>`;

    tableStats.innerHTML = tableStatsHtml;




let upcomingEvents=[];

for (let event of data.events){

    let currentDate= new Date(data.currentDate);
    let eventDate = new Date(event.date);
  
    if (eventDate>currentDate){
        upcomingEvents.push(event);
    }
}


function getEventsbycategory(category,events) {
    return events.filter(event => {
        if (event.category.includes(category)) {
            return true;
        } else {
            return false;
        }
    });
}

function obtenerGanancias(events){   
    let sumarGanancias= 0;
    events.forEach(event => {if (event.assistance != null){
         sumarGanancias += (event.price * event.assistance);
        } else{
            sumarGanancias += (event.price * event.estimate);
        }
        })
    return sumarGanancias;

}

function obtenerAsistencia(events){   
    let sumarAsistencia = 0;
    let sumarCapacidad = 0
    events.forEach(event => {if (event.assistance != null){
        (sumarAsistencia += event.assistance) && (sumarCapacidad += event.capacity)
    } else{
        (sumarAsistencia += event.estimate) && (sumarCapacidad += event.capacity)
    } 
    })
    if (sumarAsistencia === 0){
        return "No attendance data"
    } else {
        return Math.round((sumarAsistencia/sumarCapacidad)*100) + "%" ;
    }
    

}

/////////////// Upcoming events

let tableUpcoming = document.getElementById("eventUpcoming");

let tableUpcomingHtml = "";
categorias.forEach(categoria => {
    let eventosFiltrados = getEventsbycategory(categoria, upcomingEvents);
    let ganancias = obtenerGanancias(eventosFiltrados);
    let porcentajeAsistencia = obtenerAsistencia(eventosFiltrados);

    tableUpcomingHtml +=  `<tr>
    <td>${categoria}</td>
    <td>${ganancias}</td>
    <td>${porcentajeAsistencia} </td>
</tr>`;
});

    tableUpcoming.innerHTML = tableUpcomingHtml;

    

/////////////// Past events

let tablePast = document.getElementById("eventPast");

let tablePastHtml = "";
categorias.forEach(categoria => {
    let eventosFiltrados = getEventsbycategory(categoria, pastEvents);
    let ganancias = obtenerGanancias(eventosFiltrados);
    let porcentajeAsistencia = obtenerAsistencia(eventosFiltrados);

    tablePastHtml +=  `<tr>
    <td>${categoria}</td>
    <td>${ganancias}</td>
    <td>${porcentajeAsistencia} </td>
</tr>`;
});

    tablePast.innerHTML = tablePastHtml;