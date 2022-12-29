import './TimeLine.scss';

import LeftCard from './LeftCard';

const TimeLine = () => {
    return <div className="Timeline">
        {/* heading  */}
        <div className="row">
            <div className="heading">
                TIMELINE
            </div>
        </div>
        <div className="row">
            <div className="col"></div>
            <div className="col-8 col-md-4">
                <div className="beginRect">
                    INFIN8 BEGINS
                </div>
            </div>
            <div className="col"></div>
        </div>

        {/* timeline cards */}
        <div className="row">
            <div className="lineBox col-6">
                <LeftCard image="../../images/concert.jpeg" title="Title" incentives="Fuckall" time="12.20PM"></LeftCard>
            </div>
            <div className="col-6">

            </div>
        </div>

    </div>
}

export default TimeLine;