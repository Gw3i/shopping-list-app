import styled, { css } from "styled-components";

const StyledUnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  ${({ variant }) =>
    variant === "category" &&
    css`
      display: block;
    `}
`;

export default StyledUnorderedList;
