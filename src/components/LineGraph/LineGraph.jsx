import React from 'react';
import './LineGraph.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/**
 * Component showing the user's data in line graph
 * @component 
 * @return {component} 
 */
function LineGraph({data, title}) {

  const week = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D'
  };
  /**
  * Format X axis label to display first day letter of week array instead of index
  * @returns Formated Xaxis
  */
  const CustomXaxis = (tick) => {
    return week[tick];
  };

  /**
  * Modify the tip bar graph
  * @param {object}  tooltip  {active , payload} 
  * @return html element with new payload value
  */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <p className="customTooltipLabel">{`${payload[0].value}min`}</p>
        </div>
      )
    }
    return null
  };

  return (
    <section className="LineGraph">
      <h3 className="LineGraphTitle">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 0,
          }}>
          <CartesianGrid
            vertical={false}
            horizontal={false}/>
          <XAxis
            tickFormatter={CustomXaxis}
            axisLine={false}
            tickLine={false}
            dataKey={'day'}
            stroke="white"
            padding={{ left: 15, right: 15 }}
            />
          <YAxis
              hide={true}
              domain={['dataMin-25', 'dataMax+40']}
              />
          <Tooltip content={<CustomTooltip />}/>
          <Line
          type="natural"
          stroke="white"
          strokeWidth={2} 
          activeDot={{ r: 4 }}
          dot={false}
          dataKey="sessionLength"
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

LineGraph.propTypes = {
  /**
   * data is an array
   */
  data: PropTypes.array.isRequired
};

export default LineGraph;
