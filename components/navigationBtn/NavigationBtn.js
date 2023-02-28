import classes from "./NavigationBtn.module.css";
import AppDataContext from "../../context/app-data";
import { useContext } from "react";
const NavigationBtn = (props) => {
  const AppDataCtx = useContext(AppDataContext);
  let nextBntEnable = props.selectedIconId.length > 0 && classes.enabled;
  const showResultHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    props.navigationClick("result")
  }
  return (
    <div style={{ textAlign: "center" }}>
      {AppDataCtx.currentLevel.number > 0 && (
        <button
          className={["btn", classes.back, classes.enabled].join(" ")}
          onClick={() =>  props.navigationClick("back")}
        >
          Back
        </button>
      )}
      {!AppDataCtx.currentLevel.showResult && (
        <button
          className={["btn", classes.next, nextBntEnable].join(" ")}
          onClick={() => nextBntEnable && props.navigationClick("next")}
        >
          Next
        </button>
      )}
      {AppDataCtx.currentLevel.showResult && (
        <button
          className={["btn", classes.next,classes.showResult, nextBntEnable].join(" ")}
          onClick={() => nextBntEnable && showResultHandler()}
        >
          Show me the results
        </button>
      )}
    </div>
  );
};

export default NavigationBtn;
