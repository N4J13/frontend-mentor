import React, { useState } from "react";

const SelectTip = ({ amount, people, getAmount }) => {
  const [active, setActive] = useState(false);
  const tip = [
    {
      id: 1,
      percentage: 5,
    },
    {
      id: 2,
      percentage: 10,
    },
    {
      id: 3,
      percentage: 15,
    },
    {
      id: 4,
      percentage: 25,
    },
    {
      id: 5,
      percentage: 50,
    },
  ];

  console.log(amount);
  const tipCalculatorHandler = (value, id) => {
    if (amount == 0 && people == 0) {
      return;
    } else {
      const totalAmount = ((amount + (amount * value) / 100) / people).toFixed(
        2
      );
      console.log(totalAmount);
      const tipAmount = ((amount * value) / 100 / people).toFixed(2);
      getAmount(totalAmount, tipAmount);
      setActive(id);
    }
  };
  return (
    <>
      <p className="text-md mt-8 text-text mb-3">Select Tip %</p>
      <div className="grid grid-cols-3 gap-3 mb-3">
        {tip.map((tip) => (
          <button
            className={`w-full  text-lg rounded-md text-white p-2  ${
              active == tip.id ? "bg-lightGrayishCyan" : "bg-text"
            } hover:bg-lightCyan hover:text-text `}
            onClick={() => tipCalculatorHandler(tip.percentage, tip.id)}
            key={tip.id}
          >
            {tip.percentage}%
          </button>
        ))}
      </div>
    </>
  );
};

export default SelectTip;
