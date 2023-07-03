import styled from "styled-components";
import { ChatItem } from "./index";
import { chatGPTImageLink, profileImageLink } from "../fixtures";

const Main = ({ message }) => {
  return (
    <StyledMain
      style={{
        marginBottom: "100px",
        overfloY: "scroll",
      }}
    >
      {message.map((item) =>
        item.isMine ? (
          <ChatItem imgLink={profileImageLink} text={item.message} />
        ) : (
          <ChatItem imgLink={chatGPTImageLink} text={item.message} />
        )
      )}
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.main``;
