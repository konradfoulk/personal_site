import './Nav.css'

function Nav({ className = '', activeIndex = 0 }) {

    function scrollToId(id) {
        const el = document.getElementById(id)
        el.scrollIntoView({ block: 'center' })
    }

    // Each button is 32px apart vertically
    const indicatorStyle = {
        transform: `translateY(${activeIndex * 32}px)`
    };

    return (
        <div id="nav" className={className}>
            <div id='indicator' style={indicatorStyle}></div>
            <button onClick={() => scrollToId('header')}>Konrad Foulk</button>
            <button onClick={() => scrollToId('projects')}>Projects</button>
            <button onClick={() => scrollToId('about')}>About</button>
            <button onClick={() => scrollToId('skills')}>Skills</button>
        </div>
    );
}

export default Nav