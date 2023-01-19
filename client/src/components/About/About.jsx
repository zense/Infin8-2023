import "./About.scss"
import Bounce from 'react-reveal/Bounce';
const About = () => {
    return <div className="About">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="row">
                    <div className="about">ABOUT</div>
                </div>
                <Bounce top>
                    <div className="row">
                        <div className="infin8">infin8</div>
                    </div>
                </Bounce>
            </div>
            <div className="col-12 col-md-6">
                <div className="para">
                IIIT Bangalore is back with a BANG with its 8th iteration of INFIN8- BIGGER and BETTER than before. Hold on to your seats as we present to you the largest and most exciting fest of our institute! A plethora of events awaits you to showcase your inner artist: War of words, Esports, Digital Art, Photography, Singing and Dance competitions and a lot more! Join in and be a part of this fun ride along with us @IIIT Bangalore. See you at the starting point of a marathon of mind-boggling, rib-tickling and adrenaline pumping events!                </div>
            </div>
        </div>
    </div>
}

export default About;