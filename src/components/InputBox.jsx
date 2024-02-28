import React, { useId } from 'react'

function InputBox({label,amount,currency,currencyOption=[], onAmountChange, onCurrencyChange}) {
    const labelId = useId();
  return (
    <>
   <label htmlFor={labelId} >{label}</label>
   <input id={labelId} value={amount} onChange={onAmountChange && onAmountChange} /> 
   <select value={currency} onChange={onCurrencyChange}>
        {currencyOption.map((cur) => (
          // Fixed the option key and value to use cur, assuming cur is the currency value
          <option key={cur} value={cur}>{cur}</option>
        ))}
    </select>
   </>
  )
}

export default InputBox;