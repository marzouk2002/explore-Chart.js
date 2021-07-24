import React from 'react'
import { Line } from 'react-chartjs-2'

function MyChart() {
    return (
        <>
            <Line
                data={{
                    labels: ['Nov', 'Dec', 'Jun', 'Feb', 'Mars', 'aaa' , "ddd"],
                    datasets:[
                        {
                          label:'price',
                          data:[ 144, 137,137,310, 200 ],
                          fill: false,
                          borderColor: 'rgb(75, 192, 192)',
                          tension: 0
                        },
                        {
                          label:'prediction',
                          data:[ null, null, null, null, 200, 150, 170 ],
                          fill: false,
                          borderColor: 'black',
                          tension: 0
                        }
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
                    scales: {
                        y: {
                            position: 'right',
                            display: false
                        }
                    }
                }}
            />
        </>
    )
}

export default MyChart
