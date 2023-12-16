import React, { useState } from "react";
import ReactDOM from "react-dom";
import Explorer from "./Explorer";
import "./styles.css";
import { fileExplorer, FileExplorer } from "./utils";

function App() {
  return (
    <>
      <h1>File Explorer wizard</h1>
      {fileExplorer.map((folder: FileExplorer) => {
        return <Explorer fileData={folder} />;
      })}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
