import styled from "styled-components";

const Output = styled.ul`
  list-style-type: none;
  background-color: var(--colors-black);
  flex: 0.5;
  border: none;
  border-radius: 10px;
  margin: 5px;
  padding: 10px;
  color: #bfc7d5;
  white-space: pre-wrap;
  font-family: monospace;
  overflow-y: scroll;
  li {
    &.error {
      color: red;
    }
  }
`;

export default Output;
