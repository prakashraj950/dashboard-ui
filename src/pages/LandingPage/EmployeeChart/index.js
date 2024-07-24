import React from 'react';
import { Box } from '@mui/material';
import Chart from 'react-apexcharts';

const EmployeeChart = () => {
    const options = {
        chart: {
            type: 'line',
            height: 263,

            toolbar: {
                show: false,
                events: {
                    render: () => {
                        const bars = document.querySelectorAll('.apexcharts-bar-series .apexcharts-series-markers rect');
                        bars.forEach(bar => {
                            bar.style.borderTopLeftRadius = '4px';
                            bar.style.borderTopRightRadius = '4px';
                        });
                    }
                }


            }
        },
        stroke: {
            curve: 'smooth', 
            width: [0, 4],
            colors: ['#002B55BD'] 
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
        // yaxis: [
        //     {
        //         title: {
        //             //   text: 'Bar Data',
        //         },
        //     },
        //     {
        //         opposite: true,
        //         title: {
        //             //   text: 'Line Data'
        //         }
        //     }
        // ],
        plotOptions: {
            bar: {
                borderRadiusTop: 5,
                colors: {
                    ranges: [{
                        from: 0,
                        to: Infinity,
                        color: '#277ACC'
                    }]
                }
            }
        },

        legend: {
            show: false  // Hide the legend
        }
    };

    const series = [
        {
            name: 'Bar Data',
            type: 'column',
            data: [2000, 3000, 2000, 1500, 3500, 4000, 1000, 3000, 4500, 2500, 2000, 3500],
            color:"#277ACC"
        },
        {
            name: 'Line Data',
            type: 'line',
            data: [1200, 1400, 1000, 1500, 2100, 2000, 900, 1200, 2500, 1800, 1200, 1600],
            color:"#002B55BD"
        }
    ];

    return (
        <Box sx={{ p: 1, }} >
            <Chart options={options} series={series} type="line" height={263} />
        </Box >
    );
};

export default EmployeeChart;
