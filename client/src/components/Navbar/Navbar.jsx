import './Navbar.scss';

const Navbar = () => {
    return <div className="Navbar d-none d-md-block">
        <div className="largescreens d-none d-md-block">
            <div className="row navrow">
                <div className="col-3 col-lg-2">
                    <a href="#" className="navbutton">
                        Home
                    </a>
                </div>
                <div className="col-3 col-lg-2">
                    <a href="#" className="navbutton">
                        Events
                    </a>
                </div>
                <div className="col-3 col-lg-2">
                    <a href="#" className="navbutton">
                        Team
                    </a>
                </div>
                <div className="d-none d-lg-block col-lg-4"></div>
                <div className="col-3 col-lg-2">
                    <a href="#" className="navbutton">
                        Profile
                    </a>
                </div>
            </div>
        </div>


        <div className="smallscreens d-block d-md-none">

        </div>
    </div>
}

export default Navbar;