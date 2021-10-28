const main= document.querySelector('main')
const section= document.querySelector('section')
const button= document.querySelector('.submit')
const eventName= document.querySelector('.eventName')
const eventDate= document.querySelector('.eventDate')

if(localStorage.getItem("nom") !== null){
    let eventList= document.createElement('li')
    eventList.innerHTML= `${localStorage.getItem("nom")}`
main.appendChild(eventList)
}

const events= []
let i= 0;
i< events.length;
button.onclick= () => {
    let eventsArray= {
        name: eventName.value,
        date: eventDate.value
    }
    events.push(eventsArray)
    console.log(eventsArray)
    var list= document.createElement('li')
    list.innerHTML= eventsArray.date + '-' + eventsArray.name;
    main.appendChild(list)
    localStorage.setItem('nom', JSON.stringify(events))
}




