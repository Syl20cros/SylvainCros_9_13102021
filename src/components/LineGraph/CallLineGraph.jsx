import React, { useEffect, useState } from 'react';
import API from '../../data/API';
import Format from '../../data/Format';
import LineGraph from './LineGraph';
import PropTypes from 'prop-types';


function CallLineGraph(props) {
  const { selectedUser } = props;
  const [duration, setDuration] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    API.getSessionDuration(selectedUser.id)
        .then((response) => {
            setDuration(
                Format.durationFormat(response).map((duration, i) => {
                    return { ...duration, index: i + 1 };
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
      <LineGraph data={duration} title="Durée moyenne des sessions"/>
    );
  }
}


CallLineGraph.propTypes = {
   /**
   * User selected
   */
    selectedUser: PropTypes.object.isRequired
};

export default CallLineGraph;

