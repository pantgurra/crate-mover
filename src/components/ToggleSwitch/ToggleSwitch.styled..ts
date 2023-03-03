import styled from "styled-components";

export const Checkbox = styled.input`
  height: 0;
  width: 0;
  position: absolute;
  visibility: hidden;
`
export const Toggle = styled.div`
  position: absolute;
  z-index: 1;
  top: 3px;
  left: 3px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  transition: 0.2s;
  background: var(--colors-white);
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`

export const Label = styled.div`
  color: var(--colors-dark);
  position: relative;
  z-index: 100;
  height: 100%;
  font-weight: bold;
  font-size: 11px;
  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    &:first-child {
      left: 0;
    }
    &:last-child {
      right: 0;
    }
  }
`
export const Wrapper = styled.label`
  margin-left: auto;
  cursor: pointer;
  width: 100px;
  height: 50px;
  border-radius: 25px;
  background: var(--colors-light);
  position: relative;
  transition: background-color 0.2s;
  ${Checkbox}:checked + ${Toggle}  {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
  ${Checkbox}:active + ${Toggle} {
    width: 60px;
  }
`
