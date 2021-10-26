const stored= localStorage.getItem('listEvent')

if(localStorage.getItem('listEvent') !== null){
events= localStorage.getItem('listEvent')
eventList= stored;
}
function saveToStorage() {
    localStorage.setItem('listEvent', eventList)
}