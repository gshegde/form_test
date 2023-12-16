import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import FolderIcon from "@material-ui/icons/Folder";
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined";
import { FileExplorer } from "./utils";

function Explorer(props) {
  const { fileData }: FileExplorer = props;
  console.log("gsh", fileData);
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const onFolderClick = () => {
    setIsFolderOpen(!isFolderOpen);
  };

  return (
    <>
      <div onClick={onFolderClick}>
        <span>📂 {""}</span>
        {fileData.name}
      </div>
      {isFolderOpen &&
        fileData?.content?.map((file) => {
          return (
            <li>
              <span>📝{""} </span>
              {file}
            </li>
          );
        })}
      <div style={{ display: !isFolderOpen ? "none" : "", padding: "10px" }}>
        {fileData?.children?.map((folder: FileExplorer) => {
          return <Explorer fileData={folder} />;
        })}{" "}
      </div>
    </>
  );
}

export default Explorer;
