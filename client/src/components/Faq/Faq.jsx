import "./Faq.scss"
import Accordion from "./Accordion";

const Faq = ()=>{
    return <div className="Faq">
        <div className="row">
            <div className="col-12 col-md-4">
                <h1 className="heading">
                    FAQ
                </h1>
            </div>
            <div className="col-12 col-md-8">
                <Accordion></Accordion>
            </div>
        </div>
    </div>
}

export default Faq;