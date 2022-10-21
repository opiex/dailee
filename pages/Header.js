import Head from "next/head";
import Link from 'next/link';
import { useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";

export default function Header(props) {

  const [headerType, setHeaderType] = useState("full");
  const router = useRouter();

  const newHeaderType = props.headerType;  
  
  return (
    <div className="appHeader">
      <div className="leftElements"><button className={headerType === "full" ? "back-btn" : "back-btn hidden"} onClick={() => router.back()}>{"<-"}</button></div>
      <div className="centerElements"><Link href="/Pitch"><h3 className="headerLogo">Dailee</h3></Link></div>
      <div className="rightElements"></div>
    </div>
  );
}



