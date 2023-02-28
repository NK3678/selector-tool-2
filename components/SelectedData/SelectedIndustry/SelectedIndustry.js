import Circle from "../Circle/Circle";
import classes from "./SelectedIndustry.module.css";
import { motion } from "framer-motion";

const selectedIndustry = (prop) => {
    let selectedItems = 0;

    const itemsPreset = (prop) => {
        //console.log(prop)
        let tempitemsPreset = 0;
        {
            prop.filters.length > 0 &&
                prop.filters.forEach((i, index) => {
                    if (i.selectedIds.length > 0) {
                        tempitemsPreset++;
                    }
                });
        }
        return tempitemsPreset;
    };

    return (
        
            <div className={classes["selector-container"]}>
                {prop.filters.length > 0 &&
                    prop.filters.map((i, index) => {
                        let label = index > 0 ? i.label : "";
                        if (index <= prop.currentLevel?.number) {
                            let indexInner = i.selectedIds.length;
                            if (index < itemsPreset(prop) - 1) {
                                selectedItems += 1;

                                let top = 0;
                                let left = 0;
                                if (itemsPreset(prop) - index - 1 == 0) {
                                    top = 0;
                                    left = 0;
                                } else if (itemsPreset(prop) - index - 1 == 1) {
                                    top = -14;
                                    left = -2;
                                } else if (itemsPreset(prop) - index - 1 == 2) {
                                    top = -34;
                                    left = -17;
                                } else if (itemsPreset(prop) - index - 1 == 3) {
                                    top = -22;
                                    left = -31;
                                } else if (itemsPreset(prop) - index - 1 == 4) {
                                    top = 22;
                                    left = -30;
                                } else if (itemsPreset(prop) - index - 1 == 5) {
                                    top = +34;
                                    left = -17;
                                } else if (itemsPreset(prop) - index - 1 == 6) {
                                    top = 14;
                                    left = -2;
                                }
                                return (
                                    <motion.div
                                        className={classes["selector-icons"]}
                                        // animate={{ x: `${(index - prop.currentLevel?.number) * 100}` + '%', transition: { duration: 1 } }}
                                        animate={{ x: `${top}` + "vw", y: `${left}vh`, transition: { duration: 1 } }}
                                        key={index}>
                                        <div className={classes["selector-i cons"]}>
                                            <div>
                                                <Circle
                                                    image={i.selectedIds[0].image}
                                                    noOfItems={indexInner}
                                                    nodeDetails={i.selectedIds[0]}
                                                    sectionLabel={label}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            } else {

                                return (
                                    <motion.div
                                        className={classes["selector-icons"]}
                                        animate={{ x: `${-0}` + "vw", y: `${-0}` + "vh", transition: { duration: 1 } }}
                                        key={index}>
                                        <div className={classes["selector-i cons"]}>
                                            <div>
                                                {i.selectedIds?.length > 0 && (
                                                    <Circle
                                                        image={i.selectedIds[0].image}
                                                        noOfItems={indexInner}
                                                        nodeDetails={i.selectedIds[0]}
                                                        sectionLabel={label}
                                                    />
                                                )}
                                                {i.selectedIds?.length == 0 && <Circle />}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            }
                        }
                    })}
            </div>
        
    );
};

// style={{top:`${index*10}`+'px'}}

export default selectedIndustry;
