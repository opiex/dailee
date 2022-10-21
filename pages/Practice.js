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
    window.scrollTo(0, document.body.scrollHeight);
    const newPrompt = { sender: "Me", text: textInput };
    updateConversation(newPrompt);

    //Defining conversation to be a string
    let conversationToSend = 'Me: ' + textInput + '\n' + 'Sarah: ';
    let pastChat = '';
    console.log(conversation);
    for(let i = conversation.length - 1; i >= 0 && i > conversation.length - 10; i--){
      pastChat = conversation[i].sender + ': ' + conversation[i].text + '\n' + pastChat;
    }

    conversationToSend = pastChat + conversationToSend;

    //Calling API
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: conversationToSend }),
    });

    console.log(conversationToSend);

    const data = await response.json();
    setResult(data.result);

    const newResponse = { sender: "Sarah", text: data.result.slice(2) };
    updateConversation(newResponse);
    setTextInput("");

  }

  function firstInteraction(){
    setIsChat(true);
    let preface2 = { sender: "Sarah", text: `I'm about to head out. I left some stuff in the living room, don't touch them until I'm back.` };
    updateConversation(preface2);
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
        <div className="centralContainer">

        <h4 className="greyText">Let's Practice!</h4>
        <h4>Excercise #1: Annoying Roomate</h4>
        <p className="instruction">Sarah, your roomate, leaves mess lying around in the house everywhere. Instead of blaming *her*, tell her how you feel using the 'I' statement.</p>
        </div>

        <button class= "green-btn" onClick={firstInteraction}>
          Begin Excercise
        </button>


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

      <div className="chatContainer">
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
        </div>
      </main>
    </div>
  );

}
