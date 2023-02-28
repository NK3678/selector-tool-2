import styles from "../../styles/Home.module.css";
import { useContext } from "react";
import SelectionPanel from "../selection-panel/selection-panel";
import HeadingSection from "../Heading-section/Heading-section";
import AppDataContext from "../../context/app-data";
import ResultData from "../ResultPanel/ResultData";
import FilterPanel from "../FilterPanel/FilterPanel";
import classes from "./Scanner.module.css";
import SelectedData from "../SelectedData/SelectedData";

const Scanner = () => {
  const AppDataCtx = useContext(AppDataContext);
  return (
    <div className={classes.section}>
      <section className={styles.container}>
        {/* <HeadingSection /> */}

        {!AppDataCtx.results && AppDataCtx.currentLevel.number > 0 && (
          <div>
            <SelectedData />
            <SelectionPanel />
          </div>
        )}
        {!AppDataCtx.results && AppDataCtx.currentLevel.number == 0 && (
          <SelectionPanel />
        )}
        {AppDataCtx.results && (
          <>
          <br></br>
          <div className={"d-flex " + classes.resultPage}>
            <FilterPanel />
            <ResultData />
          </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Scanner;
