function Nav({ className = '' }) {

    return (
        <div id="nav" className={className}>
            <a href="#header">Konrad Foulk</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
        </div>
    );
}

export default Nav