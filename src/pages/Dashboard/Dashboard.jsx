import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import API from '../../data/API';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import CallBarGraph from '../../components/BarGraph/CallBarGraph';
import CallLineGraph from '../../components/LineGraph/CallLineGraph';

function Dashboard() {
    const [userSelect, setUserSelect] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        API.getInitialUser(12)
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
                <CallBarGraph selectedUser={userSelect}/>
                <CallLineGraph selectedUser={userSelect}/>
            </main>
        );
    }
}

export default Dashboard;
