import "./About.scss"
import Bounce from 'react-reveal/Bounce';
const About = (props) => {
    return <div className="About">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="row">
                    <div className="about">{props.title}</div>
                </div>
                <Bounce top>
                    <div className="row">
                        <div className="infin8">{props.subtitle}</div>
                    </div>
                </Bounce>
            </div>
            <div className="col-12 col-md-6">
                <div className="para">
                {props.content}        </div>
            </div>
        </div>
    </div>
}

export default About;