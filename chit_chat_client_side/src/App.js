import "./App.css";
import { io } from "socket.io-client";
import Chit_Chat_Area from "./components/Chit_Chat_Area";

function App() {
  const socket = io("http://localhost:8080");
  socket.on('connect', () => console.log(`Client connected: ${socket.id}`));





  // RECEIVING DATA FROM SERVER TO CLIENT
  socket.on("message", (data) => {
    console.log(data);
  })


  // SENDING DATA FROM CLIENT TO SERVER
  socket.emit("data", {
    data: "hello I'm from client"
  })

  return <Chit_Chat_Area socket={socket}/>;
}

export default App;
