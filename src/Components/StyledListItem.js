import styled, { css } from "styled-components";

const StyledListItem = styled.li`
  ${({ variant }) =>
    variant === "category" &&
    css`
      font-size: 1.4rem;
      font-weight: bold;
      margin: 20px 0;
    `}
`;

export default StyledListItem;
