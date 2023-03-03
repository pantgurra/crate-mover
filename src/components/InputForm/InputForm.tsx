import { ChangeEvent, FC, FormEvent } from "react";
import Button from "../Button/Button";
import { Form, Textarea } from "./InputForm.styled";

interface InputFormProps {
  /**
   * Function to perform on submit
   * @param e 
   * @returns 
   */
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputForm: FC<InputFormProps> = ({ handleSubmit, handleChange }) => (
  <Form method="post" onSubmit={handleSubmit} className="Form">
    <Textarea
      name="instructionsContent"
      onChange={handleChange}
    />
    <Button type="submit">Load input</Button>
  </Form>
)

export default InputForm;
