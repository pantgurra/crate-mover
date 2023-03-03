import { render, screen } from "@testing-library/react"
import ToggleSwitch from "./ToggleSwitch"

describe('ToggleSwitch', () => {
  test('renders a toggle', async () => {
    render(<ToggleSwitch />)
  })
  test('renders a toggle with labels', async () => {
    render(<ToggleSwitch labels={['No', 'Yes']} />);
    expect(screen.getByText('Yes')).toBeInTheDocument()
  })
})
