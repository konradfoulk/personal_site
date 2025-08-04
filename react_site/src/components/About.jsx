import './About.css'

function About() {

    return (
        <section id="about">
            <p className="text-element">Aspiring Software Engineer</p>
            <p className="text-element">I love creating systems. Extracting maximum efficiency from everything I see is my obsession. Programming is my favorite medium to turn my ideas into real-world applications.</p>
            <p className="element context">I focus on three core principals:</p>
            <div className="element" id='principles'>
                <p>Automate tasks with CS fundamentals.</p>
                <p>Share to the web so projects can be used and improved.</p>
                <p>Integrate others work using APIs to expand capabilities.</p>
            </div>
            <p className="text-element">I am happiest when I am increasing my ability to do things. My dream is an occupation that keeps me learning new skills around my passions, and connects me with like-minded people.</p>
        </section>
    );
};

export default About