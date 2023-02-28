import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./OwnZebraScanner.module.css";
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "@nextui-org/react";
import {DropDownListComponent} from "@syncfusion/ej2-react-dropdowns"
import { useMemo, useState } from "react";  
import { DropDownList } from "@progress/kendo-react-dropdowns";  


const OwnZebraScanner = () => {
  const router = useRouter();
  const categories = ["all", "recipe", "video", "article"];  

  const menuItems = [
    { key: "new", name: "New File" },
    { key: "copy", name: "Copy Link" },
    { key: "edit", name: "Edit File" },
    { key: "delete", name: "Delete File" },
  ];

  const divStyle ={
    margin :20,
    width:400,
    height:49
  }

  return (
    <section className={styles.container}>
      <div className={"d-flex-center flex-wrap justify-content-space-between"}>
          <h1>Ready to Upgrade Your Zebra Scanner?</h1>
        <div
          onClick={() => {
            router.back();
          }}
          className={"Link"}
        >
          <span>Use our tool to find out which scanner is best for you</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div>
        <h3>See Which New Model is Best</h3>
        <p>
          Select your existing Zebra data capture device from the drop-down
          list. When upgrading to the latest scanners, you’ll discover extra
          abilities that help you anticipate and overcome any challenge that
          comes your way.
        </p>
      </div>
      <div style={divStyle}>
      <Dropdown>

      <div style={divStyle}>
      <Dropdown.Button flat >Select your device</Dropdown.Button>
      </div>
      <Dropdown.Menu>
    <Dropdown.Item href={"Link"}>CC5000-10</Dropdown.Item>
    <Dropdown.Item href="#">CS1504</Dropdown.Item>
    <Dropdown.Item href="#">CS3070</Dropdown.Item>
  </Dropdown.Menu>
    </Dropdown>
    </div>
     <div style={divStyle}>
      <DropDownListComponent></DropDownListComponent>
     </div>

    </section>
  );
};


export default OwnZebraScanner;
