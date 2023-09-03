import React, { useRef, useState } from "react";

const Demo2 = () => {
  const [x, setX] = useState(0);
  let y = 5;

  const ref = useRef(0);
  return (
    <>
      <div className="m-4 p-2 bg-slate-50 border border-black w-80 h-80">
        <div>
          <button
            className="bg-green-200 px-2 m-4 "
            onClick={() => setX(x + 1)}
          >
            Increase state
          </button>
          <span className="text-xl font-bold"> state = {x}</span>
        </div>
        <div>
          <button
            className="bg-green-200 px-2 m-4 "
            onClick={() => (ref.current = ref.current + 1)}
          >
            Increase ref
          </button>
          <span className="text-xl font-bold"> ref = {ref.current}</span>
        </div>
        <div>
          <button className="bg-green-200 px-2 m-4 " onClick={() => y++}>
            Increase Y
          </button>
          <span className="text-xl font-bold"> Y = {y}</span>
        </div>
      </div>
    </>
  );
};

export default Demo2;
