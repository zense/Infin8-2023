import React from "react";
import DUMMY from "../../images/concert.jpeg";
import ARROW from "../../images/Vector1.png";
import Title from "./Title";
import "./style.css";
function LeftCard(props){
    return (
        <>
            <div className="col-lg-4 col-md-6 BigCard" style={{marginBottom: 100}}>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 LeftCards">
                        <img src={DUMMY} className="val"></img>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10" style={{paddingLeft: 2}}>
                        <div className="Titl"> {props.title}</div>
                        <div className="incen">{props.Incentives}</div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-6 edge"><a href="#">View Details</a></div>
                            <div className="col-6 edge" style={{borderLeft: 0}}><a href="#">Register</a></div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>


            <div className="col-12 SmallCard">
                <div className="row">
                    <div className="col-6 edge" ><img src={DUMMY} className="val"></img></div>
                    <div className="col-6 edge" style={{borderLeft: 0}}>
                        <div className="Titl"> {props.title}</div>
                        <div className="incen">{props.Incentives}</div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-6 edge1" style={{borderTop: 0}}>
                        <a href="#">Details</a>
                        <img src={ARROW} className="arrowpoint"></img>
                    </div>
                    <div className="col-6 edge1" style={{borderLeft: 0 , borderTop: 0}}>
                        <a href="#">Register</a>
                        <img src={ARROW} className="arrowpoint1"></img>
                        </div>
                </div>
            </div>

        </>
    )
}
function RegisterCard(props){
    return (
        <>
        <Title></Title>
        <div className="container RegisterCard">
            <div className="row marginchange">
                <LeftCard title="Title" Incentives="Incentives"/>
                <LeftCard title="Title" Incentives="Incentives"/>
                <LeftCard title="Title" Incentives="Incentives"/>
                <LeftCard title="Title" Incentives="Incentives"/>
                <LeftCard title="Title" Incentives="Incentives"/>
                <LeftCard title="Title" Incentives="Incentives"/>
                
            </div>
        </div>
        </>
    )
}
export default RegisterCard;