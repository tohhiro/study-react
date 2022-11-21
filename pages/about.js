import Head from "next/head";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import classes from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={classes.container}>
      <Head>
        <title>About Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
