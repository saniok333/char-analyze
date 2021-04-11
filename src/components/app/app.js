import { useState } from "react";
import { analyze } from "../../services/charAnalyze";
import "./app.css";

export default function App() {
   const [inputVal, setInputVal] = useState("");
   const [inputArr, setInputArr] = useState([]);


   const onSubmit = (e) => {
      e.preventDefault();
      setInputArr([...inputArr, inputVal]);
      setInputVal("");
   }

   const onChange = (e) => {
      setInputVal(e.target.value);
   }

   const clearTable = () => {
      setInputArr([]);
   }

   return (
      <>
         <h1>Char Analyze</h1>

         <form onSubmit={(e) => onSubmit(e)}>
            <input
               type="text"
               onChange={(e) => onChange(e)}
               value={inputVal}
            />
            <button>Submit</button>
         </form>
         <table>
            <thead>
               <tr>
                  <th>Input</th>
                  <th>Output</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>
                     {inputArr.map((item) => (
                        <span key={item}>
                           <span>{item}</span>
                           <br />
                        </span>
                     ))}
                  </td>
                  <td>
                     {inputArr.filter(item => analyze(item, 2)).map((item) => (
                        <span key={item}>
                           <span>{item}</span>
                           <br />
                        </span>
                     ))}
                  </td>
               </tr>
            </tbody>
         </table>
         <button onClick={clearTable}>Clear table</button>
      </>
   );
}
