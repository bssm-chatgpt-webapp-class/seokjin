import styled from "styled-components";
import { HambugIcon, PlusIcon } from "../Icons";

const Header = () => {
  return (
    <StyledHeader>
      <HambugIcon />
      <div>New chat</div>
      <PlusIcon />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 43px;
  width: 100%;
`;
