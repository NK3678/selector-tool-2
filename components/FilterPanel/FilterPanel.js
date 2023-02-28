import FilterPanelItem from "./FilterPanelItem";
import classes from "./FilterPanel.module.css";
import { useContext } from "react";
import AppDataContext from "../../context/app-data";
const FilterPanel = () => {
  const AppDataCtx = useContext(AppDataContext);
  return (
    <section className={classes.selectionPanel}>
      {AppDataCtx.filters.map((e, i) => {
        return (
          i > 0 && (
            <FilterPanelItem
              key={i}
              label={e.label}
              data={e.data}
              id={e.id}
              checkbox={e.multi}
              selectedIds={e.selectedIds}
            />
          )
        );
      })}
    </section>
  );
};

export default FilterPanel;
