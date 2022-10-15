import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
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

        <form onSubmit={onSubmit}>
          <input type="submit" value="Start Excercise" />
        </form>
    </div>
  );
}
