import React from "react";
import GithubIcon from "../github.svg";
import EmailIcon from "../email.svg";
import LinkedInIcon from "../linkedin.svg";
import SalesforceIcon from "../salesforce-2.svg";

const Home = () => {
  return (
    <div className="Home-container">
      <section className="home-content">
        <h1>Hi, my name is</h1>
        <h2>Gomolemo Mpyana</h2>
        <h3>I build things for the web.</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          soluta quae fuga sint sequi eius dolorem laudantium. Non perspiciatis,
          fugit nam a fuga tempore. Assumenda aliquid dolores obcaecati
          voluptatum minima veritatis asperiores fugit recusandae sunt deserunt
          totam tempora
        </p>

        <button className="home-action">Let's work!</button>
      </section>

      <aside className="contacts">
        <ul>
          <li>
            <img className="Contact-icon" src={GithubIcon} alt="" />
          </li>
          <li>
            <img className="Contact-icon" src={EmailIcon} alt="" />
          </li>
          <li>
            <img className="Contact-icon" src={LinkedInIcon} alt="" />
          </li>
          <li>
            <img className="Contact-icon" src={SalesforceIcon} alt="" />
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Home;
