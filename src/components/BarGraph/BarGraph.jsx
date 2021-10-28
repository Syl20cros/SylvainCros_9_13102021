import React from 'react';
import './BarGraph.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/**
 * Component showing the user's data in bar graph
 * @component 
 * @return {component} 
 */
function BarGraph({ data }) {

  /**
  * Modify the tip bar graph
  * @param {object}  tooltip  {active , payload} 
  * @return html element with new payload value
  */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <p className="customTooltipLabel">{`${payload[0].value}kg`}</p>
          <p className="customTooltipLabel">{`${payload[1].value}Kcal`}</p>
        </div>
      )
    }
    return null
  };

  /**
  * Modify the style and texte of bar graph legend
  * @param {string} value actual legend text 
  * @return html element with new value
  */
  const CustomLegend = (value) => {
    const style = { color: "#74798C", fontSize: "14px" }
    value = value === "kilogram" ? "Poids (kg)" : "Calories brûlées (Kcal)"
    return <span style={style}>{value}</span>
  };

  return (
    <section className="BarGraph">
      <h3 className="BarGraphTitle">Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false} />
          <XAxis
            dataKey={'index'}
            tickLine={false} />
          <YAxis
            tickLine={false}
            tickCount={3}
            orientation={'right'}
            axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            formatter={CustomLegend}
            align={'right'}
            verticalAlign={'top'}
            iconType={'circle'}
            iconSize={'8'}
            wrapperStyle={{ paddingBottom: '50px' }}
          />
          <Bar dataKey="kilogram" fill="#282D30" radius={[5, 5, 0, 0]} barSize={10} />
          <Bar dataKey="calories" fill="#E60000" radius={[5, 5, 0, 0]} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

BarGraph.propTypes = {
  /**
   * data is an array
   */
  data: PropTypes.array.isRequired
};

export default BarGraph;
