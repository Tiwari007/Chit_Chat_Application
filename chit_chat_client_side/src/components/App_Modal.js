import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  textAlign: "center",
  p: 10,
};

function App_Modal({socket}) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);


  const usernameInput = React.useRef()

  const submitHandler = (e) => {
    e.preventDefault()

    let username = usernameInput.current.value;

    // SEND USERNAME DATA TO SERVER
    socket.emit("username_data", username)

    handleClose()

  }

  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
      >
        <Box sx={style}>
            <form className="modal" onSubmit={submitHandler}>
              <h1 id="title">It's ChitChat Time</h1>
              <h3 id="content">Enter Your User Name</h3>
              <input ref={usernameInput} placeholder="Enter User Name" type="text" style={{width: "150px", height: "30px", marginRight: "20px"}}/>
              <Button type="submit" variant="contained">Submit</Button>
            </form>
        </Box>
      </Modal>
    </div>
  );
}

export default App_Modal;

// import React from "react";

// import { styles } from './Styles/Modal.module.css'

// const Modal = () => {
//   return (
//     <div>
//       <div className="backdrop"></div>
//   <form className="modal">

//     <h1 id="title">Welcome</h1>
//     <p id="content">Enter Your User Name</p>

//     <input placeholder="Enter User Name" type="text" />
//     <button>Submit</button>
// </form>
//     </div>
//   );
// };

// export default Modal;
