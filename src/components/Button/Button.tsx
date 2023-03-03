import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { StyledButton } from "./Bytton.styled";

const Button: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>> = ({ref, ...props}) => (
  <StyledButton {...props}>{props.children}</StyledButton>
)

export default Button;
