import React, { useEffect, useState } from "react";
import { Currency } from "@dataverse/runtime-connector";

const TweetCard = (props) => {
  const { runtimeConnector } = props;
  const [isMonetized, setIsMonetized] = useState(false);

  const monetize = async () => {
    const dataToken = await runtimeConnector.createDatatoken({
      streamId: props.stream,
      collectLimit: 100,
      amount: 0.0001,
      currency: Currency.WMATIC,
    });
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
              <button class="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                Already Monetized
              </button>
            ) : (
              <button
                onClick={monetize}
                class="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  ></path>
                </svg>
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
