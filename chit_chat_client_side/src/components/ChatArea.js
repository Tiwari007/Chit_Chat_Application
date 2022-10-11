import React, {  useRef, useState } from "react";
import styles from './Styles/ChatArea.module.css'

const ChatArea = ({ socket }) => {
  let [messages, setMessages] = useState([]);

  const messageInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let message = messageInput.current.value;

    // SEND MESSAGES DATA BACK TO SERVER SO IT CAN TRANSFER TO ALL CLIENTS
    socket.emit("messages_data", message);
    console.log("from client ", message);

    messageInput.current.value = "";
  };

  // RECEIVE MESSAGE DATA FROM SERVER
  socket.on("messages_from_server", (data) => {
    // messages.push(data);
    setMessages(() => data)
    console.log("from server ", messages);
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.chatbox}>
            {messages?.map((text, id) => {
              return (
              <div key={id}>
                <p className={styles.text}>{text}</p>
              </div>
              )
            })}
        </div>
          <form className="Input" onSubmit={submitHandler}>
            <input
              type="text"
              ref={messageInput}
              placeholder="type your message..."
            />
            <button type="submit">Send</button>
          </form>
        {/* <div className="activeusers">
          <h2>Active Users</h2>
          <ul id="users"></ul>
        </div> */}
      </div>
    </>
  );
};

export default ChatArea;
