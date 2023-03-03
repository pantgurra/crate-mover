import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 15px;
  margin: 5px;
  border-radius: 5px;
  border-width: 0;
  background-color: var(--colors-light);
  text-transform: uppercase;
  color: #292d3e;
  font-weight: bold;
  font-size: 15px;
  &:disabled {
    opacity: 0.5;
  }
` 