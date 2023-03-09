var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

setTimeout(function() {
    mongoose.connect('mongodb://localhost:27017/MedicineDB', { useNewUrlParser: true ,useUnifiedTopology: true}).
     catch(error => console.log('mongo err',error));
    }, 60000);

module.exports={mongoose};