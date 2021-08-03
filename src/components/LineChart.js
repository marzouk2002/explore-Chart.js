import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

function LineChart({ dataset, labels, vuePred, predLabel, predictions }) {
    const [ usedData, setUseData ] = useState([dataset])
    const [ usedLabels, setUseLabels ] = useState([...labels])

    useEffect(() => {
        if(vuePred) {
            setUseLabels([...labels, ...predLabel])
            const origData = dataset.data
            const origLength = origData.length
            setUseData([dataset, {
                  label:'prediction',
                  data:[ ...Array(origLength-1).fill(null), origData[origLength-1], ...predictions ],
                  fill: false,
                  borderColor: 'black',
                  tension: 0
                }])
        } else {
            setUseData([dataset])
            setUseLabels([...labels])
        }
    }, [labels, vuePred, dataset, predLabel, predictions])

    return (
        <>
            <Line
                data={{
                    labels: usedLabels,
                    datasets:
                        usedData
                        
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