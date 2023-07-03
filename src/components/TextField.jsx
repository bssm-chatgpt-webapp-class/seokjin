import { SendIcon } from "./Icons";

const TextField = ({ message, setMessage, onClick }) => {
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
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <SendIcon onClick={onClick} />
    </div>
  );
};

export default TextField;
