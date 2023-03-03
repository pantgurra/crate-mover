import styled from "styled-components";

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const Crate = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--colors-secondary);
  color: var(--colors-white);
  margin: 5px;
  font-weight: bold;
  &:first-child, &:last-child {
    box-sizing: border-box;
    border: var(--colors-white) 2px solid;
  }
  &:last-child {
    background-color: transparent;
  }
`
