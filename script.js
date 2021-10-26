const main= document.querySelector('main')
const button= document.querySelector('button')
const eventName= document.querySelector('.eventName')
const eventDate= document.querySelector('.eventDate')
const stored= localStorage.getItem('text')
const event= document.querySelector('li')

button.onclick= () => {
 let event= document.createElement('li')
 let removeBtn= document.createElement('button')
 removeBtn.innerHTML= "X"
 removeBtn.onclick= () => {
     main.removeChild(event)
 }
 event.innerText= eventName.value + ' ' + eventDate.value;
 event.appendChild(removeBtn)
 main.appendChild(event) 
 console.log(event)
}

