import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Start-over-btn.module.css";
const StartOverBtn = (props) => {
  return (
      <button
        className={["btn", classes.start].join(" ")}
        onClick={() => props.navigationClick("reset")}
      >
        Start Over <FontAwesomeIcon icon={faArrowRotateLeft}/>
      </button>
  );
};

export default StartOverBtn;
