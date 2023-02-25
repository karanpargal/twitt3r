import React, { useEffect } from "react";
import {
  Apps,
  ModelNames,
  FileType,
  Currency,
} from "@dataverse/runtime-connector";
import TweetCard from "../TweetCard/TweetCard";

const Tweets = (props) => {
  const { runtimeConnector } = props;
  const [tweets, setTweets] = React.useState([]);
  const [did, setDid] = React.useState("");
  const [content, setContent] = React.useState("");
  const [stream, setStream] = React.useState([]);

  const getDID = async () => {
    const did = await runtimeConnector.getCurrentDID();
    setDid(did);
  };

  // How to tweet
  const createStream = async () => {
    const streamObject = await runtimeConnector.createStream({
      did: did,
      appName: Apps.Dataverse,
      modelName: ModelNames.post,
      streamContent: {
        appVersion: "0.0.1",
        content: content,
      },
      fileType: FileType.Public,
    });
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
      setStream((prevStream) => [...prevStream, stream]);
      setTweets((prevTweets) => [...prevTweets, tweet]);
    });
  };

  useEffect(() => {
    getDID();
    getStream();
  }, []);

  return (
    <div className="mt-20 ml-80">
      {/* <button onClick={createStream}>Get Model ID</button> */}
      <form
        onSubmit={() => {
          createStream(content);
        }}
      >
        <textarea
          placeholder="What's happening?"
          maxLength={280}
          className="w-96 h-20 p-2 border border-gray-300 rounded-lg"
          onChange={(e) => setContent(e.target.value)}
        />
        <div>
          <input type="file" name="file" id="file" className="text-white" />
          <button type="submit" disabled={content.length === 0}>
            Tweet
          </button>
        </div>
      </form>
      <div className="mt-20">
        <h1 className="text-2xl">Tweets</h1>
        {tweets.slice(0).reverse().map((tweet, index) => {
          return (
            <div className="mt-2" key={index}>
              <TweetCard
                did={did}
                stream={stream[index]}
                tweet={tweet}
                runtimeConnector={runtimeConnector}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tweets;
