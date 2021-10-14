import React from 'react';
import './SideBar.css';
import icon_yoga from '../../assets/icon_yoga.png';
import icon_swim from '../../assets/icon_swim.png';
import icon_bike from '../../assets/icon_bike.png';
import icon_muscu from '../../assets/icon_muscu.png';

function SideBar() {
        return (
            <div className="SideBar">
                <nav>
                    <a href="*">
                        <img src={icon_yoga} alt="icon_yoga" />
                    </a>
                    <a href="*">
                        <img src={icon_swim} alt="icon_swim" />
                    </a>
                    <a href="*">
                        <img src={icon_bike} alt="icon_bike" />
                    </a>
                    <a href="*">
                        <img src={icon_muscu} alt="icon_muscu" />
                    </a>
                </nav>
                <p className="copiryght">Copiryght, SportSee 2020</p>
            </div>
        );
}

export default SideBar;
