// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import {useEffect, useState} from "react";

export default function App() {
  const [fromCurr, setFromCurr] = useState("EUR");
  const [toCurr, setToCurr] = useState("USD");
  const [money, setMoney] = useState(1)
  const [result, setResult] = useState("")
  const [error, setError] = useState("")

  // const fetchUrl = `https://api.frankfurter.app/latest?amount=${money}&from=KWR&to=USD`;

  useEffect(() => {
    async function currConverter() {
      try {
        setError('')
        const res
             = await fetch(`https://api.frankfurter.app/latest?amount=${money}&from=${fromCurr}&to=${toCurr}`);
        if(!res.ok) { throw new Error("데이터없음")}
        const data = await res.json();
        if (data.message === 'not found') throw new Error("Not Found")
          setResult(data.rates[toCurr])
      } catch (error) {
        if(error.message !== "Not Found" || error.message !== "데이터없음" || error.message !== "AbortError") {
          setError(error.message)
        }
        setError('')
        setResult(money)
      }
    }
    // if(fromCurr === toCurr) setResult(money)

    currConverter();
  }, [money, fromCurr, toCurr]);

  function handleFromCurr(e) {
    setFromCurr(e.target.value)
  }

  function handleToCurr(e) {
    setToCurr(e.target.value)
  }

  function handleMoney(e) {
    setMoney(Number(e.target.value))
  }

  return (
       <div>
         <input type="text" onChange={handleMoney} value={money}/>
         <select value={fromCurr} name="from"
                 onChange={handleFromCurr}>
           <option value="KRW">KRW</option>
           <option value="USD">USD</option>
           <option value="EUR">EUR</option>
           <option value="CAD">CAD</option>
           <option value="INR">INR</option>
         </select>
         <select value={toCurr} name="to"
                 onChange={handleToCurr}>>
           <option value="KRW">KRW</option>
           <option value="USD">USD</option>
           <option value="EUR">EUR</option>
           <option value="CAD">CAD</option>
           <option value="INR">INR</option>
         </select>
         {error ? <p>데이터 없어요</p> : <p>{result} {toCurr}</p>}

       </div>
  );
}