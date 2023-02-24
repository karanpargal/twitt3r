import React from "react";
import Navbar from "../Navbar/Navbar";


const TweetSection = () => {
  return (
    <div className="flex flex-wrap mt-8">
      {/* Profile-Section */}
      <div class=" bg-regal-blue h-64 w-64 text-white max-w-sm  border border-gray-200 rounded-lg shadow ">
       
          <img class="rounded-t-lg" src="" alt="profile photo" />
       
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl text-white font-bold tracking-tight text-gray-900 ">
              name
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-70">bio</p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
     

      {/* Tweet-Section */}

      <div className="grow h-14 mx-8 rounded-lg text-white bg-regal-blue">
        Tweets{" "}
      </div>

      {/* Timeline-section */}
      <div className="flex-none bg-regal-blue w-72 text-black rounded-lg">
        <ol class=" mt-6 relative ml-4 border-l border-gray-200 ">
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg- gray rounded-full mt-1.5 -left-1.5 border border-white "></div>
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
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TweetSection;
