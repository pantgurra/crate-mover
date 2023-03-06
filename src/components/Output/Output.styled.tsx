import styled from "styled-components";

const Output = styled.div`
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
  span {
    &.error {
      color: red;
    }
  }
`;

export default Output;
