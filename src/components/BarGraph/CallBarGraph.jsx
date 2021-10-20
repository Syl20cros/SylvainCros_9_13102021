import React, { useEffect, useState } from 'react';
import API from '../../data/API';
import Format from '../../data/Format';
import BarGraph from './BarGraph';
import PropTypes from 'prop-types';


function CallBarGraph(props) {
  const { selectedUser } = props;
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    API.getActivity(selectedUser.id)
        .then((response) => {
            setActivity(
                Format.activityFormat(response).map((activity, i) => {
                    return { ...activity, index: i + 1 };
                })
            );
        })
        .catch((error) => {
            console.log(error);
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        });
  }, [selectedUser]);


  if (loading) {
    return <div>Loading</div>;
  } else if (error) {
      return <div>Erreur</div>;
  } else {
      return (
      <BarGraph data={activity} />
    );
  }
}


CallBarGraph.propTypes = {
  /**
   * userId is an integer
   */
  id: PropTypes.number.isRequired
};

export default CallBarGraph;

