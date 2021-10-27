const main= document.querySelector('main')
const section= document.querySelector('section')
const button= document.querySelector('.submit')
const eventName= document.querySelector('.eventName')
const eventDate= document.querySelector('.eventDate')
var eventList= document.querySelector('li')

if(localStorage.getItem("nom") !== null){
    let eventList= document.createElement('li')
    eventList.innerHTML= `${localStorage.getItem("nom") + localStorage.getItem("date")}`
    let removeBtn= document.createElement('button')
    removeBtn.innerHTML= 'X'
    removeBtn.onclick= () => {
        main.removeChild(eventList)
        localStorage.removeItem('nom')  
        localStorage.removeItem('date') 
    }
    eventList.appendChild(removeBtn)
    main.appendChild(eventList)
}
const events= [{
    name: eventName.value,
    date: eventDate.value
}]


button.onclick= () => {
 let eventList= document.createElement('li')
 let removeBtn= document.createElement('button')
 let countDown= document.createElement('input')
 countDown.type= "time"
 removeBtn.innerHTML= "X"
 removeBtn.onclick= () => {
     main.removeChild(eventList)
 }
 eventList.innerText= eventName.value + ' ' + eventDate.value;
 eventList.appendChild(removeBtn)
 eventList.appendChild(countDown)
 main.appendChild(eventList) 
 console.log(eventList)

 localStorage.setItem("nom", eventName.value)
 localStorage.setItem("date", eventDate.value)
}

