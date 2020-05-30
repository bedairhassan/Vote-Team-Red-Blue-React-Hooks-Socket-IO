// npm run watch // runs nodemon
var express = require('express');
var socket = require('socket.io');

// import {mysocketid} from './events'
// import {mysocketid} from './events'

// App setup
var app = express();
var server = app.listen(4000, function () {
    console.log('listening for requests on port 4000,');
});

// Static files
// app.use(express.static('public'));

// Server Variables
var users = [] // {socketid,whocansendmefr}
var vote = [
    {team:`red`,count:0},
    {team:`blue`,count:0}
]

// server functions
var Increment = team=>{

    for (let i=0;i<vote.length;i++){

        if(team===vote[i].team){
            vote[i].count++;
        }
    }
}

var Vote = ({event,team})=>{
    
    Increment(team)
    console.log(vote)
    io.emit(event,vote) // I just emit to the user, vote array
}

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    socket.emit(`Vote`,vote)
    socket.on(`Vote`,team=> Vote({team,event:`Vote`}))

    // base code
    socket.emit(`users`,users)
    // base code, users.push
    console.log(new Date(),`users.push`,{src:socket.id})
    users.push({src:socket.id})
    //
    console.log(new Date(),`users`,users)
    
    // cheat sheet
    // io.emit(event, data)
    // socket.broadcast.to(target).emit(event, data)
    
    socket.on(`disconnect`, () => {

        for (let i = 0; i < users.length; i++) {

            if (users[i].src === socket.id) {
                
                users.splice(i, 1)
                break;
            }
        }

        socket.disconnect()
        
        console.log(new Date(), `users`, users)
        io.emit(`users`,users)
    })
});
