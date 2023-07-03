import { profileImageLink } from "../fixtures";

const ChatItem = ({ imgLink, text }) => {
  return (
    <div style={{ display: "flex" }}>
      <img src={imgLink} alt="profile-img" style={{ width: 30, height: 30 }} />
      <div>{text}</div>
    </div>
  );
};

export default ChatItem;
