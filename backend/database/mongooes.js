var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

setTimeout(function() {
  /*mongoose.connect('mongodb://localhost:27017/MedicineDB', { useNewUrlParser: true ,useUnifiedTopology: true}).
  catch(error => console.log('mongo err',error));
}, 60000);*/
    mongoose.connect('mongodb://sarafuio:rHk+8U#(@docdb-2023-03-09-12-08-32.cluster-c87an2pwav72.eu-west-1.docdb.amazonaws.com:27017/MedicineDB?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false', { useNewUrlParser: true ,useUnifiedTopology: true})
      .then(() => console.log('Mongo connected.'))
      .catch(error => console.log('mongo err',error));
    }, 60000);

module.exports={mongoose};
