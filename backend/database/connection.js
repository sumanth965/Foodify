const mongoose = require('mongoose');

function RunServer() {
    try {
        mongoose.connect('mongodb://localhost:27017/FOODDIIFYY');
        console.log('mongodb connected');
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = RunServer //exploring the function RunServer
