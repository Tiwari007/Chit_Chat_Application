import React from "react";

import { styles } from './Styles/Modal.module.css'

const Modal = () => {
  return (
    <div>
      <div className="backdrop"></div>
      <form className="modal">

        <h1 id="title">Welcome</h1>
        <p id="content">Enter Your User Name</p>

        <input placeholder="Enter User Name" type="text" />
        <button>Submit</button>
    </form>
    </div>
  );
};

export default Modal;
