import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core'


const Submit = ({ onclickHandler, onclickHandlerPass }) => {
    return (
        <div>
            <Button style={{
                width: "100px",
                marginLeft: "20px",
                marginTop: "20px"
            }} name="name" onClick={(e) => onclickHandler(e)} variant="contained" color="secondary">
                Submit
                </Button>
            {/* <button name="name" onClick={(e) => onclickHandler(e)}>Submit</button>
            <button>Cancel</button> */}
            <Button style={{
                width: "100px",
                marginLeft: "20px",
                marginTop: "20px"
            }} name="name" onClick={(e) => onclickHandlerPass(e)} variant="contained" color="secondary">
                Cancel
                </Button>
        </div>
    );
}

export default Submit;