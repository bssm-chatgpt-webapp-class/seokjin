import { useState, useEffect } from "react";
import { Header, Main } from "./components/index.js";
import TextField from "./components/TextField.jsx";
import { io } from "socket.io-client";

const socket = io("http://localhost:8081");

const App = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    socket.on("chat", (data) => {
      setChatMessages((prev) => [
        ...prev,
        { isMine: false, message: data.replace("response:", "") },
      ]);

      console.log(data);
    });
  }, []);
  const sendChat = (message) => {
    setChatMessages((prev) => [...prev, { isMine: true, message }]);
    socket.emit("chat", message);
  };

  return (
    <div>
      <Header />
      <Main message={chatMessages} />
      <TextField
        setMessage={setMessage}
        sendChat={sendChat}
        message={message}
      />
    </div>
  );
};

export default App;
