import React, { useEffect, useState } from "react";
import Input from "./Input";
import SelectTip from "./SelectTip";
import Result from "./Result";

const Box = () => {
  const [amount, setAmount] = useState(0);
  const [people, setPeople] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [total, setTotal] = useState({
    totalAmount: "0.00",
    tipAmount: "0.00",
  });
  useEffect(() => {
    if ((amount && people) != "") {
      setIsDisabled(true);
    }
    else{
        setIsDisabled(false);
    }
  }, [amount, people, isDisabled]);
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const peopleChangeHandler = (e) => {
    setPeople(e.target.value);
  };

  

  const getAmount = (totalAmount, tipAmount) => {
    setTotal({
      totalAmount: totalAmount,
      tipAmount: tipAmount,
    });
  };


  return (
    <div className="bg-white grid grid-cols-2 mx-8 gap-12 rounded-2xl py-6 px-8 w-full md:w-[50rem]">
      <div className="w-full">
        <Input
          onChange={amountChangeHandler}
          value={amount}
          label={"Bill"}
          svg={true}
        />
        <SelectTip
          amount={parseFloat(amount)}
          people={parseFloat(people)}
          getAmount={getAmount}
        />
        <Input
          onChange={peopleChangeHandler}
          value={people}
          label={"Number of people"}
        />
      </div>
      <div className="w-full rounded-xl h-full bg-text">
        <Result
          disabled={isDisabled}
          amountChangeHandler={setAmount}
          peopleChangeHandler={setPeople}
          total={total}
        />
      </div>
    </div>
  );
};

export default Box;
