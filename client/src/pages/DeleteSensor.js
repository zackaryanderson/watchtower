import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_DATA } from '../utils/mutations';
import { useParams } from "react-router-dom";

function DeleteSensor() {

    const { id } = useParams();

    // //load mutation function
    // const [addData, {error} ] = useMutation(ADD_DATA);

    // //get data from url and sort it
    // let info = window.location.href;
    // let data = info.split('?')[1];
    // let sortedData = data.split('&');

    // //sort data into variable names
    // let sensorName = sortedData[0].split('=')[1];
    // let measurement = parseInt(sortedData[1].split('=')[1]);
    // let units = sortedData[2].split('=')[1];

    // console.log(sensorName, measurement, units);

    // //mutation to post data to server
    // const dataSubmit = async () => {

    //     try {
    //         const mutationResponse = await addData({
    //             variables: {
    //                 sensorName: sensorName,
    //                 measurement: measurement,
    //                 units: units
    //             }
    //         });

    //         if (error) {
    //             throw new Error('something went wrong');
    //         };

    //         console.log(mutationResponse);

    //     } catch (e) {
    //         console.log(e)
    //     }
    // }



    // //run mutation function once on page load
    // useEffect(() => {

    //     dataSubmit(sortedData);

    // }, []);


    return (
        <>
            <h1>Are you sure you want to delete {id}</h1>
            <div className="flex justify-center">
                <button className="text-sm m-3 p-3 text-white border-2 border-red-500 bg-red-500 hover:bg-red-700 hover:border-red-700 hover:text-white rounded">Yes</button>
                <button className="text-sm m-3 p-3 border-2 border-black text-black bg-white hover:bg-black hover:text-white rounded">NO</button>
            </div>
        </>
    )

}

export default DeleteSensor