const main= document.querySelector('main')
const section= document.querySelector('section')
const button= document.querySelector('.submit')
const eventName= document.querySelector('.eventName')
const eventDate= document.querySelector('.eventDate')
const eventTime= document.querySelector('.eventTime')

let events = JSON.parse(localStorage.getItem('events'))
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
if (events === null) {
    events = []
}
var months = 12
button.onclick= () => {
    let date= new Date(eventDate.value)
    let now= new Date().getTime();
    var elapsed= date - now;
    var days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    var hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    var time= days + "j " + hours + "h " + minutes + "m " + seconds + "s "

    inputValue= eventName.value + ' / ' + date.toLocaleDateString('fr-FR', options) + ' / ' + eventTime.value + ' ' + time
    events.push(inputValue)
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

