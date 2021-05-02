import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SENSOR } from '../utils/queries';

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

    //get measurements
    const measurements1 = {};
    measurements1.push(sensor.data[0].measurement);

    // sensor.data.forEach(dataPoint => {
    //     console.log(dataPoint.measurement);
    //     //measurements = measurements.push(dataPoint.measurement);
    // })

    console.log(measurements1)

    return (
        <h1>

        </h1>
    );

};

export default Sensor;