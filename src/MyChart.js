import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import DateTime from './Classes'
import LineChart from './components/LineChart'

function MyChart({scale}) {
    const [ data, setData ] = useState([ 21, 40, 17, 48, 36, 21, 45, 15, 12, 11, 39, 32])
    const [ labels, setLabels] = useState([])

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
            case "5Y":
                setLabels(dateTime.fiveYears);
                break
            case "1Y":
                setLabels(dateTime.oneYear);
                break
            case "6M":
                setLabels(dateTime.sixMonths);
                break
            case "1M":
                setLabels(dateTime.oneMonth);
                break
            case "1W":
                setLabels(dateTime.oneWeek);
                break
            case "1D":
                setLabels(dateTime.oneDay);
                break
            case "4H":
                setLabels(dateTime.fourHours);
                break
            case "1H":
                setLabels(dateTime.oneHour);
                break
            case "30M":
                setLabels(dateTime.halfHour);
                break
            default:
                setLabels([])
        }
    }, [scale])

    return (
        <>
            <LineChart data={data} labels={labels}/>
        </>
    )
}

export default MyChart
