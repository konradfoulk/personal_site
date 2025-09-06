import './Projects.css'

export default function Projects() {
    return (
        <section id="projects">
            <p className="heading">Projects</p>
            <div className="project element">
                <div className="wrapper">
                    <a href="https://konradfoulk.pythonanywhere.com/" className="link" target="_blank"
                        rel="noopener noreferrer">Notes App</a>
                    <p className="description">Rich text editor clone of iCloud Notes and Notion</p>
                </div>
                <div className="preview">
                    <video src="/notes_app.mp4" autoPlay muted loop></video>
                </div>
            </div>
            <div className="project element">
                <div className="wrapper">
                    <a href="https://github.com/konradfoulk/job_finder" className="link" target="_blank"
                        rel="noopener noreferrer">Job Finder</a>
                    <p className="description">Query APIs to output a list of job postings to a CSV</p>
                </div>
                <div className="preview">
                    <video src="/job_finder.mp4" autoPlay muted loop></video>
                </div>
            </div>
            <div className="project element">
                <div className="wrapper">
                    <a href="https://taxcalc.konradfoulk.com/" className="link" target="_blank"
                        rel="noopener noreferrer">Tax Calculator</a>
                    <p className="description">Find the income required to take home an inputted desired income after tax</p>
                </div>
                <div className="preview">
                    <video src="/tax_calculator.mp4" autoPlay muted loop></video>
                </div>
            </div>
            <div className="project element">
                <div className="wrapper">
                    <a href="https://github.com/konradfoulk/personal_site" className="link" target="_blank"
                        rel="noopener noreferrer">Portfolio Site</a>
                    <p className="description">Simple, clear, effective, me. Inspired by Paco, Seyit, and Azuki</p>
                </div>
                <div className="preview">
                    <video src="/personal_site.mp4" autoPlay muted loop></video>
                </div>
            </div>
        </section>
    )
}