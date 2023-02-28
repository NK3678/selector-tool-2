import Image from "next/image";
import classes from "./CircleIcon.module.css";
import { Transition } from "react-transition-group";
import { useEffect, useRef, useState } from "react";

const CircleIcon = (props) => {
  let iconClasses = classes.industryIcon;
  if (props.selected) {
    iconClasses = iconClasses + " " + classes.selected;
  }
  if (!props.show) {
    iconClasses = iconClasses + " " + classes.noShow;
  }
  if (props.position == 'float') {
    iconClasses =iconClasses + " " +classes.industryIconPostion
  }
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    setInProp(true);
  }, []);

  let duration = 400;
  const defaultStyle = {
    transition: `All ${duration + 100 * props.pos}ms ease-in-out`,
    transform: "scale(0)",
    opacity: 0,

  };
  const containerPos = {
    // top:props.top,
    // left:props.left,
    transform:`translate(${props.top}vw,${props.left}vh)`

  }

  const transitionStyles = {
    entering: { transform: "scale(1)", opacity: 1 },
    entered: { transform: "scale(1)", opacity: 1 },
    exiting: { transform: "scale(0)", opacity: 0 },
    exited: { transform: "scale(0)", opacity: 0 },
  };
  console.log(containerPos);
  return (
    
    <div className={iconClasses} style={containerPos}>
      <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      
        {
        
        (state) => (
          <div
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
              
            }}
          >
            <div className={classes.ball}>
              <div
                className={classes.circle}
                onClick={() => props.onSelection && props.onSelection(props.id)}
              >
                <Image
                  src={props.image}
                  alt={props.name}
                  width={props.circlewidth}
                  height={props.circleheight}
                />
              </div>
              <span>{props.name} </span>
              {/* <span>top:{props.top} - left:{props.left}</span> */}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default CircleIcon;
