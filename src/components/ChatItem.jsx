const ChatItem = ({ imgLink, text }) => {
  return (
    <div style={{ display: "flex" }}>
      <img src={imgLink} alt="profile-img" style={{ width: 30, height: 30 }} />
      <pre style={{ whiteSpace: "pre-wrap" }}>{text}</pre>
    </div>
  );
};

export default ChatItem;
