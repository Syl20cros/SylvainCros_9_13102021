import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import API from '../../data/API';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import CallBarGraph from '../../components/BarGraph/CallBarGraph';
import CallLineGraph from '../../components/LineGraph/CallLineGraph';
import CallRadarGraph from '../../components/RadarGraph/CallRadarGraph';
import RadialGraph from '../../components/RadialGraph/RadialGraph';
import TagInfos from '../../components/TagInfos/TagInfos';

function Dashboard() {
    const [userSelect, setUserSelect] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        API.getInitialUser(18)
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
            </main>
        );
    }
}

export default Dashboard;
