import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import PracticeInstruction from "./PracticeInstruction";
import Practice from "./Practice";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult('Sarah: ' + data.result);
    setAnimalInput("");
  }

  return (
    <main className={styles.main}>
    <h3>Using I Statements</h3>
    <PracticeInstruction />
    </main>
  );
}


//   return (
//     <div>
//       <Head>
//         <title>I Statement</title>
//         <link rel="icon" href="/dog.png" />
//       </Head>

//       <main className={styles.main}>
//         <h3>Using the 'I' Statement</h3>
//         <h4>Excercise</h4>
//         <p>Sarah, your roomate, leaves mess lying around in the house everywhere. Instead of blaming *her*, tell her how you feel using the 'I' statement.</p>
        
//         <form onSubmit={onSubmit}>
//           <input
//             type="text"
//             name="animal"
//             placeholder="Write your text here..."
//             value={animalInput}
//             onChange={(e) => setAnimalInput(e.target.value)}
//           />
//           <input type="submit" value="Send to Sarah" />
//         </form>
//         <div className={styles.result}>Danny: You always leave your mess lying everywhere</div>
//         <br />
//         <div className={styles.result}>{result}</div>
//       </main>
//     </div>
//   );
// }
