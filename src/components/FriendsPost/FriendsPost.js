import React from "react";
import { Apps, ModelNames, FileType, Currency } from "@dataverse/runtime-connector";


const FriendsPost = (props) => {
  const { runtimeConnector, did } = props;
  const [friendsPost, setFriendsPost] = React.useState([]);

  const getFriendsPost = async () => {
    const streams = await runtimeConnector.loadStreamsByModel({
      did: did,
      appName: Apps.Dataverse,
      modelName: ModelNames.post,
    });
    Object.keys(streams).forEach((stream) => {
      let tweet = streams[stream].content.content;
      setFriendsPost((prevTweets) => [...prevTweets, tweet]);
    });
  };

  useEffect(() => {
    getFriendsPost();
  }, [did]);

  return (
    <div>
      <div>
        <h1>Tweets by {did}</h1>
        {friendsPost.map((post) => (
          <TweetCard did={did} tweet={post} runtimeConnector={runtimeConnector}/>
        ))}
      </div>
    </div>
  );
};

export default FriendsPost;
