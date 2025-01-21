import React from "react";
import Project from "./Project";
import MLBImage from "./pictures/MLB.png";
import planeImage from "./pictures/plane.png";
import roundTableImage from "./pictures/roundtable.jpeg";
import stocksImage from "./pictures/stocks.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Stocks Analyzer",
      description:
        "Created a regression model to evaluate stock market trends by correlating options contracts with RSI indicators, improving trading predictions and achieving a Top 250 placement in IMC’s global trading competition. Automated preprocessing of interval-based stock data for RSI, volume, and price analysis using the Pandas library and Polygon.io Stock Data API.",
      image: stocksImage,
      codeLink: "https://github.com/ShriyanG/RSI_Stocks_Gosavi",
    },
    {
      title: "ML(B)",
      description:
        "Utilized Sci-kit Learn, Numpy, and BeautifulSoup to develop a baseball prediction app backend with logistic regression and Adaboost models achieving over 60% accuracy, scraping data from ESPN and MLB-Stats APIs, analyzing key statistics with component analysis, and integrating with the frontend via Django.",
      image: MLBImage,
      codeLink: "https://github.com/CS196Illinois/Group25",
    },
    {
      title: "Direct Flights Database",
      description:
        "Leveraged MySQL, React, Python, and C++ to develop a travel planning website, implementing advanced queries and efficient data management to handle a database of over 65K routes, parsing data with Python’s Pandas, and employing C++ algorithms like shortest-path and graph structures to enable users to find optimal flight paths.",
      image: planeImage,
      codeLink:
        "https://github.com/lotlouischoitslab/Direct-Flight-Airport-Connections",
    },
    {
      title: "RoundTable",
      description:
        "Collaborated in a hackathon team to build a front-end web application using ReactJS, styled with HTML and CSS, to connect college students. Integrated Google Firebase authentication and worked with teammates to configure a NoSQL database in Google Cloud Firestore for storing user login information.",
      image: roundTableImage,
      codeLink: "https://github.com/jathinnm/HackThis2020",
    },
  ];

  return (
    <div className="projects-section">
      <h1 className="projects-title"> Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
