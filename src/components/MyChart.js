import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

function MyChart() {
    const [ data, setData ] = useState([ 21, 40, 17, 59, 36])

    useEffect(() => {
        setInterval(() => {
            let  [ fisrt, ...arr ] = data
            arr.push(Math.random()*100)
            setData(arr)
            
        }, 1000)
    }, [])

    return (
        <>
            <Line
                data={{
                    labels: ['Nov', 'Dec', 'Jun', 'Feb', 'Mars'],
                    datasets:[
                        {
                          label: 'price',
                          data: data,
                          fill: false,
                          borderColor: 'rgb(75, 192, 192)',
                          tension: 0
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
                            position: 'right'
                        }]
                    }
                }}
            />
        </>
    )
}

export default MyChart
