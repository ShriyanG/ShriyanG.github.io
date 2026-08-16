import Project from "./Project";
import aiAnalystImage from "./pictures/ai_analyst.png";
import MLBImage from "./pictures/MLB.png";
import planeImage from "./pictures/plane.png";
import ragPipelineImage from "./pictures/rag_pipeline.svg";
import stocksImage from "./pictures/stocks.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Data Analyst Agent | Jul 2026 - Aug 2026",
      description:
        "Engineered an AI-powered data analysis agent using LangGraph, Ollama, DuckDB, Pandas, and Streamlit, enabling natural-language querying and automated analysis of structured datasets. Designed an agentic workflow that dynamically selects analytical tools, executes data transformations and queries, and generates context-aware visualizations and insights.",
      image: aiAnalystImage,
      codeLink: "https://github.com/ShriyanG",
    },
    {
      title: "RAG-Based Document Retrieval Pipeline | Dec 2025 - Feb 2026",
      description:
        "Built a retrieval-augmented generation (RAG) system with local and OpenAI GPT models, exposed via a scalable FastAPI endpoint for contextual Q&A across hundreds of pages with page-level metadata. Designed and implemented a backend pipeline to extract, process, and store PDFs in Supabase, enabling seamless document retrieval and modular storage switching between local and cloud.",
      image: ragPipelineImage,
      codeLink: "https://github.com/ShriyanG",
    },
    {
      title: "Algorithmic Trading & ML Platform | Apr 2024 - Oct 2025",
      description:
        "Engineered ML-driven trading applications using Python, Flask, Random Forest, and regression models, analyzing 100K+ financial records across 15+ technical indicators to generate options insights, price predictions, and trading strategies. Developed real-time market-data pipelines with Polygon API and PostgreSQL/Supabase for minute-level analysis and backtesting, achieving >60% predictive accuracy and ranking top 250 globally in the IMC Trading Challenge.",
      image: stocksImage,
      codeLink: "https://github.com/ShriyanG/covered-call-app",
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
