import React from 'react';
import './DashboardHeader.css';
//import PropTypes from 'prop-types';

/**
 * @component
 * @returns Custom welcome with firstName and a congratulation message
 */
function DashboardHeader(props) {

        const { user } = props;

        let message;

        /*If calorieCount is < 2000 then message takes a value else it takes another*/
        if (user.keyData.calorieCount < 2000) {
            message = 'On y est presque, un petit effort 💪';
        } else {
            message = 'Félicitation ! Vous avez explosé vos objectifs hier 👏';
        }
        return (
            <div className="DashboardHeader">
                <h2 className="DashboardHeaderhello">Bonjour {user.userInfos.firstName}</h2>
                <p className="DashboardHeaderMessage">{message}</p>
            </div>
        );
}


export default DashboardHeader;
