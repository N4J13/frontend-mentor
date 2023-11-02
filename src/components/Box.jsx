import React, { useState } from 'react'
import Input from './Input';
import SelectTip from './SelectTip';
import Result from './Result';

const Box = () => {
    const [amount, setAmount] = useState("");
    const [people, setPeople] = useState(""); 
    const [total,setTotal] = useState({
        totalAmount: '0.00',
        tipAmount: '0.00'
    })
    const amountChangeHandler =  (e) => {
        setAmount(e.target.value);
    } 
    const peopleChangeHandler = (e) => {
        setPeople(e.target.value);
    }
    let buttonDisable =   amount || people === "" ?  true : false;
    const getAmount = (totalAmount,tipAmount) =>{
        setTotal({
            totalAmount: totalAmount,
            tipAmount: tipAmount
        })
    }
    
    

  return (
    <div className='bg-white grid grid-cols-2 mx-8 gap-12 rounded-2xl py-6 px-8 w-full md:w-[50rem]'>
        <div className='w-full'>
            <Input onChange={amountChangeHandler} value={amount} label={"Bill"} svg={true}/>
            <SelectTip amount={parseFloat(amount)} people={parseFloat(people)} getAmount={getAmount} />
            <Input onChange={peopleChangeHandler} value={people} label={"Number of people"}/>
        </div>
        <div className='w-full rounded-xl h-full bg-text'>
            <Result disabled={buttonDisable} amountChangeHandler={setAmount} peopleChangeHandler={setPeople} total={total} />
        </div>
    </div>
  )
}

export default Box