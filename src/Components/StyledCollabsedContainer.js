import styled, { css } from "styled-components";

const StyledCollabsedContainer = styled.div`
  padding: 10px 0;

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

export default StyledCollabsedContainer;
