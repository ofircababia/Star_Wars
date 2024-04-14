import React from 'react';
import IconButton from '@mui/material/IconButton'; // Import IconButton
import LoopIcon from '@mui/icons-material/Loop';


function Loading() { // "loading..." was deleted
  // return <p>{message}</p>;
  return (
    <div >
      <div id='loading_div'>
      <LoopIcon id='loading_icon'/>
      <br/>
      </div>
      <br/>
      <div>
      <strong><p style={{textAlign:'center'}}>Loading. Please Wait</p></strong>
      </div>
    </div>    
  );
}

export default Loading;