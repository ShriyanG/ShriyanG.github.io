import React from "react";
import Project from "./Project";
import MLBImage from "./pictures/MLB.png";
import planeImage from "./pictures/plane.png";
import prisonImage from "./pictures/prison.png";
import roundTableImage from "./pictures/roundtable.jpeg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ML(B)",
      subtitle:
        "Machine learning model to predict the outcome of baseball games",
      description:
        "I had the opportunity to collaborate with a talented team while utilizing powerful machine learning libraries like Sci-kit and Numpy to develop a back-end application. Together, we created a logistic regression model that predicts baseball game outcomes with over 60% accuracy. Through experimentation with different algorithms, including AdaBoost, and the incorporation of component analysis to factor in influential MLB game statistics, we optimized the predictive capabilities of our solution. Additionally, I played a key role in implementing a Python parser using BeautifulSoup to efficiently scrape data from ESPN and MLB-Stats APIs, seamlessly integrating it with the front-end using Django. This collaborative effort highlights my proficiency in machine learning, data analysis, and web development.",
      image: MLBImage,
      codeLink: "https://github.com/CS196Illinois/Group25",
    },
    {
      title: "Direct Flights Database",
      subtitle:
        "Optimized database to help users plan trips with direct flights",
      description:
        "Through my proficiency in MySQL, React, Python, and C++, I made significant contributions to the development of a comprehensive travel planning website. Leveraging MySQL, I implemented advanced queries, stored procedures, and efficient data management in the backend, ensuring a seamless user experience. Handling a database of over 65K routes, I efficiently parsed and fed data using Python's Pandas library, ensuring reliable data flow into the MySQL server. Additionally, I utilized C++ to implement powerful algorithms, including shortest-path algorithms, iterative search methods, and graph structures, enabling users to find the shortest flight path between two airports. This project showcases my expertise in backend development, frontend connectivity, data parsing, and algorithm implementation.",
      image: planeImage,
      codeLink:
        "https://github.com/lotlouischoitslab/Direct-Flight-Airport-Connections",
    },
    {
      title: "Prison Break",
      subtitle:
        "Game developed from Unreal Game Engine to simulate a prison break",
      description:
        "In collaboration with a talented team, we developed a captivating 7+ minute playable game using the Unreal gaming engine. Leveraging our skills in C/C++ and Blueprints, we implemented engaging game mechanics, stunning graphics, and intuitive user interface elements, resulting in a polished final product. Optimizing game performance, we identified use cases and resolved hardware and software platform compatibility issues, ensuring an enhanced and seamless gaming experience.",
      image: prisonImage,
      codeLink: "https://github.com/iramesh2/415prisonGame",
    },
    {
      title: "RoundTable",
      subtitle:
        "An educational lightweight tool to seamlessly connect with virtual students",
      description:
        "During an exhilarating hackathon, our collaborative team successfully designed and developed a front-end Android web application using ReactJS. Leveraging HTML and CSS, we created an intuitive and visually appealing interface specifically tailored for college students. To ensure secure user authentication, we implemented Google Firebase authentication, delivering a seamless and reliable login experience. Additionally, we worked closely together to establish a robust NoSQL database using Google Cloud Firestore, enabling efficient storage and retrieval of user login information.",
      image: roundTableImage,
      codeLink: "https://github.com/jathinnm/HackThis2020",
    },
    // Add more projects as needed
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
