const main= document.querySelector('main')
const section= document.querySelector('section')
const button= document.querySelector('.submit')
const eventName= document.querySelector('.eventName')
const eventDate= document.querySelector('.eventDate')

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
let stored= JSON.parse(localStorage.getItem('nom'))

if(stored !== null){
    events.push(stored)
    for (const x of stored){
        console.log(x)
        let li= document.createElement('li')
        li.innerHTML= stored.name + stored.date;
        main.appendChild(li)
    }
}
else{
    stored= []
    localStorage.setItem("nom", JSON.stringify(events))
    console.log(stored)
}


