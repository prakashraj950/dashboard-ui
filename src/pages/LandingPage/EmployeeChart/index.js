import React from 'react';
import { Box } from '@mui/material';
import Chart from 'react-apexcharts';

const EmployeeChart = () => {
  const options = {
    chart: {
      type: 'line',
      height: 263,
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: [0, 4]
    },
    // title: {
    //   text: 'Monthly Data'
    // },
    dataLabels: {
    //   enabled: true,
      enabledOnSeries: [1]
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    xaxis: {
      type: 'category'
    },
    yaxis: [
      {
        title: {
        //   text: 'Bar Data',
        },
      },
      {
        opposite: true,
        title: {
        //   text: 'Line Data'
        }
      }
    ]
  };

  const series = [
    {
      name: 'Bar Data',
      type: 'column',
      data: [2000, 3000, 2000, 1500, 3500, 4000, 1000, 3000, 4500, 2500, 2000, 3500]
    },
    {
      name: 'Line Data',
      type: 'line',
      data: [1200, 1400, 1000, 1500, 2100, 2000, 900, 1200, 2500, 1800, 1200, 1600]
    }
  ];

  return (
    <Box sx={{ p: 1, }}>
      <Chart options={options} series={series} type="line" height={263} />
    </Box>
  );
};

export default EmployeeChart;
