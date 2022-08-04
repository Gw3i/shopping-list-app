import styled, { css } from "styled-components";

const StyledCollabsedText = styled.p`
  ${({ display }) =>
    display === "shown" &&
    css`
      display: block;
    `}
  ${({ display }) =>
    display === "hidden" &&
    css`
      display: none;
    `}
`;

export default StyledCollabsedText;
