import React, { useState, useEffect } from 'react';
import Password from './components/Password';
import { fileExplorer, FileExplorer } from "./utils";
import './App.css';
import Explorer from "./Explorer";


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


export default App;
