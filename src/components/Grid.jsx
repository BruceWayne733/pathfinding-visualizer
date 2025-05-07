import { useState } from "react";
import Node from "./Node";

function Grid() {
  const rows = 5;
  const cols = 5;

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const handleClick = (row, col) => {
    if (!start) setStart({ row, col });
    else if (!end) setEnd({ row, col });
  };

  return (
    <div
      className="grid mt-8 p-4 border-4 border-red-500"
      style={{
        gridTemplateColumns: `repeat(${cols}, 3rem)`,
        gap: '0.25rem',
        width: 'fit-content',
        margin: 'auto',
      }}
    >
      {Array.from({ length: rows }).flatMap((_, row) =>
        Array.from({ length: cols }).map((_, col) => {
          let status = "normal";
          if (start?.row === row && start?.col === col) status = "start";
          if (end?.row === row && end?.col === col) status = "end";

          return (
            <Node
              key={`${row}-${col}`}
              row={row}
              col={col}
              status={status}
              onClick={handleClick}
            />
          );
        })
      )}
    </div>
  );
}

export default Grid;
