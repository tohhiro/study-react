import Head from "next/head";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import classes from "src/styles/Home.module.css";

export default function About() {
  return (
    <div className={classes.container}>
      <Head>
        <title>About Next App</title>
      </Head>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
