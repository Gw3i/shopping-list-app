import styled from "styled-components";

const StyledInput = styled.input`
  border: 1.5px solid lightgrey;
  padding: 10px 0;
  border-radius: 5px;
  font-size: 1rem;
  &::placeholder {
    padding-left: 10px;
  }
`;

export default StyledInput;
