import React from "react";

const Result = ({disabled,amountChangeHandler,peopleChangeHandler,total}) => {
  const resetHandler = () => {
    amountChangeHandler("");
    peopleChangeHandler("");
  }
  return (
    <div className="flex p-6 h-full flex-col justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white">Tip Amount</h4>
            <p className="text-darkGrayishCyan text-sm">/person</p>
          </div>
          <h3 className="text-3xl text-lightGrayishCyan">$ {total.tipAmount}</h3>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white">Total </h4>
            <p className="text-darkGrayishCyan text-sm">/person</p>
          </div>
          <h3 className="text-3xl text-lightGrayishCyan">$ {total.totalAmount}</h3>
        </div>
      </div>
        <button disabled={!disabled} className="block disabled:bg-[#0D686D] disabled:text-text bg-lightGrayishCyan hover:bg-lightCyan py-2 rounded-md w-full" onClick={resetHandler}>RESET</button>
    </div>
  );
};

export default Result;
