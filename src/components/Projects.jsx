import Project from "./Project";
import MLBImage from "./pictures/MLB.png";
import planeImage from "./pictures/plane.png";
import stocksImage from "./pictures/stocks.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Covered Call Options Trading Application",
      description:
        "Engineered a full-stack ML trading platform using Python/Flask and Random Forest models, analyzing 100K+ financial records across 15+ technical indicators to generate options insights and price predictions. Applied these same trading strategies to achieve a top placement in IMC's 2024 global trading challenge. Built real-time data pipeline (Polygon API, PostgreSQL/Supabase) and deployed RESTful API with responsive Render dashboard.",
      image: stocksImage,
      codeLink: "https://github.com/ShriyanG/covered-call-app",
    },
    {
      title: "Direct Flights Database",
      description:
        "Utilized MySQL for backend development and React for frontend connectivity to create a seamless travel planning website, featuring advanced queries, stored procedures, and efficient data management. Employed Python's Pandas library to efficiently parse and feed data from a database of over 65K routes into a MySQL server, while leveraging C++ to implement shortest-path algorithms, iterative search methods, and graph structures.",
      image: planeImage,
      codeLink:
        "https://github.com/lotlouischoitslab/Direct-Flight-Airport-Connections",
    },
    {
      title: "(ML)B",
      description:
        "Utilized Sci-kit machine learning and Numpy libraries to develop the back-end of an app, deploying logistic regression and experimenting with models like Adaboost to predict baseball games with over 60% accuracy. Implemented a Python parser using BeautifulSoup to scrape data from ESPN and MLB-Stats API's while experimenting with component analysis to factor in the most influential statistics and integrated it with the frontend team using Django.",
      image: MLBImage,
      codeLink: "https://github.com/CS196Illinois/Group25",
    },
  ];

  return (
    <div className="projects-section">
      <h1 className="section-heading">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
