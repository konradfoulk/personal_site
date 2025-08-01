import './Nav.css'

function Nav({ className = '' }) {

    function scrollToId(id) {
        const el = document.getElementById(id)
        el.scrollIntoView({ block: 'center' })
    }

    return (
        <div id="nav" className={className}>
            <div id='indicator'></div>
            <button onClick={() => scrollToId('header')}>Konrad Foulk</button>
            <button onClick={() => scrollToId('projects')}>Projects</button>
            <button onClick={() => scrollToId('about')}>About</button>
            <button onClick={() => scrollToId('skills')}>Skills</button>
        </div>
    );
}

export default Nav