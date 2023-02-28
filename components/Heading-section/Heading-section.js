import { Fragment, useContext } from "react";
import AppDataContext from "../../context/app-data";
import classes from "./Heading-section.module.css";
import Image from "next/image";
import StartOverBtn from "./Start-over-btn";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const HeadingSection = () => {
  const { t } = useTranslation();
  const AppDataCtx = useContext(AppDataContext);
  let heading = "";
  if(AppDataCtx.results.show){
    heading = "Scanners Made for You"
  }else if(AppDataCtx.currentLevel.number == 0 ){
    heading = t("headingTitle")
  }else{
    heading = AppDataCtx.currentSelectedIndustry.name;
  }
  const navigationClickHandler = () => {
    AppDataCtx.resetSetData();
  };
  return (
    <Fragment>
       <div className={classes.heading}>
        <h1>{heading}</h1>
        {AppDataCtx.currentLevel.number > 0 && (
          <StartOverBtn
            currentLevel={AppDataCtx.currentLevel.number}
            navigationClick={navigationClickHandler}
          />
        )}
      </div>
      {!AppDataCtx.results.show && AppDataCtx.currentLevel.number == 0 &&(
        <p className={classes.subHeading}>{t("headingDescription")}</p>
      )}
      {AppDataCtx.results.show && (
        <div className={classes.secondHeading}>
          <div className="d-flex-center">
          <Image
            alt=""
            width={30}
            height={30}
            src={
              "/media/icons/" +
              AppDataCtx.currentSelectedIndustry.image +
              ".png"
            }
          />
          <h3>{AppDataCtx.currentSelectedIndustry.name}</h3>
          </div>          
          <div className="d-flex-center flex-wrap">
            <a href="" className="Link">
              Print the results <FontAwesomeIcon icon={faPrint} />
            </a>
            <a
              className="Link"
              href="https://www.zebra.com/us/en/about-zebra/contact-zebra.html"
              target="_blank"
              style={{ marginLeft: "2rem" }}
              rel="noreferrer"
            >
              Contact a Zebra Representative{" "}
              <FontAwesomeIcon icon={faMessage} />
            </a>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default HeadingSection;
