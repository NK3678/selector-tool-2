import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import classes from "./ResultCard.module.css";

const ResultCard = (props) => {
  return (
    <div className={classes.resultCard}>
      <div style={{ width: "100%", height: "10rem", position: "relative" }}>
        <Image
          alt="Mountains"
          src={props.imageURL}
          fill
          object-fit= "cover"
        />
      </div>
      <div className="result-card__copy">
        <h3>{props.name}</h3>
        <p></p>
      </div>
      <div className={classes.resultCardcta}>
        <a
          className={"Link"}
          target="_blank"
          href={props.productPage}
          rel="noreferrer"
        >
          Learn More <FontAwesomeIcon icon={faChevronRight} />
        </a>
        <a
          className={"Link"}
          target="_blank"
          href={props.specSheetURL}
          rel="noreferrer"
        >
          Spec Sheet <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
    </div>
  );
};

export default ResultCard;
