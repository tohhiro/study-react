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
  const [array, setArray] = useState([])

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

  const handleAdd = useCallback(()=>{
    setArray(prevArray => {
      if(prevArray.some((item)=> item === text)){
        alert('同じ要素が存在します。')
        return prevArray
      }
      return [...prevArray,text]
    })
  },[text])

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
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item)=>{
          return <li key={item}>{item}</li>
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
}
