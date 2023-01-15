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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde culpa expedita ipsam, nihil distinctio quo exercitationem necessitatibus fuga porro, facere totam! Nihil hic qui quibusdam voluptatum eos veritatis placeat non expedita sapiente in. Illo repudiandae velit omnis numquam incidunt quia optio laudantium quis a tempore! Cumque laboriosam eaque illum optio. Provident amet sunt voluptatem, harum dolore minima dicta deserunt. Veritatis, ex nobis!
                </div>
            </div>
        </div>
    </div>
}

export default About;