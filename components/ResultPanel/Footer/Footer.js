import Image from "next/image";
import { Fragment } from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <Fragment>
      <div className="alert alert-primary">
        <p style={{ textAlign: "center", fontWeight: "600" }}>
          Note: To fine-tune your selection from the {props.selectorType}{" "}
          Selector Tool,{" "}
          <a
            className="Link"
            href="https://www.zebra.com/us/en/about-zebra/contact-zebra.html"
            target="_blank"
            rel="noreferrer"
          >
            <b>contact </b>
          </a>
          an expert from Zebra.
        </p>
      </div>
      <div className={classes.banner}>
        <div className={classes.footerSection}>
          <div>
            <Image
              src="/media/banner/banner-dna.png"
              alt="banner-dna"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className={classes.footerSection}>
          <h3 className={classes.bannerTitle}>
            Your {props.selectorType}&apos;s Built-in Advantage
          </h3>
          <p>
            Today, with technology constantly evolving, your enterprise tablet
            needs to be software strong inside to ensure it remains relevant,
            performing with amazing agility over its entire lifecycle. We call
            it Zebra&nbsp;DNA*, built from the ground up, so hardware and
            software work perfectly in sync. This gives your team dynamic
            abilities to overcome any challenge, enabling them to stay on time
            and on task, no matter&nbsp;what.
          </p>
          <p className={classes.textFoot}>
            *Mobility DNA software available on Android tablets; select software
            tools available on Windows&nbsp;tablets.
          </p>
          <a
            href="https://www.zebra.com/us/en/products/software/zebra-dna.html?elqTrackId=c6d39f6bee3545f9ac7b3171e0be5b8c&amp;elqaid=10270&amp;elqat=2"
            target="_blank"
            className={classes.btn}
            rel="noreferrer"
          >
            Discover Your Built-in Advantage
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
