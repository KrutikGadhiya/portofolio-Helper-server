const mongoose = require('mongoose');

const MONGODBURI = 'mongodb+srv://KK:krutik@cluster0.cxrlz.mongodb.net/Portofolio?retryWrites=true&w=majority';

const client = mongoose.connect(MONGODBURI, { useNewUrlParser: true, useUnifiedTopology: true });

const dbObject = mongoose.connection

dbObject.on('connected', () => {
  console.log("MongoDB Connection Successful :\)");
})
dbObject.on('error', () => {
  console.log("MongoDB Connection Failed :\(");
})