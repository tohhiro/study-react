import { useEffect } from "react";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import classes from "src/components/Main/Main.module.css";

export function Main(props) {
  const { page } = props;

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue"
    return () => {
      document.body.style.backgroundColor = ""
    };
  },[]);

  return (
    <main className={classes.main}>
      <Headline page={page}>
        {<code className={classes.code}>pages/{page}.js</code>}
      </Headline>
      <Links/>
    </main>
  );
}
