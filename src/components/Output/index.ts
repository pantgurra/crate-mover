import Output from "./Output.styled";

export interface OutputInterface {
  type: 'success' | 'error' | 'info';
  message: string;
}

export default Output;
