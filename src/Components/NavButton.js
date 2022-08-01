import styled from "styled-components";

const NavButton = styled.button`
  padding: 8px 4px;
  margin-left: 5px;
  opacity: ${({ disabled }) => {
    return disabled ? "0.3" : "1";
  }};
`;

export default NavButton;
