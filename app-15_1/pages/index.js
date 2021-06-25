import { MongoClient } from "mongodb";
import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a list of meetups!!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://jayraj:rock1999@cluster0.glenl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetipsCollection = db.collection("meetups");

  const meetups = await meetipsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
};

export default HomePage;
