import './Projects.css'
import notesAppVideo from '../assets/notes_app.mp4'
import jobFinderVideo from '../assets/job_finder.mp4'
import taxCalculatorVideo from '../assets/tax_calculator.mp4'

function Projects() {

    return (
        <section id="projects">
            <p className="heading">Projects</p>
            <div className="project element">
                <div className="wrapper">
                    <a href="#" className="link">Notes App</a>
                    <p className="description">Rich text editor clone of iCloud Notes and Notion</p>
                </div>
                <div className="preview">
                    <video src={notesAppVideo} autoPlay muted loop></video>
                </div>
            </div>
            <div className="project element">
                <div className="wrapper">
                    <a href="#" className="link">Job Finder</a>
                    <p className="description">Query APIs to output a list of job postings to a CSV</p>
                </div>
                <div className="preview">
                    <video src={jobFinderVideo} autoPlay muted loop></video>
                </div>
            </div>
            <div className="project element">
                <div className="wrapper">
                    <a href="#" className="link">Tax Calculator</a>
                    <p className="description">Find the income required to take home an inputted desired income after tax</p>
                </div>
                <div className="preview">
                    <video src={taxCalculatorVideo} autoPlay muted loop></video>
                </div>
            </div>
            <div className="project element">
                <div className="wrapper">
                    <a href="#" className="link">Portfolio Site</a>
                    <p className="description">Simple, clear, effective, me. Inspired by Paco, Seyit, and Azuki</p>
                </div>
                <div className="preview"></div>
            </div>
        </section>
    );
};

export default Projects