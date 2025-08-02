import './TagBtn.css'
import resume from '../assets/Konrad_Foulk_Work_Resume_(Updated 08-23).pdf'

function TagBtn() {

    return (
        <a id="tag-btn" href={resume} download='CV_Konrad_Foulk.pdf'>RESUME</a>
    )
};

export default TagBtn