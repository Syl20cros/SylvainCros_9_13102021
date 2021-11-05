import React from 'react';
import './RadialGraph.css';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/**
 * Component showing the user's daily score in radial graph
 * @component 
 * @param {number} score: user score in %
 * @return {component} 
 */
function RadialGraph({ score }) {
  const data = [
    {
      uv: score,
      fill: '#FF0000',
    },
    {
      uv: 100,
      fill: '#FBFBFB'
    }
  ]


  return (
    <section className="radialGraphContainer">
      <h3 className="radialGraphTitle">Score</h3>
      <div className="scoreDisplay">
        <ResponsiveContainer width={200} height={200}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="100%"
            data={data}
            startAngle={90}>
            <RadialBar
              minAngle={15}
              clockWise={true}
              dataKey="uv"
              className="radial"
              cornerRadius={40}
              background={{ fill: '#FBFBFB' }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="scoreText">
          <div className="scorePurcentage">{score}%</div>
          <div className="scoreSubText">de votre <br></br>objectif</div>
        </div>
      </div>
    </section>
  );
}

RadialGraph.propTypes = {
  /**
   * score is percent of daily aim
   */
  score: PropTypes.number.isRequired
};

export default RadialGraph;
