const mongoose = require('mongoose');

const uri='mongodb://localhost:27017/reactwala'

const connectToMongo= (async()=> {
   await mongoose.connect(uri,
        {
        autoIndex: false,
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4 // Use IPv4, skip trying IPv6)
        }).then(()=>{
            console.log('connected to mongo successfully');
           
        }, err => {'error occured' })
})
module.exports =connectToMongo