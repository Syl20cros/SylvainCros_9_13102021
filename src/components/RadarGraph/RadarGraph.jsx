import React from 'react';
import './RadarGraph.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


function RadarGraph({input}) {

  /**
     * Put first letter of each tick in uppercase, cardio becomes Cardio
     * @returns user activity intensity sessions
     */
  const CustomPolarAngleAxis = (tick) => {
    return input.kind[tick].charAt(0).toUpperCase() + input.kind[tick].slice(1);
  };

  return (
    <section className="RadarGraph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={input.data} cx={'center'} cy={'center'} outerRadius={75} >
              <PolarGrid radialLines={false} />
              <PolarAngleAxis
                  tickFormatter={CustomPolarAngleAxis}
                  dataKey="kind"
                  stroke="white"
                  tickLine={false}
                  fontSize={12}
              />
              <Radar dataKey="value" fill="red" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}

RadarGraph.propTypes = {
  /**
   * object is required
   */
   input: PropTypes.object.isRequired
};

export default RadarGraph;
