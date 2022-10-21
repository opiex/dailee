import Head from "next/head";
import Link from 'next/link';
import { useState } from "react";
import styles from "./index.module.css";
import Header from './Header.js'

export default function PracticeInstruction() {

  async function onSubmit(event) {
    console.log(event);
    event.preventDefault();
  }

  return (
    <main className={styles.main}>
    <Header headerType="noBack"/>
    
      <Head>
        <title>Dailee: I Statements</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <div className="centralContainer">

        <h4>Excercise #1: Annoying Roomate</h4>
        <p className="instruction">Now that we know what "I" statements are, let’s try to use them in differenet life situations!</p>
        
        <Link href="/Practice">
          <button class= "green-btn">
          Continue to Excercise
          </button>
        </Link>
        </div>
    </main>
  );
}



