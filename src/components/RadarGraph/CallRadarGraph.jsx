import React, { useEffect, useState } from 'react';
import API from '../../data/API';
import Format from '../../data/Format';
import RadarGraph from './RadarGraph';
import PropTypes from 'prop-types';

/**
 * Perform a user intensity of session request to API and display radar graph with data response
 * @component
 */
function CallRadarGraph(props) {
  const { selectedUser } = props;
  const [performance, setPerformance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    API.getSessionIntensity(selectedUser.id)
      .then((response) => {
        setPerformance(
          Format.performanceFormat(response)
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
    <RadarGraph input={performance}/>
    );
  }
}


CallRadarGraph.propTypes = {
  /**
   * User selected
   */
   selectedUser: PropTypes.object.isRequired
};

export default CallRadarGraph;

