import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { FolderIcon } from "@mui/icons-material";
import { FileExplorer } from "./utils";

function Explorer(props) {
  const { fileData }: FileExplorer = props;
  console.log("gsh", fileData);
  return (
    <>
      <div>
        <span>
          <FolderIcon />{" "}
        </span>
        {fileData.name}
      </div>
      <div>
        {fileData?.children?.map((folder: FileExplorer) => {
          return <Explorer fileData={folder} />;
        })}{" "}
        {fileData?.content?.map((file) => {
          return <li>{file}</li>;
        })}
      </div>
    </>
  );
}

export default Explorer;
