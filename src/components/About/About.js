import React from "react";
import Styles from "./About.module.css";

const About = () => {
  return (
    <div className={Styles.Container}>
      <h2>About Me</h2>
      <div className={Styles.About}>
        <div className={Styles.Introduction}>
          <p>
            Hello! I'm Gomolemo, a passionate software developer with a strong
            background in building dynamic and innovative web applications. My
            journey in the realm of software development has been marked by a
            profound enthusiasm for creating seamless and efficient solutions.
          </p>
          <p>
            Specializing in a diverse range of technologies, I thrive on
            crafting robust web applications that deliver exceptional user
            experiences. My toolkit includes:
          </p>
          <div className={Styles["Software-tech"]}>
            <div className={Styles.Tech}>
              <ol>
                <li>MongoDb</li>
                <li>ExpressJs</li>
                <li>React</li>
                <li>Nodejs</li>
                <li>WordPress</li>
              </ol>
            </div>
            <div className={Styles.Tech}>
              <ol>
                <li>C#</li>
                <li>PHP Laravel</li>
                <li>SQL</li>
                <li>Firebase</li>
                <li>JavaScript</li>
              </ol>
            </div>
          </div>
        </div>
        <div className={Styles.Stack}>
          <p>
            Delving into the dynamic CRM technologies arena, I've dedicated
            valuable time to honing my skills in Salesforce, where I proudly
            hold 4x certifications as both a Salesforce Developer and
            Consultant. My expertise extends to Sales Cloud, Service Cloud, and
            Field Service, showcasing a comprehensive understanding of these key
            Salesforce technologies.
          </p>
          <p>Some of the certificates I hold: </p>
          <ol>
            <li>Salesforce Certified AI assoicate</li>
            <li>Salesforce Certified Adminstrator</li>
            <li>Salesforce Certified Platform App Builder</li>
            <li>Salesforce Certified Platform Developer I</li>
          </ol>
        </div>
        <p>
          My commitment to staying abreast of the latest industry trends and
          continuously expanding my skill set enables me to tackle diverse
          challenges and deliver cutting-edge solutions. Whether it's creating a
          seamless user interface or optimizing backend processes, I take pride
          in transforming ideas into tangible, high-performance web
          applications. Let's embark on a journey to turn your vision into a
          reality through the art and science of web development!
        </p>
      </div>
    </div>
  );
};

export default About;
