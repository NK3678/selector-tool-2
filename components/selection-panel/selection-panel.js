import { useContext, useState } from "react";
import classes from "./selection-panel.module.css";
import AppDataContext from "../../context/app-data";
import CircleIcon from "../CircleIcon/CircleIcon";
import NavigationBtn from "../navigationBtn/NavigationBtn";
import { useTranslation } from "react-i18next";
import IndustrySelection from "../IndustrySelection/IndustrySelection";

const SelectionPanel = () => {
  const { t } = useTranslation();
  const AppDataCtx = useContext(AppDataContext);

  const [selectedIconId, setSelectedIcon] = useState([]);
  const onSelectionHandler = (id) => {
    let idx = selectedIconId.findIndex((i) => i === id);
    let idArr;
    if (AppDataCtx.currentLevel.multi) {
      idArr = [...selectedIconId];
    } else {
      idArr = [];
    }
    if (idx === -1) {
      idArr.push(id);
    } else {
      idArr.splice(idx, 1);
    }
    setSelectedIcon(idArr);
    AppDataCtx.currentLevel.number == 0 && AppDataCtx.selectIndustry(id);
    AppDataCtx.selectFilter(idArr, AppDataCtx.currentLevel.id);
  };

  const selectedHandler = (id) => {
    return selectedIconId.findIndex((i) => i === id) > -1;
  };

  const navigationClickHandler = (type) => {
    let level = 0;
    if (type == "next") level = AppDataCtx.currentLevel.number + 1;
    if (type == "back") level = AppDataCtx.currentLevel.number - 1;
    type == "next" && AppDataCtx.getNextSetData(level, selectedIconId);
    type == "back" && AppDataCtx.getPrevSetData(level);
    type == "result" && AppDataCtx.showResults();
    setSelectedIcon([]);
  };

  let startAngle = Math.PI / AppDataCtx.industryData.length;
  let angle = startAngle / 2;
  let radius = 400;
  let offset = 40;
  console.log(
    Math.PI,
    AppDataCtx.industryData.length,
    Math.PI / AppDataCtx.industryData.length
  );
  return (
    <section className={classes.container}>
      <div>
        <div className={classes.selectionPanelHeading}>
          {AppDataCtx.currentLevel.name}
        </div>
        <div className={classes.subHeading}>
          {AppDataCtx.currentLevel.multi && <i>{t("panelSubHeading2")}</i>}
          {!AppDataCtx.currentLevel.multi && <i>{t("panelSubHeading1")}</i>}
        </div>
      </div>
      <div>{AppDataCtx.currentLevel.number == 0 && <IndustrySelection />}</div>
      {AppDataCtx.currentLevel.number != 0 ? (
        <div>
        <div className={"icons d-flex"}>
          {/* <div className={classes.options}> */}
          {AppDataCtx.industryData.length > 0 &&
            AppDataCtx.industryData.map((i, indx, arr) => {
              angle += startAngle;
              console.log(angle);
              return (
                <CircleIcon
                  key={i.id + "key" + AppDataCtx.currentLevel.number}
                  name={i.name}
                  image={"/media/icons/" + i.image + ".png"}
                  id={i.id}
                  show={i.show}
                  selected={selectedHandler(i.id)}
                  onSelection={onSelectionHandler}
                  pos={indx + 1}
                  elementsCount={arr.length}
                  circleheight={40}
                  circlewidth={40}
                ></CircleIcon>
              );
            })}
        </div>
        <NavigationBtn
          navigationClick={navigationClickHandler}
          selectedIconId={selectedIconId}
        />
        </div>
      ) : (
        <div className={classes.options}>
          <div className={classes.ellipse}>
            {/* {AppDataCtx.industryData.length > 0 &&
              AppDataCtx.industryData.map((i, indx, arr) => {
                angle += startAngle;
                console.log(arr, arr.length - 1, 180 / (arr.length - 1));

                return (
                  <CircleIcon
                    key={i.id + "key" + AppDataCtx.currentLevel.number}
                    name={i.name}
                    image={"/media/icons/" + i.image + ".png"}
                    id={i.id}
                    show={i.show}
                    selected={selectedHandler(i.id)}
                    onSelection={onSelectionHandler}
                    pos={indx + 1}
                    elementsCount={arr.length}
                    // left= {radius * Math.cos( angle ) + offset + "px"}
                    // top={radius * Math.sin( angle ) + "px"}
                    top={(180 / (arr.length - 1)) * indx}
                    left={(180 / (arr.length - 1)) * indx}
                    position="float"
                  ></CircleIcon>
                );
              })} */}
          </div>
        </div>
      )}
      {/*  */}
      
    </section>
  );
};

export default SelectionPanel;
