import { useCallback, useState } from "react"
import Head from "next/head";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import classes from "src/styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    if(count < 10){
      setCount(count => count + 1)
    }
  },[count])


  return (
    <div className={classes.container}>
      <Head>
        <title>Index Next App</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
