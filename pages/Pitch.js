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

        <img className ="logoImg" src= "../logo.png" />
        <h3 className="logo">Dailee</h3>
        <h4 className="pitchDescription">
          The fun way to learn and practice social skills
        </h4>
        
        <Link href="/PracticeInstruction">
          <button class= "green-btn">
          Get Started
          </button>
        </Link>
        
    </main>
  );
}



