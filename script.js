const main= document.querySelector('main')
const section= document.querySelector('section')
const button= document.querySelector('.submit')
const eventName= document.querySelector('.eventName')
const eventDate= document.querySelector('.eventDate')

const stored= JSON.parse(localStorage.getItem('listEvent'))

if(stored !== null){
eventList= localStorage.getItem('listEvent')
eventList= stored;
}
function saveToStorage(){
    localStorage.setItem('listEvent', JSON.stringify(eventList))
}
button.addEventListener('click', saveToStorage)
const events= [{
    name: eventName.value,
    date: eventDate.value
}]
button.onclick= () => {
 let eventList= document.createElement('li')
 let removeBtn= document.createElement('button')
 removeBtn.innerHTML= "X"
 removeBtn.onclick= () => {
     main.removeChild(eventList)
 }
 eventList.innerText= eventName.value + ' ' + eventDate.value;
 eventList.appendChild(removeBtn)
 main.appendChild(eventList) 
}
