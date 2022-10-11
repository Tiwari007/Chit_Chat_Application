import React, { useRef, useState } from "react";
import styles from "./Styles/ChatArea.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const ChatArea = ({ socket }) => {
  let [data, setData] = useState([]);
  let [usernames, setUsernames] = useState([]);

  const messageInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let message = messageInput.current.value;

    if (message) {
      // SEND MESSAGES DATA BACK TO SERVER SO IT CAN TRANSFER TO ALL CLIENTS
      socket.emit("messages_data", message);
      console.log("from client ", message);

      messageInput.current.value = "";
    } else {
      alert("message can't be emptied");
    }
  };

  // RECEIVE MESSAGE DATA FROM SERVER
  socket.on("messages_from_server", (data) => {
    setData(() => data);
    console.log(data);
    // console.log("from server message", data.messages);
    // console.log("from server username", data.usernames);
  });

  // RECEIVE USERNAME DATA FROM SERVER
  socket.on("username_from_server", (data) => {
    setUsernames(() => data);
    console.log("from server", usernames);
  });

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.chatbox}>
          {data.message?.map((text, id) => {
            return (
              <div
                key={id}
                className={socket.id ? styles.text_left : styles.text_right}
              >
                <p>{data.user}</p>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        <form className={styles.inputBox} onSubmit={submitHandler}>
          <input
            type="text"
            ref={messageInput}
            placeholder="type your message..."
          />
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </form>
      </div>
      <div className={styles.activeUsers}>
        <h2>Active Users</h2>
        <ul id="users">
          {usernames?.map((username, id) => {
            return (
              <div>
              <Button variant="contained" key={id} sx={{ mr: 3, mb:2, mt:2 }}>
                {username}
              </Button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ChatArea;
