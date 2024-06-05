import { useState } from "react";
import { Counter } from "../components/Counter";
import { Button } from "../components/Button";

export const CounterPage = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2 className="flex justify-between items-center">
        Organik Yumurta
        <Button onClick={() => setShow(!show)}>TOGGLE COUNTER</Button>
      </h2>
      <hr />
      {show && <Counter />}
      {/* component did mount! - component will unmount */}
      <hr />
      <Counter hide={!show} />
    </div>
  );
};
