const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();
const username1 = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
//middleware
app.use(express.json());
app.use(cors());

//User:shanmuuka7482
//password: uiySw8Mg4P5n3fiT
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${username1}:${password}@jobconnect.hm58qoq.mongodb.net/?retryWrites=true&w=majority&appName=JobConnect`;

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //craete DB
    const DB = client.db("JobConnect");
    const jobCollection = DB.collection("demoJobs");
    const UrlCollection = DB.collection("Resume");
    //post a job
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      console.log(body);
      const result = await jobCollection.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "can not insert! try again",
          status: false,
        });
      }
    });

    //post the resume
    app.post("/resume-upload", async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      console.log(body);
      const result = await UrlCollection.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "can not insert! try again",
          status: false,
        });
      }
    });
    //get all jobs
    app.get("/all-resume", async (req, res) => {
      const jobs = await UrlCollection.find().toArray();
      res.send(jobs);
    });

    //get all jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobCollection.find().toArray();
      res.send(jobs);
    });

    //get single job by id
    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      const job = await jobCollection
        .find({
          _id: new ObjectId(id),
        })
        .toArray();
      res.json(job);
    });

    //get jobs by email
    app.get("/myjobs/:email", async (req, res) => {
      console.log(req.params.email);
      const job = await jobCollection
        .find({ Posted_By: req.params.email })
        .toArray();
      res.send(job);
    });
    //update job
    app.patch("/update-job/:id", async (req, res) => {
      const id = req.params.id;
      const jobdata = req.body;
      const filter = { _id: new ObjectId(id) };
      const option = { upsert: true };
      const updateDoc = {
        $set: {
          ...jobdata,
        },
      };
      const result = await jobCollection.updateOne(filter, updateDoc, option);
      res.send(result);
    });
    //delete a job
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const results = await jobCollection.deleteOne(filter);
      res.send(results);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
