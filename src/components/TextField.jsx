import { SendIcon } from "./Icons";

const TextField = () => {
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
      <input placeholder="입력해." />
      <SendIcon />
    </div>
  );
};

export default TextField;
