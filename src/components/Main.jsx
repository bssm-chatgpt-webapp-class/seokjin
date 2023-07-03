import styled from "styled-components";
import { ChatItem } from "./index";
import { profileImageLink } from "../fixtures";

const Main = () => {
  return (
    <StyledMain>
      <ChatItem text="어절 방구" imgLink={profileImageLink} />
      <ChatItem text="어절 방구" imgLink={profileImageLink} />
      <ChatItem text="어절 방구" imgLink={profileImageLink} />
      <ChatItem text="어절 방구" imgLink={profileImageLink} />
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.main``;
