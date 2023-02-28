import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Fragment, useContext, useState } from "react";
import AppDataContext from "../../context/app-data";
import classes from "./FilterPanelItem.module.css";

const FilterPanelItem = (props) => {
  const AppDataCtx = useContext(AppDataContext);
  const [catSelection, setCatSelection] = useState(false);
  const panelBodyClasses = [classes.panelBody];
  const panelTitleClasses = [classes.panelTitle];
  catSelection && panelBodyClasses.push(classes.collapsible);
  catSelection && panelTitleClasses.push(classes.collapsible);
  const catSelectionHandler = () => {
    setCatSelection((prevState) => !prevState);
  };
  const selectedFilterClass = (id) => {
    return props.selectedIds.findIndex((i) => i.id === id) > -1
      ? classes.selected
      : null;
  };

  const selectHandler = (id) => {
    let idArr = [];
    idArr.push(id);
    AppDataCtx.facetHandler(idArr, props.id);
  };

  const selectHandlerMulti = (id) => {
    let idArr = props.selectedIds.map((e) => e.id);
    let idx = idArr.findIndex((i) => i === id);
    if (idx === -1) {
      idArr.push(id);
    } else {
      idArr.splice(idx, 1);
    }
    AppDataCtx.facetHandler(idArr, props.id);
  };
  return (
    <Fragment>
      <div className={classes.panelHeading} onClick={catSelectionHandler}>
        <div className={panelTitleClasses.join(" ")}>
          <div className={classes.category}>
            {props.selectedIds.length > 0 && (
              <Image
                src={
                  "/media/icons/" +
                  props.selectedIds[0].image +
                  ".png"
                }
                width={30}
                height={30}
                alt=""
                style={{ marginRight: "10px" }}
              ></Image>
            )}
            <div>
              {props.label}
              <div className={classes.selectedCategory}>
                {props.selectedIds.length > 1
                  ? "Multiple Selected"
                  :null}
                {props.selectedIds.length == 1 ?props.selectedIds[0].name:null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={panelBodyClasses.join(" ")}>
        {props.data.map((e) => {
          if (props.checkbox) {
            return (
              <div
                key={e.id + props.id}
                className={classes.filterCat +" "+ (!e.show?classes.disabled:"")}
                onClick={() => selectHandlerMulti(e.id)}
              >
                {props.selectedIds.findIndex((i) => i.id === e.id) > -1 ? (
                  <FontAwesomeIcon icon={faSquareCheck} />
                ) : (
                  <FontAwesomeIcon icon={faSquare} />
                )}
                <span>{e.name}</span>
              </div>
            );
          } else {
            return (
              <div
                className={classes.filterCat + " " + selectedFilterClass(e.id) + " " + (!e.show?classes.disabled:"")}
                key={e.id + props.id}
                onClick={() => selectHandler(e.id)}
              >
                {e.name}
              </div>
            );
          }
        })}
      </div>
    </Fragment>
  );
};

export default FilterPanelItem;
