import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <span className={classes.anchor}>Index</span>
      </Link>
      <Link href="/about">
        <span className={classes.anchor}>About</span>
      </Link>
    </header>
  );
};

export default Header;
