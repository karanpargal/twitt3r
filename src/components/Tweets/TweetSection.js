import React, { useEffect } from "react";
import { Apps, ModelNames, FileType, Currency } from "@dataverse/runtime-connector";
import TweetCard from "../TweetCard/TweetCard";

const TweetSection = (props) => {
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

  const uploadStream = async () => {
    const target = document.getElementById("image");
    console.log(target.files[0]);
    const streamObject = await runtimeConnector.createStream({
      did: did,
      appName: Apps.Dataverse,
      modelName: ModelNames.post,
      streamContent: {
        appVersion: "0.0.1",
        content: target.files[0],
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

    const loadProfile = async () => {
      getDID();
      getStream();
    };

  useEffect(() => {
    loadProfile();
  }, [did]);

  return (
    <div className="flex flex-wrap mt-8">
      {/* Tweet-Section */}
      <div className="grow mx-8 rounded-lg h-[100%] text-white bg-regal-blue py-10">
        <form
          onSubmit={() => {
            createStream(content);
          }}
        >
          <textarea
            placeholder="What's happening?"
            maxLength={280}
            className="w-96 h-20 p-2 border border-gray-300 rounded-lg placeholder-gray-400 text-black"
            onChange={(e) => setContent(e.target.value)}
          />
          <div>
            <button type="submit" disabled={content.length === 0}>
              Tweet
            </button>
          </div>
        </form>
        <div className="mt-2">
          {tweets.map((tweet, index) => {
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

      {/* Timeline-section */}
      <div className="flex-none bg-regal-blue w-72 h-[100%] text-black rounded-lg font-['Ubuntu-Light-300']mr-2">
      <h3 class="text-2xl mt-2 underline underline-offset-4 decoration-solid-2 decoration-sky-500 font-semibold text-white ">
              Future Prospects
            </h3>
        <ol class="text-left mt-6 mb-6 mx-2 relative ml-4 border-l border-gray-200 ">
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray rounded-full mt-1.5 -left-1.5 border border-white  "></div>
            <h3 className="text-white font-semibold text-left text-xl mt-2">
              Follow Your Favourites
            </h3>
        
        
            <p class="mt-1.5 mb-4 text-base text-left font-normal text-white ">
              Get in touch with your friends, surf through latest trends and many more.
            </p>
            
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
            
            <h3 class="text-lg font-semibold text-white ">
              Support multiple media options
            </h3>
            <p class="text-base mt-1.5 font-normal text-white ">
             Upload your photos, videos.
            </p>
          </li>
          <li class="ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            
            <h3 class="text-lg font-semibold text-white ">
              Display of on-chain assets
            </h3>
            <p class="text-base mt-1.5 font-normal text-white ">
              Your own piggy-bank collection of your favourite tweets.
            </p>
            
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TweetSection;
