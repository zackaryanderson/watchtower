import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SENSOR } from '../utils/queries';
import { Link } from "react-router-dom";

// chart.js linegraph
import { Line } from 'react-chartjs-2';

const Sensor = () => {

    // get sensorname from params
    const { id } = useParams();

    //query sensor data 
    const { loading, data } = useQuery(QUERY_SENSOR, {
        variables: { sensorName: id }
    });

    if (loading) {
        return (
            <h4>Loading...</h4>
        );
    }

    // establish sensor
    const sensor = data?.sensor || {};

    console.log(sensor.data[0].measurement)

    //get measurements and time
    let time = [];
    let measurements = [];

    sensor.data.forEach(dataPoint => {
        //console.log(dataPoint.measurement);
        measurements.push(dataPoint.measurement);
        time.push(dataPoint.timeStamp);
    })

    // //determine units
	const formattedUnits = (units) => {
		if (units === "degF") {
			return '°F';
		} else if (units === "degC") {
			return '°C';
		} else if (units === 'kelvin') {
			return 'K';
		} else {
			return units;
		}
    }
    
    const units = formattedUnits(sensor.data[0].units);

    // make custom length array REPLACE WITH TIME WHEN ITS CONVERTED
    function linspace(start, stop, num, endpoint = true) {
        const div = endpoint ? (num - 1) : num;
        const step = (stop - start) / div;
        return Array.from({ length: num }, (_, i) => start + step * i);
    }

    const xaxis = linspace(1, sensor.data.length, sensor.data.length);

    //establish data for charts.
    const dataSet = {
        labels: xaxis,
        datasets: [
            {
                label: `${units} vs. Time`,
                data: measurements,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };


    return (
        <>
            <div className='header'>
                <h1 className='title flex justify-center'>{sensor.sensorName}</h1>
            </div>
            <Line data={dataSet} />
            <Link to={`/delete/${sensor.sensorName}`}>
                <button className="text-sm m-6 p-1 border-red-500 text-white bg-red-500 hover:bg-red-700 hover:text-white rounded">Remove Sensor</button>
            </Link>
        </>
    );

};

export default Sensor;