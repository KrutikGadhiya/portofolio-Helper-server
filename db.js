const mongoose = require('mongoose');
require('dotenv').config()

const MONGODBURI = process.env.MONGODB_URI;

const client = mongoose.connect(MONGODBURI, { useNewUrlParser: true, useUnifiedTopology: true });

const dbObject = mongoose.connection

dbObject.on('connected', () => {
  console.log("MongoDB Connection Successful :\)");
})
dbObject.on('error', () => {
  console.log("MongoDB Connection Failed :\(");
})