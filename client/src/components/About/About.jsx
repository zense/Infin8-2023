import "./About.scss"
import Bounce from 'react-reveal/Bounce';
const About = (props) => {
    return <div className="About">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="row">
                    <div className={props.center ? "about centertext" : "about"}>{props.title}</div>
                </div>
                <Bounce top>
                    <div className="row">
                        <div className={props.center ? "infin8 centertext" : "infin8"}>{props.subtitle}</div>
                    </div>
                </Bounce>
            </div>
            <div className="col-12 col-md-6">
                <div className="para">
                {props.content}</div>
            </div>
        </div>
    </div>
}

export default About;