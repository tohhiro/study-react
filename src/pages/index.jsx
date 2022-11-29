import Head from "next/head";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import classes from "src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Next App</title>
      </Head>
      <Header />
      <Main page="index" />
      <Footer />
    </div>
  );
}
