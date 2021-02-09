var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

setTimeout(function() {

    mongoose.connect('mongodb://localhost:27017/MedicineDB', { useNewUrlParser: true }).
     catch(error => handleError(error));
    }, 60000);

module.exports={mongoose};