import Image from "next/image";
import classes from "./Circle.module.css";

const Circle = (props) => {
    let cirClasses = [classes.circle];
    props.noOfItems > 1 && cirClasses.push(classes.multiSelected);
    return (
        <div className={classes["circle-Container"]}>
            {props.image && (
                <div>
                    <div
                        className={cirClasses.join(" ")}
                        data-num={props.noOfItems}>
                        <Image
                            src={"/media/icons/" + props.image + ".png"}
                            alt="icon"
                            width={40}
                            height={40}
                        />
                    </div>
                    <div>
                        <span>
                            <strong>{props.sectionLabel}</strong>
                        </span>
                        <span>{props.noOfItems > 1 ? "Multiple selected" : props.nodeDetails.name}</span>
                    </div>
                </div>
            )}

            {!props.image && <div className={cirClasses.join(" ")}>{}</div>}
        </div>
    );
};

export default Circle;
