import React, { useState } from "react";

export default function Something() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 3);
        }}
      >
        -
      </button>
      Something {count}
      <button
        onClick={() => {
          setCount(count + 3);
        }}
      >
        +
      </button>
    </div>
  );
}
