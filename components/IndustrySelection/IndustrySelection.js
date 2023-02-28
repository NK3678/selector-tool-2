import Image from "next/image";
import { useContext, useRef, useState } from "react";
import AppDataContext from "../../context/app-data";
import classes from "./IndustrySelection.module.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import CircleIcon from "../CircleIcon/CircleIcon";
import NavigationBtn from "../navigationBtn/NavigationBtn";

const IndustrySelection = () => {
  const navigationClickHandler = (type) => {
    let level = 0;
    if (type == "next") level = AppDataCtx.currentLevel.number + 1;
    if (type == "back") level = AppDataCtx.currentLevel.number - 1;
    type == "next" && AppDataCtx.getNextSetData(level, selectedIconId);
    type == "back" && AppDataCtx.getPrevSetData(level);
    type == "result" && AppDataCtx.showResults();
    setSelectedIcon([]);
  };
  const [selectedIconId, setSelectedIcon] = useState([]);
  const selectedHandler = (id) => {
    return selectedIconId.findIndex((i) => i === id) > -1;
  };
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

  const nodeRef = useRef(null);

  const AppDataCtx = useContext(AppDataContext);
  let imageSrc = AppDataCtx.currentSelectedIndustry.image
    ? "/media/banner/" + AppDataCtx.currentSelectedIndustry.image + ".svg"
    : "/media/banner/all_industry.svg";

  return (
    <div className={classes.ellipseContainer}>
      <div className={classes.ellipse}></div>
      <div className={classes.imageContainer}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={imageSrc}
            nodeRef={nodeRef}
            addEndListener={(done) => {
              nodeRef.current.addEventListener("transitionend", done, false);
            }}
            classNames="transform"
          >
            <div ref={nodeRef}>
              <div>
                <Image
                  src={imageSrc}
                  alt=""
                  fill
                  layout="fill"
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>

        {/* <SelectedIndustry filters={AppDataCtx.filters} currentLevel = {AppDataCtx.currentLevel}></SelectedIndustry> */}
      </div>
      <div className={classes.industrySelection}>
        {AppDataCtx.industryData.length > 0 &&
          AppDataCtx.industryData.map((i, indx, arr) => {
            let alpha = (180 / (arr.length - 1)) * indx * (Math.PI / 180);

            let sinalpha = Math.sin(alpha);
            let cosalpha = Math.cos(alpha);
            let X = 20 * sinalpha - 25.5;
            let Y = -29.4 * cosalpha + 26.5;
            console.log(X, Y);
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
                top={Y}
                left={X}
                position="float"
                circlewidth={40}
                circleheight={40}
              ></CircleIcon>
            );
          })}
      </div>
      <div className={classes.actionContainer}>
        <NavigationBtn
          navigationClick={navigationClickHandler}
          selectedIconId={selectedIconId}
        />
      </div>
    </div>
  );
};

export default IndustrySelection;
