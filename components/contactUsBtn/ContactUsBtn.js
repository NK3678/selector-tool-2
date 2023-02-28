import { faChevronRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import classes from "./ContactUsBtn.module.css";

const ContactUsBtn = () => {
  const { t } = useTranslation();
  return (
    <a
      className={classes.btn}
      target="_blank"
      href="https://connect.zebra.com/Contact-ENU?elqTrackId=1bf120e61ad546b1814ce27c1c038ff6&elq=00000000000000000000000000000000&elqaid=8590&elqat=2&elqCampaignId="
      rel="noreferrer"
    >
      {t("ContactBtn")} <FontAwesomeIcon icon={faChevronRight} />
    </a>
  );
};

export default ContactUsBtn;
