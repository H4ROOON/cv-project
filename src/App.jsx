import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import "./App.css";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
function App() {
  const cvRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: "Haroon-CV",
  });

  return (
    <div className="cv-page">
      <div className="cv-container">
        <header className="cv-header">
          <h1>Haroon Adeel</h1>
          <p className="sub">Frontend Developer</p>
        </header>

        <hr className="cv-hr" />

        {/* Printable content */}
        <div ref={cvRef}>
          <section className="section">
            <h2>General Info</h2>
            <div className="section-content">
              <GeneralInfo />
            </div>
          </section>

          <section className="section">
            <h2>Education</h2>
            <div className="section-content">
              <Education />
            </div>
          </section>

          <section className="section">
            <h2>Experience</h2>
            <div className="section-content">
              <Experience />
            </div>
          </section>

          <section className="section">
            <h2>Skills</h2>
            <div className="section-content">
              <Skills />
            </div>
          </section>
        </div>
        <section className="app">
          <div className="actions">
            <button className="btn primary" onClick={handlePrint}>
              Download PDF
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
