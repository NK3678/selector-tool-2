import classes from "./MainNavigation.module.css";
import styles from '../../styles/Home.module.css'
import Image from "next/image";
import ContactUsBtn from "../contactUsBtn/ContactUsBtn";

function MainNavigation() {
  return (
    <header className={classes.header+" "+styles.container+" d-flex"}>
      <div className={classes.logo}>
        <Image src="/zebra-logo.png" alt="Zebra Logo" width={125} height={43} />
      </div>
      <div>
        <ContactUsBtn/>
      </div>
    </header>
  );
}

export default MainNavigation;
