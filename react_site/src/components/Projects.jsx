function Projects() {

    return (
        <div id="projects">
            <p className="colored">Projects</p>
            <div className="project">
                <a href="#" className="project-link">Notes App</a>
                <div className="preview"></div>
                <p className="project-description">Rich text editor clone of iCloud Notes and Notion</p>
            </div>
            <div className="project">
                <a href="#" className="project-link">Job Finder</a>
                <div className="preview"></div>
                <p className="project-description">Query APIs to output a list of job postings to a CSV</p>
            </div>
            <div className="project">
                <a href="#" className="project-link">Tax Calculator</a>
                <div className="preview"></div>
                <p className="project-description">Find the income required to take home an inputted desired income after tax</p>
            </div>
            <div className="project">
                <a href="#" className="project-link">Portfolio Site</a>
                <div className="preview"></div>
                <p className="project-description">Simple, clear, effective, me. Inspired by Paco, Seyit, and Azuki</p>
            </div>
        </div>
    );
};

export default Projects