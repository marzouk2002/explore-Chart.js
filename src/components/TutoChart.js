import React from 'react'
import { Bar } from 'react-chartjs-2'

function TutoChart() {
    return (
        <>
            <Bar
                data={{
                    labels: ['China', 'India', 'USA', 'Indonesia', 'Pakistan'],
                    datasets:[
                      {
                        label:'Population',
                        data:[ 1440000000, 1370000000, 330160000, 271350000, 221000000 ],
                        backgroundColor:[
                          'rgba(255, 99, 132, 0.6)',
                          'rgba(54, 162, 235, 0.6)',
                          'rgba(255, 206, 86, 0.6)',
                          'rgba(75, 192, 192, 0.6)',
                          'rgba(153, 102, 255, 0.6)'
                        ]
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
        </>
    )
}

export default TutoChart