import React from "react";
import './customButton.scss';

const customerButton = ({lable,clickhandler}) => {

    // By using Props we can give className Conditionally.
  return (
      <button className='custom-button' onClick={clickhandler}>{lable}</button>
   
  );
};

export default customerButton;
