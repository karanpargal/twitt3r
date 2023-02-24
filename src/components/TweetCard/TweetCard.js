import React, { useEffect, useState } from "react";
import { Currency } from "@dataverse/runtime-connector";

const TweetCard = (props) => {
  const { runtimeConnector } = props;
  const [isMonetized, setIsMonetized] = useState(false);
  const [tokenID, setTokenID] = useState("");


  const buy = async () => {
    const res = await runtimeConnector.collect(
      tokenID,
    );
    console.log(res);
  };

  const monetize = async () => {
    const dataToken = await runtimeConnector.createDatatoken({
      streamId: props.stream,
      collectLimit: 100,
      amount: 0.0001,
      currency: Currency.WMATIC,
    });
    setTokenID(dataToken.datatokenId);
    setIsMonetized(true);
  };

  return (
    <div class=" p-10 flex items-center justify-center">
      <div class="bg-white  border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-xl">
        <div class="flex justify-between">
          <div class="flex items-center">
            <img
              class="h-11 w-11 rounded-full"
              src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg"
            />
            <div class="ml-1.5 text-sm leading-tight">
              <span class="text-gray-500 dark:text-gray-400 font-normal block">
                {props.did}
              </span>
            </div>
          </div>
        </div>
        <p class="text-black block text-xl leading-snug mt-3">
          {props.tweet}
        </p>
        {props.image ? (
          <img
            class="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700"
            src="https://pbs.twimg.com/media/EpkuplDXEAEjbFc?format=jpg&name=medium"
          />
        ) : null}
        <div class="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
        <div class="flex justify-between">
          <div class="flex items-center">
            {isMonetized ? (
              <div class="flex items-center text-gray-500  justify-around">

              <button class="hover:text-gray-700 p-2 border-2 rounded-md w-60">
                Already Monetized
              </button>
              <button class="hover:text-gray-700 ml-48 p-2 border-2 rounded-md w-28" onClick={buy}>
                Buy
              </button>
              </div>
            ) : (
              <button
                onClick={monetize}
                class="text-gray-500 hover:text-gray-700 p-2 border-2 rounded-md w-60"
              >
                <span class="ml-1 text-sm">Monetize</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
