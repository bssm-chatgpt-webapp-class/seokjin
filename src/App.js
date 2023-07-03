import { useState } from "react";
import { Header, Main } from "./components/index.js";
import TextField from "./components/TextField.jsx";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [message, setMessage] = useState("");
  const onClick = () => {
    setCurrentQuestion(message);
  };
  return (
    <div>
      <Header />
      <Main currentQuestion={currentQuestion} />
      <TextField message={message} setMessage={setMessage} onClick={onClick} />
    </div>
  );
};

export default App;
