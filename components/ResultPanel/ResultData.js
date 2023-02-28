import { Fragment } from "react";
import classes from "./ResultData.module.css";
import ResultCard from "./ResultCard/ResultCard";
import Footer from "./Footer/Footer";
import { useContext } from "react";
import AppDataContext from "../../context/app-data";

const ResultData = () => {
  const AppDataCtx = useContext(AppDataContext);
  return (
    <Fragment>
      <section className={classes.section}>
        <div className={classes.resultData}>
          {AppDataCtx.filteredProductsData.length >0 && AppDataCtx.filteredProductsData.map((e,i)=>{
            return <ResultCard key={i} {...e}/>
          })}
        </div>
        <br/>
        <Footer selectorType="Scanner"/>
      </section>
    </Fragment>
  );
};

export default ResultData;
