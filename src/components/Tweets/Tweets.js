import React from "react";
import { Apps, ModelNames, FileType } from "@dataverse/runtime-connector";

const Tweets = (props) => {
  const { runtimeConnector } = props;
  const [tweets, setTweets] = React.useState([]);
  const [did, setDid] = React.useState("");

  const getDID = async () => {
    const did = await runtimeConnector.getDid();
    setDid(did);
  };

  // How to tweet
  const getModelID = async () => {
    const streamObject = await runtimeConnector.createStream({
      did: did,
      appName: Apps.Dataverse,
      modelName: ModelNames.post,
      streamContent: {
        appVersion: "0.0.1",
        content: "Hello World",
      },
      fileType: FileType.Public,
    });
    console.log(streamObject);
  };

  // How to get a tweet
  const getStream = async () => {
    const streams = await runtimeConnector.loadStreamsByModel({
      did: did,
      appName: Apps.Dataverse,
      modelName: ModelNames.post,
    });
    Object.keys(streams).forEach((stream) => {
      let tweet = streams[stream].content.content;
      setTweets((prevTweets) => [...prevTweets, tweet]);
    });
    console.log(tweets);
  };

  return (
    <div className="mt-20">
      {/* <button onClick={getModelID}>Get Model ID</button> */}
      <button onClick={getStream}>Get Stream</button>

      <div className="mt-20">
        <h1 className="text-2xl">Tweets</h1>
        {tweets.map((tweet, index) => {
          return (
            <p className="mt-2" key={index}>
              {tweet}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Tweets;
