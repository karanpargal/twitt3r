import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { RuntimeConnector, Extension,Browser } from "@dataverse/runtime-connector";
import { METAMASK, CRYPTO_WALLET_TYPE } from "@dataverse/runtime-connector";
import { useEffect } from "react";
import Tweets from "./components/Tweets/Tweets";

const runtimeConnector = new RuntimeConnector(Extension);

function App() {

  return (
    <div className="App">
      <Navbar runtimeConnector={runtimeConnector}/>
      <Tweets runtimeConnector={runtimeConnector}/>

    </div>
  );
}

export default App;