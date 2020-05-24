import React from 'react';
import { Line } from 'react-chartjs-2'

const options = {
  title: {
    display: true,
    text: 'Average salary'
  },
  legend: {
    display: false,
    position: 'top'
  }
};

const dataTemplate = (data = null) => {
  // default value just to draw sample chart 
  const initialValue = [2, 9, 2, 9, 5, 1, 1];

  return {
    labels: ['50k', '75k', '100k', '125k', '150k', '175k', '225k'],
    datasets: [
      {
        label: 'average salary',
        fill: true,
        lineTension: 0.4,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        data: data || initialValue,
      }
    ]
  }
};


function AreaChart(props) {
  const { data } = props;
  return <Line data={dataTemplate(data)} options={options} />
}

export default AreaChart;