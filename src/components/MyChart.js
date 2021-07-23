import React from 'react'
import { Line } from 'react-chartjs-2'

function MyChart() {
    return (
        <div>
            <Line
                data={{
                    labels: ['China', 'India', 'USA', 'Indonesia', 'Pakistan'],
                    datasets:[
                      {
                        label:'Population',
                        data:[ 1440000000, 1370000000, 330160000, 271350000, 221000000 ],
                        fill: false
                      }
                    ]
                }}
                options={{
                    title:{
                    display:true,
                    text:'The most populated countries in the world',
                    fontSize:25
                    },
                    legend:{
                    display:false,
                    position:'bottom'
                    }
                }}
            />
        </div>
    )
}

export default MyChart
