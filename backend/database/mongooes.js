var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

setTimeout(function() {
    mongoose.connect('mongodb://sarafuio:A3H7Vgn2c3g2@docdb-2023-03-09-16-03-46.cluster-c87an2pwav72.eu-west-1.docdb.amazonaws.com:27017/MedicineDB?replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false', { useNewUrlParser: true ,useUnifiedTopology: true})
      .then(() => console.log('Mongo connected.'))
      .catch(error => console.log('mongo err',error));
    }, 10);

module.exports={mongoose};
