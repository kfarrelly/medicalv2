var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

setTimeout(function() {
    mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true ,useUnifiedTopology: true})
      .then(() => console.log('Mongo connected.'))
      .catch(error => console.log('mongo err',error));
    }, 10);

module.exports={mongoose};
