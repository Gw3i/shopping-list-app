import styled, { css } from "styled-components";

const StyledListItem = styled.li`
  ${({ variant }) =>
    variant === "category" &&
    css`
      font-size: 1.4rem;
      font-weight: bold;

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
        `}
    `}
`;

export default StyledListItem;
