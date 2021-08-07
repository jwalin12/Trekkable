const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://jwalin:<password>@cluster0.blnvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

//Replace <password> with the password for the jwalin user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are