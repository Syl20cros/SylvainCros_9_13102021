import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import API from '../../data/API';

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
        return <div>Loading</div>;
    } else if (error) {
        return <div>Erreur</div>;
    } else {
    return (
        <main className="dashboard">
            <DashboardHeader user={userSelect}/>
        </main>
    );
}
}

export default Dashboard;
