import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import API from '../../data/API';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import CallBarGraph from '../../components/BarGraph/CallBarGraph';
import CallLineGraph from '../../components/LineGraph/CallLineGraph';
import CallRadarGraph from '../../components/RadarGraph/CallRadarGraph';
import RadialGraph from '../../components/RadialGraph/RadialGraph';
import TagInfos from '../../components/TagInfos/TagInfos';

/**
 * Component showing the home page
 * @component 
 * @return {component} home page with all user's profil data
 */
function Dashboard() {
    const [userSelect, setUserSelect] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const userID = 18;

    useEffect(() => {
        API.getInitialUser(userID)
            .then((response) => {
                setUserSelect(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className='loading'>Loading</div>;
    } else if (error) {
        return <div className='error'>Erreur</div>;
    } else {
        return (
            <main className="dashboard">
                <DashboardHeader selectedUser={userSelect}/>
                <div className="contentDashboard">
                    <div className="graphs">
                        <CallBarGraph selectedUser={userSelect}/>
                        <div className="smallGraph">
                            <CallLineGraph selectedUser={userSelect}/>
                            <CallRadarGraph selectedUser={userSelect}/>
                            <RadialGraph score={userSelect.todayScore*100}/>
                        </div>
                    </div>
                    <aside className="dashboardTag">
                        <TagInfos 
                            value={userSelect.keyData.calorieCount/1000}
                            type='Calories'
                            unit='kCal'
                        />
                        <TagInfos 
                            value={userSelect.keyData.proteinCount} 
                            type='Proteines' 
                            unit='g'
                        />
                        <TagInfos 
                            value={userSelect.keyData.carbohydrateCount} 
                            type='Glucides' 
                            unit='g'
                        />
                        <TagInfos 
                            value={userSelect.keyData.lipidCount} 
                            type='Lipides' 
                            unit='g'
                        />
                    </aside>
                </div>
            </main>
        );
    }
}

export default Dashboard;
