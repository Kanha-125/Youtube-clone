import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, settext] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findPrime(text), [text]);
  return (
    <div
      className={
        "m-4 p-4 border border-black w-80 h-80 " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="bg-green-200 m-10 p-2 "
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-64 px-2"
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
      </div>
      <div>
        <h1>nth prime :{prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
