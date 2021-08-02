import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart({ data, labels }) {
    return (
        <>
            <Line
                data={{
                    labels: labels,
                    datasets:[
                        {
                          label: 'price',
                          data: data,
                          fill: false,
                          borderColor: 'rgb(75, 192, 192)',
                          radius: 5,
                          tension: 0,
                          animations: null
                        },
                        // {
                        //   label:'prediction',
                        //   data:[ null, null, null, null, 200, 150, 170 ],
                        //   fill: false,
                        //   borderColor: 'black',
                        //   tension: 0
                        // }
                    ]
                }}
                options={{
                    responsive: true,
                    title:{
                        display: true,
                        text:'My custom chart',
                        fontSize:25
                    },
                    legend:{
                        display: true,
                        position:'bottom'
                    },
                    transitions: {
                        show: {
                            animations: {
                                x: {
                                from: 0
                                },
                                y: {
                                from: 0
                                }
                            }
                        }
                    },
                    options: {
                        transitions: {
                          show: {
                            animations: {
                              x: {
                                from: 0
                              },
                              y: {
                                from: 0
                              }
                            }
                          },
                          hide: {
                            animations: {
                                x: {
                                    to: 0
                                },
                                y: {
                                    to: 0
                                }
                            }
                            }
                        }
                    },
                    scales: {
                        yAxes: [{
                            beginAtZero: true,
                            position: 'right',
                            ticks: {
                                beginAtZero: true,
                                max: 50,
                                min: 0,
                            }
                        }]
                    }
                }}
            />
        </>
    )
}

export default LineChart