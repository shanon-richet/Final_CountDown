const main = document.querySelector('main')
const section = document.querySelector('div')
const button = document.querySelector('.submit')
const eventName = document.querySelector('.eventName')
const eventDate = document.querySelector('.eventDate')
const eventTime = document.querySelector('.eventTime')

var stored = JSON.parse(localStorage.getItem('events'))
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
var months = 12
function countDown(y) {
  var x = setInterval(() => {
    var now = new Date().getTime()
    var dateEvent = new Date(eventDate.value)
    var distance = dateEvent - now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    
    y.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
    if (distance < 0) {
      clearInterval(x)
      document.getElementById("demo").innerHTML = "EXPIRED"
    }
  }, 1000)
}
function create(y) {
  var sectionEvents = document.createElement('section')
  section.append(sectionEvents)
  sectionEvents.setAttribute('class', 'eventList')

  let div = document.createElement('div')

  let p0 = document.createElement('p')
  p0.innerHTML = y.nom

  let p1 = document.createElement('p')
  p1.innerHTML = new Date(y.date).toLocaleDateString('fr-FR', options)

  let p2 = document.createElement('p')
  p2.innerHTML = y.time

  sectionEvents.append(div)
  div.append(p0)
  div.append(p1)
  div.append(p2)

  countDown(p2)

  let removeBtn = document.createElement('button')
  removeBtn.setAttribute('class', 'remove')
  removeBtn.innerHTML = 'X'
  div.append(removeBtn)
}
button.addEventListener('click', addEvent)
function addEvent() {
  let newStore = []
  let arr = {
    "nom": eventName.value,
    "date": eventDate.value,
    "time": eventTime.value
  }
  // stored.push(Object(arr))

  if (typeof(stored) === 'object') {
    newStore.push(stored)
    newStore.push(arr)
  }
  create(arr)
  localStorage.setItem('events', JSON.stringify(newStore))
}

if (stored.length > 1) {
  for (const x of stored) {
    console.log(x)
    create(x)
  }
} else {
  create(stored)
}

const filteredArray = []
document.querySelector('.remove').onclick = (e) => {
  const stored = JSON.parse(localStorage.getItem('events'))
  const eventElement = e.target.parentElement
  eventElement.remove()
  const filtered = stored.find(element => element.nom !== eventElement)
  filteredArray.push(filtered)
  localStorage.removeItem('events')
  localStorage.setItem('events', JSON.stringify(filtered))
}
