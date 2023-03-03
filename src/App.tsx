import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Controller from "./components/Controller/Controller.styled";
import Crates from "./components/Crates";
import InputForm from "./components/InputForm";
import Output from "./components/Output";
import ToggleSwitch from "./components/ToggleSwitch";
import Visualizer from "./components/Visualizer";

const App = () => {
  const [originalInput, setOriginalInput] = useState<string>();
  const [stacksOfCrates, setStacksOfCrates] = useState<string[]>([]);
  const [craneInstructions, setCraneInstructions] = useState<number[][]>();
  const [isCraneMover9001, setIsCraneMover9001] = useState(false);
  const [disabledInstructions, setDisabledInstructions] = useState(true);
  const [output, setOutput] = useState<[string, string][]>([]);
  const handleCraneModelChange = () => {
    !!originalInput && loadInput(originalInput)
    setIsCraneMover9001(!isCraneMover9001)
  }
  
  const loadInput = (input: string) => {
    try {
      // Split input in crates and instructions
      const [stackString, instructionString] = input.split(/\n\n/);
      
      // Split characters into array and only keep crate identifiers which are positioned at position in a pattern of four
      const stackArrays = stackString.split(/\n/).slice(0, -1).map(row => [...row].filter((_, index) => index % 4 === 1));

      // Create an array with to display each stack with crates from top to bottom using a nested reduce to keep it functional
      const stacks: string[] = stackArrays.reduce(
        (arr: string[], row) => row.reduce(
            (arr, char, i) => char === " " ? arr : arr.map((str,j) => (i === j ? str + char : str)),
          arr),
        Array(stackArrays[0].length).fill("")
      )
  
      const parseInstruction = (instruction: String) : number[] => {
        // Split instruction string and filter number values (the actual instructions)
        const [amount, from, to] = instruction.split(" ").filter(el => !isNaN(Number(el))).map(Number);
        return [amount, from, to]
      }

      setCraneInstructions(instructionString.split(/\n/).map(parseInstruction))
      setStacksOfCrates(stacks)
      setDisabledInstructions(false);
    } catch (error) {
      setOutput([...output, ['error', 'Could not load input, verify your data']])
    }
  }

  const executeInstructions = () => {
    try {
      const moveCrates = (arr: string[], amount: number, from: number, to: number) => {
        const cratesToMove = isCraneMover9001 ? arr[from -1].slice(0, amount) : [...arr[from -1].slice(0, amount)].reverse().join("");
        return arr.map((stack, i) => i === from - 1 ? stack.slice(amount) : i === to - 1 ? cratesToMove + stack : stack);
      }
  
      const orderedStacks = craneInstructions?.reduce((arr, [amount, from, to]) => moveCrates(arr, amount, from, to), stacksOfCrates)
      if (!!orderedStacks) {
        setStacksOfCrates(orderedStacks)
        setOutput([...output, ['success', `Your puzzle answer is ${orderedStacks.map(stack => stack[0]).join("")}`]])
        setDisabledInstructions(true);
      }
    } catch (error) {
      setOutput([...output, ['error', 'Could not execute crane instructions, verify your data']])
    }
  }
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setOriginalInput(e.target.value);
  }
  const handleInputSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    originalInput && loadInput(originalInput);
  }

  return (
    <Container> 
      <Visualizer>
        {stacksOfCrates && <Crates stacks={stacksOfCrates} />}
      </Visualizer>
      <Controller>
        <ToggleSwitch
          onChange={handleCraneModelChange}
          checked={isCraneMover9001}
          labels={['9000', '9001']}
        />
        <InputForm handleSubmit={handleInputSubmit} handleChange={handleInputChange} />
        <Button onClick={executeInstructions} disabled={disabledInstructions}>
          Execute Instructions
        </Button>
        <Output>
          {output.map((line, i) => <span key={i} className={line[0]}>[{line[0]}] {line[1]}<br/></span>)}
        </Output>
      </Controller>
    </Container>
  )
}

export default App;
