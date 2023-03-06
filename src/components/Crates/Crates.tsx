import { FC } from "react";
import { Crate, Stack } from "./Crates.styled";

interface CratesProps {
  /**
   * Array of strings representing each stack of crates
   */
  stacks: string[];
}

const Crates: FC<CratesProps> = ({ stacks }) => (
  <>
    {stacks.map((stack, i) => (
      <Stack key={i}>
        {stack.split("").map((crate, j) => (
          <Crate key={j}>{crate}</Crate>
        ))}
        <Crate>{i + 1}</Crate>
      </Stack>
    ))}
  </>
);

export default Crates;
