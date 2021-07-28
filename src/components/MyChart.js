import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import DateTime from '../Classes'

function MyChart({scale}) {
    const [ data, setData ] = useState([ 21, 40, 17, 48, 36, 21, 45, 15, 12, 11, 39, 32])
    const [ labels, setLabels] = useState(['Nov', 'Dec', 'Jun', 'Feb', 'Mars'])

    // useEffect(() => {
    //     setInterval(() => {
    //         let  [ fisrt, ...arr ] = data
    //         arr.push(Math.random()*50)
    //         setData(arr)
            
    //     }, 1500)
    // }, [])

    useEffect(() => {
        const dateTime = new DateTime()
        switch(scale) {
            case "a":
                setLabels(dateTime.oneYear);
                break
            case "b":
                setLabels(dateTime.getDays());
                break
            default:
                setLabels([])
        }
    }, [scale])

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
                          tension: 0,
                          animations: null
                        }
                        // ,
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
                    hide: {
                        animations: {
                          x: {
                            to: 0
                          },
                          y: {
                            to: 0
                          }
                        }
                    },
                    scales: {
                        yAxes: [{
                            beginAtZero: true,
                            position: 'right'
                        }],
                        y: {
                            beginAtZero: true,
                        },
                    }
                }}
            />
        </>
    )
}

export default MyChart
