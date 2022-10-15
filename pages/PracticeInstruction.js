import Head from "next/head";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function PracticeInstruction() {

  async function onSubmit(event) {
    console.log(event);
    event.preventDefault();
  }

  return (
    <div>
      <Head>
        <title>I Statement</title>
        <link rel="icon" href="/dog.png" />
      </Head>

        <h4>Let's Practice #1</h4>
        <p>Sarah, your roomate, leaves mess lying around in the house everywhere. Instead of blaming *her*, tell her how you feel using the 'I' statement.</p>
        
        <form onSubmit={onSubmit}>
          <input type="submit" value="Start Excercise" />
        </form>
    </div>
  );
}
