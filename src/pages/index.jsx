import { useCallback, useState } from "react"
import Head from "next/head";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import classes from "src/styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [isShow, setIsShow] = useState(true)

  const handleClick = useCallback(() => {
    if(count < 10){
      setCount(prevCount => prevCount + 1)
    }
  },[count])

  const handleChange = useCallback((e) =>{
    setText(e.target.value.trim())
  },[text])

  const handleDisplay = useCallback(()=>{
    setIsShow(prevIsShow => !prevIsShow)
  },[isShow])


  return (
    <div className={classes.container}>
      <Head>
        <title>Index Next App</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={(e)=>{handleChange(e)}}/>
      <Main page="index" />
      <Footer />
    </div>
  );
}
