import './Footer.scss'
import infilogo from '../../images/infilogo.png'
import iiitlogo from '../../images/iiitbwhite.png'
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return <div className="Footer row">
        <div className="row slantrow">
            <div className="slantstrip">
                <span className='slantspan'>FIN8. 2023. INFIN8. 2023. INFIN8. 2023. INFIN8. 2023. INFIN8. 2023. INFIN8. 2023. INFIN8.</span>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="row">
                <div className="col-2"></div>
                <div className="col-9 socialcol">
                    <div className="row">
                        <div className="touch">
                            Get in touch.
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7 col-md-5 col-lg-4 sociallabel">Twitter</div>
                        <div className="col-4 iconcol">
                        <a href="https://twitter.com/IIITB_official?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="sociallink">
                        <BsTwitter className='saicon'></BsTwitter>
                        </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7 col-md-5 col-lg-4 sociallabel">Instagram</div>
                        <div className="col-4 iconcol">
                        <a href="https://instagram.com/infin8_iiitb?igshid=NTdlMDg3MTY=" className="sociallink">
                        <BsInstagram className='saicon'></BsInstagram>
                        </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7 col-md-5 col-lg-4 sociallabel">LinkedIn</div>
                        <div className="col-4 iconcol">
                        <a href="https://www.linkedin.com/school/iiitbofficial/" className="sociallink">
                        <BsLinkedin className='saicon'></BsLinkedin>
                        </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7 col-md-5 col-lg-4 sociallabel">Facebook</div>
                        <div className="col-4 iconcol">
                        <a href="https://m.facebook.com/IIITBofficial/" className="sociallink">
                        <BsFacebook className='saicon'></BsFacebook>
                        </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="row">
                    <div className="col-7 logocol">
                        <img src={infilogo} alt="image" className='footerimg1'/>
                    </div>
                    <div className="col-5 logocol">
                        <img src={iiitlogo} alt="image" className='footerimg2'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;