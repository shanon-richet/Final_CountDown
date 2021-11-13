const main= document.querySelector('main')
const section= document.querySelector('section')
const button= document.querySelector('.submit')
const eventName= document.querySelector('.eventName')
const eventDate= document.querySelector('.eventDate')

let events = JSON.parse(localStorage.getItem('events')) || []

button.onclick= () => {
    let inputValue= eventName.value + eventDate.value
    events.push(inputValue)
    console.log(inputValue)
    let list= document.createElement('li')
    list.innerHTML= inputValue
    section.appendChild(list)
    localStorage.setItem('events', JSON.stringify(events))
}

for (let i= 0; i < events.length; i++) {
    let li= document.createElement('li')
    li.innerHTML= events[i]
    section.appendChild(li)
}





