const main= document.querySelector('main')
const section= document.querySelector('section')
const button= document.querySelector('.submit')
const eventName= document.querySelector('.eventName')
const eventDate= document.querySelector('.eventDate')
const eventTime= document.querySelector('.eventTime')

var events = JSON.parse(localStorage.getItem('events'))
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
if (events === null) {
    events = []
}
var months = 12
button.onclick= () => {
let arr= {}
    arr['nom']= eventName.value
    arr['date']= eventDate.value
    arr['time']= eventTime.value

    inputValue= arr.nom + ' / ' + new Date(arr.date).toLocaleDateString('fr-FR', options) + ' / ' + arr.time

    events.push(arr)

    var x= setInterval(() => {
        var now = new Date().getTime();
        var dateEvent= new Date(eventDate.value)
        var distance = dateEvent - now;
    
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        p.innerHTML= days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
          
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000)

    var sectionEvents= document.createElement('section')
    section.appendChild(sectionEvents)
    let list= document.createElement('li')
    list.innerHTML= inputValue
    let p= document.createElement('p')
    sectionEvents.appendChild(list)
    list.appendChild(p)

    localStorage.setItem('events', JSON.stringify(events))
}

for (const event of events) {
    var sectionEvents= document.createElement('div')
    section.appendChild(sectionEvents)
    sectionEvents.setAttribute('class', 'eventList')
    let li= document.createElement('li')
    li.innerHTML= event.nom + ' ' + new Date(event.date).toLocaleDateString('fr-FR', options) + ' ' + event.time
    let storedCountDown= document.createElement('p')
    sectionEvents.appendChild(li)
    li.appendChild(storedCountDown)

    var x= setInterval(() => {
        var now = new Date().getTime();
        var dateEvent= new Date(event.date)
        var distance = dateEvent - now;
    
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        storedCountDown.innerHTML= `${days}d ${hours}h ${minutes}m ${seconds}s `;
          
        if (distance < 0) {
          clearInterval(x);
          storedCountDown.innerHTML = "EXPIRED";
        }
      }, 1000)
}

