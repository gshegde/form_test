import React, { useState, useEffect } from 'react';
import Submit from './Buttoncomp'
import { Box, Typography, TextField } from '@material-ui/core'


const Password = ({ onclickHandler, onclickHandlerPass }) => {



    return (
        <div>
            <TextField style={{
                width: "300px",
                marginLeft: "20px",
                marginTop: "20px"
            }} margin="dense" id="pass" placeholder="Password" variant="outlined" />
            {/* <input type="password" id="pass" placeholder="Enter you password" /> */}
            <Submit onclickHandler={onclickHandler} onclickHandlerPass={onclickHandlerPass} />
        </div>
    );
}

export default Password;