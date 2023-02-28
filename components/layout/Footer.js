import classes from "./Footer.module.css";
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faLinkedinIn, faFacebook, faYoutube, faBloggerB } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer  className={classes.footer + " " + styles.container}>
      <div className={classes.footerSocial}>
        <a href="https://www.linkedin.com/company/zebra-technologies?elqTrackId=2432a534378645afa0a865828ccc01af&elqaid=8590&elqat=2" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://www.linkedin.com/company/zebra-technologies?elqTrackId=2432a534378645afa0a865828ccc01af&elqaid=8590&elqat=2" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.facebook.com/ZebraTechnologiesGlobal?elqTrackId=6b0c62a4e2de409ab2b81fe0fbd3a0ea&elqaid=8590&elqat=2" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.youtube.com/user/ZebraTechnologies?elqTrackId=a0da8de817bf4fa2859dbb2f884a7245&elqaid=8590&elqat=2" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.zebra.com/us/en/blog.html?elqTrackId=df35fdb319bc4e978c0826b894993024&elqaid=8590&elqat=2" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faBloggerB} />
        </a>
      </div>
      <div className={classes.copyright}>
        <p>
          <a
            href="https://www.zebra.com/us/en/about-zebra/company-information/compliance/copyright.html?elqTrackId=789871a5d45345c2bf7548026880c585&amp;elqaid=8590&amp;elqat=2"
            target="_blank"
            rel="noreferrer"
          >
            Copyright
          </a>{" "}
          |
          <a
            href="https://www.zebra.com/us/en/about-zebra/company-information/compliance/information-privacy/terms-of-use.html?elqTrackId=79952834e11d4f82b18e5662f3f3208f&amp;elqaid=8590&amp;elqat=2"
            target="_blank"
            rel="noreferrer"
          >
            Terms &amp; Conditions
          </a>{" "}
          |
          <a
            href='https://www.zebra.com/us/en/about-zebra/company-information/compliance/information-privacy/privacy-statement.html?elqTrackId=e8b70bf93dbb476ca745bd5c248f07a5"&amp;elqaid=8590&amp;elqat=2'
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </p>

        <p>
          ZEBRA and the stylized Zebra head are trademarks of Zebra Technologies
          Corp., registered in many jurisdictions worldwide. All other
          trademarks are the property of their respective owners. ©2020 Zebra
          Technologies Corp. and/or its affiliates.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
