import Head from "next/head";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import classes from "src/styles/Home.module.css";


const Home = (props) => {

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Next App</title>
      </Head>
      <Header />
      {props.isShow ? <h1>{props.count}</h1> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>{props.isShow ? "非表示" : "表示"}</button>
      <input type="text" value={props.text} onChange={(e)=>{props.handleChange(e)}}/>
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item)=>{
          return <li key={item}>{item}</li>
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
}

export default Home
