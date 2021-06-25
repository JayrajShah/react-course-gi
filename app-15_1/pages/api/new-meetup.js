import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://jayraj:rock1999@cluster0.glenl.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetipsCollection = db.collection("meetups");

    const result = await meetipsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup Inserted" });
  }
};

export default handler;
