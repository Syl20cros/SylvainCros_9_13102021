import React, { useEffect, useState } from 'react';
import './BarGraph.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import API from '../../data/API';
import Format from '../../data/Format';


function BarGraph(props) {
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


  /**
  * Modify the tip bar chart
  * @param {object}  tooltip  {active , payload,  label} 
  * @return html element with new payload value
  */
  const CustomTooltip = ({ active, payload, label }) => {
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
    * the style and texte of bar chart legend
    * @param {string} value actual legend text 
    * @return html element
    */
  const CustomLegend = (value) => {
    const style  = {color : "#74798C", fontSize : "14px"}
    value = value === "kilogram" ? "Poids (kg)" : "Calories brûlées (Kcal)"
    return <span style={style}>{value}</span>   
  };


  if (loading) {
    return <div>Loading</div>;
  } else if (error) {
    return <div>Erreur</div>;
  } else {
    return (
      <section className="BarGraph">
        <h3 className="BarGraphhello">Activité quotidienne</h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={activity}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}/>
            <XAxis
              dataKey={'index'}
              tickLine={false}/>
            <YAxis
                tickLine={false} 
                tickCount={3}
                orientation={'right'}
                axisLine={false}/>
            <Tooltip content={<CustomTooltip />}/>
            <Legend 
                formatter={CustomLegend}
                align={'right'}
                verticalAlign={'top'}
                iconType={'circle'}
                iconSize={'8'}
                margin={{ top: 80, right: 0, left: 0, bottom: 47 }}/>
            <Bar dataKey="kilogram" fill="#282D30" radius={[5, 5, 0, 0]} barSize={10}/>
            <Bar dataKey="calories" fill="#E60000" radius={[5, 5, 0, 0]} barSize={10}/>
          </BarChart>
        </ResponsiveContainer>
      </section>
    );
  }
}

export default BarGraph;
