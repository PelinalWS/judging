const url = 'ws://localhost:5000'
const server = new WebSocket(url)

const message = document.getElementById('messages')
const input = document.getElementById('message')
const button = document.getElementById('send')

button.disabled = true
button.addEventListener('click', sendMessage(), false)

server.onopen = function(){
    button.disabled = false
}

function sendMessage(){
    const text = input.value
    server.send(text)
}