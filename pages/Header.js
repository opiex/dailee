import Head from "next/head";
import Link from 'next/link';
import { useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";

export default function Header(props) {

  const [headerType, setHeaderType] = useState("full");
  const router = useRouter();

  console.log(props);
  const newHeaderType = props.headerType;
  console.log(newHeaderType);
  
  
  return (
    <div className="appHeader">
      <button className={headerType === "full" ? "white-btn" : "white-btn hidden"} onClick={() => router.back()}>Back</button>
      <h3>Dailee</h3>
    </div>
  );
}



