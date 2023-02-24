import React from "react";
import {
  Apps,
  ModelNames,
  METAMASK,
  CRYPTO_WALLET_TYPE,
} from "@dataverse/runtime-connector";

const Navbar = (props) => {
  const [identity, setIdentity] = React.useState(null);
  const { runtimeConnector } = props;

  const Wallet = async () => {
    
    const did = await runtimeConnector.connectWallet({
      name: METAMASK, type: CRYPTO_WALLET_TYPE 
    });
    
    await runtimeConnector.switchNetwork(80001);
    const identity = await runtimeConnector.connectIdentity({
      wallet: { name: METAMASK, type: CRYPTO_WALLET_TYPE },
      appName: Apps.Dataverse,
      modelNames: [ModelNames.post],
    });
    console.log(identity);
    setIdentity(identity);
  };

  return (
    <nav class="bg-regal-blue px-2 sm:px-4 py-2.5  ">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" class="flex items-center">
          <span class="self-center text-xl text-white font-semibold whitespace-nowrap">
            Twitt3r
          </span>
        </a>
        <div class="flex md:order-2">
          {identity ? (
            <button class="w-48 flex text-white bg-blue-600 items-center p-2 text-base font-normal text-gray-900 rounded-lg overflow-hidden">
              {identity}
            </button>
          ) : (
            <button
              class="flex items-center p-2 text-base font-normal bg-white text-gray-900 rounded-lg md:hover:bg-Bluish-white overflow-hidden"
              onClick={() => {
                Wallet();
              }
              }
            >
              Connect Wallet
            </button>
          )}
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-col p-4 mt-4 ml-20 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                class="block py-2 pl-8 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:hover:text-blue-700 md:hover:underline underline-offset-4 decoration-solid-4 decoration-sky-500 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-16 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:hover:underline underline-offset-4 decoration-solid-4 decoration-black md:p-0 "
              >
                Notifications
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-16 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:hover:underline underline-offset-4 decoration-solid-4 decoration-black md:p-0 "
              >
                Explore
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-16 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:hover:underline underline-offset-4 decoration-solid-4 decoration-black md:p-0 "
              >
                Team
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
