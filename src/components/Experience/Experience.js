import React from "react";
import Styles from "./Experience.module.css";
const Experience = () => {
  return (
    <div className={Styles.Container}>
       <h2>Experience</h2>
      <div className={Styles.Card}>
        <div className={Styles.Duration}>
          <p>2022 - Present</p>
        </div>
        <div className={Styles.Description}>
          <h1>Salesforce Developer ~ BlueSky</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            maxime dignissimos quaerat reiciendis corrupti minus, odio ipsa
            natus nisi at molestias assumenda nihil quos rem aliquam magni!
            Distinctio voluptatum aliquam voluptate, omnis maxime praesentium
            eligendi earum, quos quas animi architecto nemo ipsa cupiditate,
            illo iusto repellendus optio. Quae, odit porro.
          </p>
          <div className={Styles["Tech-stack"]}>
                  <ol>
                    <li>Apex</li>
                    <li>LWC</li>
                    <li>SFDX</li>
                    <li>Flow</li>
                    <li>JavaScript</li>
                    <li>CRM</li>
                  </ol>
          </div>
        </div>
        
      </div>
      <div className={Styles.Card}>
        <div className={Styles.Duration}>
          <p>2021 - Jul 2022</p>
        </div>
        <div className={Styles.Description}>
          <h1>Technical Support ~ Niport Connect</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            maxime dignissimos quaerat reiciendis corrupti minus, odio ipsa
            natus nisi at molestias assumenda nihil quos rem aliquam magni!
            Distinctio voluptatum aliquam voluptate, omnis maxime praesentium
            eligendi earum, quos quas animi architecto nemo ipsa cupiditate,
            illo iusto repellendus optio. Quae, odit porro.
          </p>
          <div className={Styles["Tech-stack"]}>
                  <ol>
                    <li>PHP</li>
                    <li>WordPress</li>
                    <li>CRM</li>
                    <li>Databases</li>
                    <li>JavaScript</li>
                  </ol>
          </div>
        </div>
        
      </div>
      <div className={Styles.Card}>
        <div className={Styles.Duration}>
          <p>2021 - Aug 2021</p>
        </div>
        <div className={Styles.Description}>
          <h1>Software Developer ~ Tata Consultancy Services</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            maxime dignissimos quaerat reiciendis corrupti minus, odio ipsa
            natus nisi at molestias assumenda nihil quos rem aliquam magni!
            Distinctio voluptatum aliquam voluptate, omnis maxime praesentium
            eligendi earum, quos quas animi architecto nemo ipsa cupiditate,
            illo iusto repellendus optio. Quae, odit porro.
          </p>
          <div className={Styles["Tech-stack"]}>
                  <ol>
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>Frontend</li>
                    <li>Web</li>
                    <li>JavaScript</li>
                  </ol>
          </div>
        </div>
        
      </div>
      <div className={Styles.Card}>
        <div className={Styles.Duration}>
          <p>2020 - Ocb 2020</p>
        </div>
        <div className={Styles.Description}>
          <h1>Junior Software Developer ~ CCD</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            maxime dignissimos quaerat reiciendis corrupti minus, odio ipsa
            natus nisi at molestias assumenda nihil quos rem aliquam magni!
            Distinctio voluptatum aliquam voluptate, omnis maxime praesentium
            eligendi earum, quos quas animi architecto nemo ipsa cupiditate,
            illo iusto repellendus optio. Quae, odit porro.
          </p>
          <div className={Styles["Tech-stack"]}>
                  <ol>
                    <li>C#</li>
                    <li>ASP.Net</li>
                    <li>SQL</li>
                    <li>Web</li>
                    <li>JavaScript</li>
                  </ol>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Experience;
