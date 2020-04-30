import React, { useState, useEffect } from 'react';
import Password from './components/Password';
import { Box, Typography, TextField } from '@material-ui/core'
import './App.css';

const App = () => {

  const [getName, setName] = useState();
  const [getPass, setPass] = useState();
  const onclickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    let Name = document.getElementById("testControl").value
    document.getElementById("pass").value = ""
    // document.getElementById("testControl").value = "";
    console.log(Name);
    setName(Name);
  }

  const onclickHandlerPass = () => {
    document.getElementById("pass").value = "";
    document.getElementById("testControl").value = "";
    setName("")
  }
  return (
    <Box display="flex" flexDirection="column" alignContent="center" alignItems="center" boxShadow={6} style={{
      width: "400px",
      height: "400px",
      marginLeft: "600px",
      marginTop: "50px",
      borderRadius: 6,
      boxshadow: "5px 10px"

    }}>
      <Typography
        style={{ color: "#3d3110", marginTop: "50px" }}
        variant="h4" align="center" color="textSecondary" > Welcome {getName}</Typography>

      <form>
        <TextField style={{
          width: "300px",
          marginLeft: "20px",
          marginTop: "20px"
        }} margin="dense" id="testControl" placeholder="Name" variant="outlined" />
        {/* <input type="text" id="testControl" placeholder="UserName" /> */}
        <Password onclickHandler={onclickHandler} onclickHandlerPass={onclickHandlerPass} />

      </form>
    </Box>

  );
}

export default App;
