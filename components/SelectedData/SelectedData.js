import Image from "next/image";
import { useContext } from "react";
import AppDataContext from "../../context/app-data";
import classes from "./SelectedData.module.css";
import SelectedIndustry from "./SelectedIndustry/SelectedIndustry";
const SelectedData = () => {
    const AppDataCtx = useContext(AppDataContext);

    let imageSrc = AppDataCtx.currentSelectedIndustry.image ? "/media/banner/" + AppDataCtx.currentSelectedIndustry.image + ".svg" : "/media/banner/all_industry.svg";
    return (
        <div className={classes["selector-container"]}>
            <div className={classes.ellipseNW}>
                <div className={classes.zebraFinder}>
                    <div>
                        <div className={classes.industrySelection}>
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
                </div>

                <div className={classes["section-b"]}>
                    <SelectedIndustry
                        filters={AppDataCtx.filters}
                        currentLevel={AppDataCtx.currentLevel}></SelectedIndustry>
                </div>
            </div>
        </div>
    );
};
export default SelectedData;
