import Head from "next/head";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import classes from "src/styles/Home.module.css";

export default function Home() {

  const foo = 1

  const handleClick = (e) => {
    console.log(e.target.href)
    e.preventDefault()
    alert(foo)

  }


  return (
    <div className={classes.container}>
      <Head>
        <title>Index Next App</title>
      </Head>
      <Header />
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
