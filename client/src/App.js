import { useState } from "react";
import { Header, Main } from "./components/index.js";
import TextField from "./components/TextField.jsx";

const App = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <Header />
      <Main message={message} />
      <TextField setMessage={setMessage} />
    </div>
  );
};

export default App;
