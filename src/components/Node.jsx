function Node({ row, col, status, onClick }) {
    let className =
      "w-12 h-12 border border-black flex items-center justify-center text-xs font-bold";
  
    if (status === "start") className += " bg-green-500";
    else if (status === "end") className += " bg-red-500";
    else className += " bg-yellow-400 hover:bg-yellow-300";
  
    return (
      <div
        className={className}
        onClick={() => onClick(row, col)}
        data-row={row}
        data-col={col}
      >
        {row},{col}
      </div>
    );
  }
  
  export default Node;
  