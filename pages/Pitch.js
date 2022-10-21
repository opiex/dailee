import Head from "next/head";
import Link from 'next/link';
import { useState } from "react";
import styles from "./index.module.css";
import Header from './Header.js'

export default function Pitch() {

  return (
    <main className={styles.main}>
    
      <Head>
        <title>Dailee: Learn Social Skills</title>
        <link rel="icon" href="/dog.png" />
      </Head>
      <div className="centralContainer">
        <img className ="logoImg" src= "../logo.png" />
        <p className="logoTitle">Dailee</p>
        <h4 className="pitchDescription">
          The fun way to learn and practice social skills
        </h4>
        
        <Link href="/PracticeInstruction">
          <button class= "green-btn">
          Get Started
          </button>
        </Link>
      </div>
        
    </main>
  );
}



