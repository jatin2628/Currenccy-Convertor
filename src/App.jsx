  import { useState } from 'react'
  import { InputBox } from './components';
  import useCurrency from './hooks/useCurrency'

function App() {
  const [from,setFrom] = useState("inr");
  const [to,setTo] = useState("usd");
  const [amount,setAmount] = useState(0);
  // const [options,setOptions] = useState({});
  const currencyData = useCurrency(from);
  const options = Object.keys(currencyData);
  const [convertAmount,setConvertAmount] = useState(0)

  const handleAmountChange = (event) => setAmount(event.target.value);
  const handleFromCurrencyChange = (event) => setFrom(event.target.value);
  const handleToCurrencyChange = (event) => setTo(event.target.value);

  return (
    <>
    <h1>Currency convertor</h1>
     <InputBox 
     label="From" 
     amount ={amount} 
     currency={from} 
     currencyOption={options}
     onAmountChange={handleAmountChange}
     onCurrencyChange={handleFromCurrencyChange} 
      />
     <InputBox 
        label="To" 
        amount={convertAmount} 
        currency={to} 
        currencyOption={options}
        onAmountChange={() => {}} // Not needed for the 'To' field, assuming it's read-only
        onCurrencyChange={handleToCurrencyChange} 
      />
     <button onClick={() => setConvertAmount(amount*currencyData[to])}>Convert</button>
     <button onClick={() => {setFrom(to)
     setTo(from)}}>Swap</button>
    </>
  )
}

export default App
