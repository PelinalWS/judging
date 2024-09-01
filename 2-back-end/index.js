const WebSocket = require('ws')

const wss = new WebSocket.Server({
    port: 5000
})

wss.on('connection', function(ws){
    ws.send("Connection established")
    ws.on('message', function(data){
        console.log("New entry, \"", data.toString(), "\"")
    })
})  