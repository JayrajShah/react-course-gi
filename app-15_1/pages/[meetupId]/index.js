import { MongoClient, ObjectId } from "mongodb";
import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      img={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://jayraj:rock1999@cluster0.glenl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetipsCollection = db.collection("meetups");

  const meetups = await meetipsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  const client = await MongoClient.connect(
    "mongodb+srv://jayraj:rock1999@cluster0.glenl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetipsCollection = db.collection("meetups");

  const selectedMeetup = await meetipsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  console.log(selectedMeetup);

  client.close();

  return {
    props: {
      meetupData: {
        title: selectedMeetup.title,
        id: selectedMeetup._id.toString(),
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupDetails;
