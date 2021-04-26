import React, { useEffect } from 'react';
//import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { ADD_DATA } from '../utils/mutations';

function DataUpload() {

    //load mutation function
    const [addData, {error} ] = useMutation(ADD_DATA);

    //get data from url and sort it
    let info = window.location.href;
    let data = info.split('?')[1];
    let sortedData = data.split('&');

    //sort data into variable names
    let sensorName = sortedData[0].split('=')[1];
    let measurement = parseInt(sortedData[1].split('=')[1]);
    let units = sortedData[2].split('=')[1];

    console.log(sensorName, measurement, units);

    //mutation to post data to server
    const dataSubmit = async () => {

        try {
            const mutationResponse = await addData({
                variables: {
                    sensorName: sensorName,
                    measurement: measurement,
                    units: units
                }
            });

            if (error) {
                throw new Error('something went wrong');
            };

            console.log(mutationResponse);

        } catch (e) {
            console.log(e)
        }
    }

    //run mutation function once on page load
    useEffect(() => {

        dataSubmit(sortedData);

    }, []);


    return (
        <>
            <h1>Sensor Name: {sensorName}</h1>
            <h1>Measurement: {measurement} {units}</h1>
        </>
    )

}

export default DataUpload