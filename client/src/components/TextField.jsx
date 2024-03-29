import { useState } from "react";
import { SendIcon } from "./Icons";

const TextField = ({ setMessage, sendChat }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        position: "sticky",
        bottom: 0,
      }}
    >
      <input
        placeholder="입력해."
        onChange={(e) => setCurrentMessage(e.target.value)}
        value={currentMessage}
      />
      <SendIcon
        onClick={() => {
          sendChat(currentMessage);
        }}
      />
    </div>
  );
};

export default TextField;
