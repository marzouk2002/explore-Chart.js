import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import DateTime from './Classes'
import LineChart from './components/LineChart'

function MyChart({scale}) {
    const [ vuePred, setVuePred ] = useState(false)
    const [ data, setData ] = useState([ 21, 40, 17, 48, 36, 21, 45, 15, 12])
    const [ predictions, setPredictions ] = useState([ 15, 18])
    const [ predLabel, setPredLabel] = useState(['20:00', '20:30'])
    const [ labels, setLabels] = useState([])

    useEffect(() => {
        setInterval(() => {
            let  [ fisrt, ...arr ] = data
            arr.push(Math.random()*50)
            setData(arr)
            
        }, 1500)
    }, [])

    useEffect(() => {
        setLabels(new DateTime(scale).labels)
    }, [scale])

    return (
        <>
            <LineChart 
                dataset={{
                          label: 'price',
                          data: data,
                          fill: false,
                          borderColor: 'rgb(75, 192, 192)',
                          radius: 5,
                          tension: 0,
                          animations: null
                    }}
                labels={labels}
                vuePred={vuePred}
                predLabel={predLabel}
                predictions={predictions}
            />
            <button onClick={()=>setVuePred(!vuePred)}>show pred</button>
        </>
    )
}

export default MyChart
