import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import API from '../../data/API';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import BarGraph from '../../components/BarGraph/BarGraph';

function Dashboard() {
    const [userSelect, setUserSelect] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        API.getInitialUser(12)
            .then((response) => {
                setUserSelect(response.data.data);
                console.log(response);
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
                <BarGraph selectedUser={userSelect}/>
            </main>
    );
}
}

export default Dashboard;
