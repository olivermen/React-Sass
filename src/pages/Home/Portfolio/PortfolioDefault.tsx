import React from "react";

// import stylesheets
import "./portfolio.scss";
import portfolio1 from "../../../assets/images/portfolio1.png";

// import button components
import Button from "../../../components/Buttons";

interface PortfolioDefaultProps {
  screen: string;
  title: string;
  badge: string;
  description: string;
  design: boolean;
}

const PortfolioDefault = ({
  screen,
  title,
  badge,
  description,
  design,
}: PortfolioDefaultProps) => {
  return (
    <div className="default">
      <div className="title">
        <h1>{design ? "PORTFOLIO" : ""}</h1>
      </div>
      <div className="content">
        <div className="portfolioImage">
          <img
            src={require(`../../../assets/images/${screen}`)}
            width={570}
            height={303}
            alt="portfolio1"
          ></img>
        </div>
        <div className="description">
          <h2>
            {title}
            <span className="badge">{badge}</span>
          </h2>
          <h3>{description}</h3>
          <h4 hidden={!design}>
            Designed by <a href="https://jonny.me">Kristin Killam</a>
          </h4>
          <div className="buttonGroup">
            <Button type="btnDefault" title="Preview" />
            <Button type="btnSecondary" title="Visit site" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDefault;
