import { FC } from "react";
import { Checkbox, Label, Toggle, Wrapper } from "./ToggleSwitch.styled.";

interface ToggleSwitchProps {
  /**
   * The action to perform on change
   */
  onChange?: () => void;
  /**
   * If `true` the component is checked
   * @default false
   */
  checked?: boolean;
  labels?: [string, string]
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({
  onChange,
  checked,
  labels
}) => (
  <Wrapper>
    <Checkbox
      checked={checked}
      onChange={onChange}
      type="checkbox"
    />
    <Toggle />
    <Label>
      {labels?.map(label => <span key={label}>{label}</span>)}
    </Label>
  </Wrapper>
)

export default ToggleSwitch;
