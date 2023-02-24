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
      <div className="flex-none bg-regal-blue w-72 h-[100%] text-black rounded-lg mr-2">
        <ol class=" mt-6 relative ml-4 border-l border-gray-200 ">
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray rounded-full mt-1.5 -left-1.5 border border-white "></div>
            <time class="mb-1 text-sm font-normal leading-none text-white ">
              February 2022
            </time>
            <h3 class="text-lg font-semibold text-white ">
              Application UI code in Tailwind CSS
            </h3>
            <p class="mb-4 text-base font-normal text-white ">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 "
            >
              Learn more{" "}
              <svg
                class="w-3 h-3 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
            <time class="mb-1 text-sm font-normal leading-none text-white">
              March 2022
            </time>
            <h3 class="text-lg font-semibold text-white ">
              Marketing UI design in Figma
            </h3>
            <p class="text-base font-normal text-white ">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <li class="ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time class="mb-1 text-sm font-normal leading-none text-white">
              April 2022
            </time>
            <h3 class="text-lg font-semibold text-white ">
              E-Commerce UI code in Tailwind CSS
            </h3>
            <p class="text-base font-normal text-white ">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
            <p class="text-base font-normal text-white ">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
            <p class="text-base font-normal text-white ">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
            <p class="text-base font-normal text-white ">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TweetSection;
