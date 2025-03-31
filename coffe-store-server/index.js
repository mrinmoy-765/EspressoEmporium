const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ncoxxcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    const coffeCollection = client.db("ExpressoEmporium").collection("Coffee");
    const userCollection = client.db('ExpressoEmporium').collection("users");

    //insert data
    app.post("/coffee", async (req, res) => {
      const newCoffee = req.body;
      // console.log(newCoffee);
      const result = await coffeCollection.insertOne(newCoffee);
      res.send(result);
    });

    //get all data
    app.get("/coffee", async (req, res) => {
      const cursor = coffeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    //get specific data
    app.get("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeCollection.findOne(query);
      res.send(result);
    });

    //update data
    app.put("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedCoffee = req.body;
    
      console.log("Updating coffee with filter:", filter);
      console.log("New data:", updatedCoffee);
    
      const updateDoc = {
        $set: {
          name: updatedCoffee.name,
          chef: updatedCoffee.chef,
          supplier: updatedCoffee.supplier,
          taste: updatedCoffee.taste,
          category: updatedCoffee.category,
          details: updatedCoffee.details,
          photo: updatedCoffee.photo,
        },
      };
    
      const result = await coffeCollection.updateOne(filter, updateDoc);
      res.send(result);
    });
    

    //delete data
    app.delete("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeCollection.deleteOne(query);
      res.send(result);
    });




    //user related API's
    app.post('/users', async(req, res) =>{
      const newUser = req.body;
    //  console.log('creating new user', newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Coffe making server is running");
});

app.listen(port, () => {
  console.log(`Coffe Server is running on port: ${port}`);
});
