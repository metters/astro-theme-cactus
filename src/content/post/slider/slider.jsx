import { useState } from "react";

export function Slider() {
  const [number, setNumber] = useState(3);

  return (
    <>
      <>
        <label htmlFor="amount">Amount: </label>
        {number}
        <br />
        <input
          type="range"
          min={1}
          max={15}
          id="amount"
          value={number}
          onChange={(event) => {
            console.log(event.target.value);
            setNumber(Number(event.target.value));
          }}
        />
      </>
    </>
  );
}
