import { Links } from "../components/Links";
import { Headline } from "../components/Headline";
import classes from "./Main.module.css";

export function Main(props) {
  const { page } = props;
  return (
    <main className={classes.main}>
      <Headline page={page}>
        {<code className={classes.code}>pages/{page}.js</code>}
      </Headline>
      <Links />
    </main>
  );
}
