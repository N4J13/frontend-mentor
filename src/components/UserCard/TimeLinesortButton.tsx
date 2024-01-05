import React from "react";

type TimeLinesortButton = {
  activeId : number
  id: number;
  text: string;
  onClick: () => void;
};

const TimeLinesortButton: React.FC<TimeLinesortButton> = ({
  activeId,
  id,
  text,
  onClick,
}) => {
  const active = id ==  activeId; 
  return (
    <button  className={`${active ? "text-white" : "text-desaturated-blue"} hover:text-white`} onClick={onClick}>
      {text}
    </button>
  );
};

export default TimeLinesortButton;
