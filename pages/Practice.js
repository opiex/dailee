import Head from "next/head";
import styles from "./index.module.css";
import { useState } from "react";
import Header from './Header.js'
export default function Practice() {

  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState();
  const [isChat, setIsChat] = useState(false);
  const [conversation, setConversation] = useState([]);

  function updateConversation(response){
    setConversation(conversation => [...conversation, response]);
  }

  async function onSubmit(event) {
    event.preventDefault();
    setIsChat(true);
    window.scrollTo(0, document.body.scrollHeight);
    const newPrompt = { sender: "Me", text: textInput };
    updateConversation(newPrompt);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: textInput }),
    });

    const data = await response.json();
    setResult(data.result);

    const newResponse = { sender: "Sarah", text: data.result };
    updateConversation(newResponse);
    setTextInput("");

    console.log(conversation);

  }

  
  if(!isChat){
    return (
      <div>
        <Head>
          <title>Dailee: I Statements</title>
          <link rel="icon" href="/dog.png" />
        </Head>
        <main className={styles.main}>
        <Header />
  
        <h4 className="greyText">Let's Practice!</h4>
        <h4>Excercise #1: Annoying Roomate</h4>
        <p className="instruction">Sarah, your roomate, leaves mess lying around in the house everywhere. Instead of blaming *her*, tell her how you feel using the 'I' statement.</p>
  
          <form onSubmit={onSubmit}>
          <input
              type="text"
              name="prompt"
              placeholder="Write your text here..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
            <input type="submit" value=">" />
          </form>
        </main>
      </div>
    );
  }


  //Chat Mechanic
  return (
    <div>
      <Head>
        <title>I Statement</title>
        <link rel="icon" href="/dog.png" />
      </Head>
      <main className={styles.main}>
      <Header />

         {conversation.map((item) => (
         <div className = {item.sender === "Me" ? "chatBox chatRight" : "chatBox chatLeft"}>

          <div className="senderName">{item.sender}</div>
          <div className="speechBubble">{item.text}</div>
          
          </div>
         ))}

         <form onSubmit={onSubmit}>
          <input
              type="text"
              name="prompt"
              placeholder="Write your text here..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
            <input type="submit" value=">" />
          </form>
      </main>
    </div>
  );

}
