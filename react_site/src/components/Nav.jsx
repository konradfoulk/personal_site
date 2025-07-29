function Nav({ className = '' }) {

    function scrollToId(id) {
        const el = document.getElementById(id)
        el.scrollIntoView({ block: 'center' })
        el.scrollTo
    }

    return (
        <div id="nav" className={className}>
            <button onClick={() => scrollToId('header')}>Konrad Foulk</button>
            <button onClick={() => scrollToId('content')}>Projects</button>
            <button onClick={() => scrollToId('about')}>About</button>
            <button onClick={() => scrollToId('skills')}>Skills</button>
        </div>
    );
}

export default Nav