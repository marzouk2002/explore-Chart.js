import React from 'react'
import { Line } from 'react-chartjs-2'

function MyChart() {
    return (
        <div>
            <Line
                data={{
                    labels: ['Nov', 'Dec', 'Jun', 'Feb', 'Mars'],
                    datasets:[
                        {
                          label:'Population',
                          data:[ 1440000000, 1370000000, 330160000, 271350000, 221000000 ],
                          fill: false,
                          borderColor: 'rgb(75, 192, 192)',
                          tension: 0
                        }
                    ]
                }}
                options={{
                    responsive: true,
                    title:{
                    display:true,
                    text:'The most populated countries in the world',
                    fontSize:25
                    },
                    legend:{
                    display:false,
                    position:'bottom'
                    },
                    scales: {
                        y: {
                            position: 'right'
                        }
                    }
                }}
            />
        </div>
    )
}

export default MyChart
