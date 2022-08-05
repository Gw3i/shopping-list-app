import styled, { css } from "styled-components";

const StyledCategoryButton = styled.button`
  font-size: 1.4rem;
  font-weight: bold;

  background: none;
  border: none;
  ${({ arrow = "default" }) =>
    arrow === "default" &&
    css`
      &::before {
        content: "▸ ";
      }
    `}
  ${({ arrow }) =>
    arrow === "toBottom" &&
    css`
      &::before {
        content: "▾ ";
      }
    `};
`;

export default StyledCategoryButton;
