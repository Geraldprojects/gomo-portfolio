import React from "react";
import ArrowDown from './arrow-down.svg';
import Styles from './Home2.module.css';
const Homev2 = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.detail}>
        <h1>Gomolemo Mpyana</h1>
        <h2>Software Developer</h2>
        <ul>
          <li>CRM</li>
          <li>Javascript</li>
          <li>C#</li>
        </ul>
      </div>
      <div className={Styles.scroller}>
        <img src={ArrowDown} alt="" />
      </div>
    </div>
  );
};

export default Homev2;
