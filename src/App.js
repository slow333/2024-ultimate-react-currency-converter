// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const fetchUrl = `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
  return (
       <div>
         <input type="text" />
         <select>
           <option value="USD">USD</option>
           <option value="EUR">EUR</option>
           <option value="CAD">CAD</option>
           <option value="INR">INR</option>
         </select>
         <select>
           <option value="USD">USD</option>
           <option value="EUR">EUR</option>
           <option value="CAD">CAD</option>
           <option value="INR">INR</option>
         </select>
         <p>OUTPUT</p>
       </div>
  );
}