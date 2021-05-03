import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_SENSOR } from '../utils/mutations';
import { useParams } from "react-router-dom";

function DeleteSensor() {

    const { id } = useParams();

    //load mutation function
    const [deleteSensor, {error} ] = useMutation(DELETE_SENSOR);

    const confirmHandler = async () => {

        try {
            const mutationResponse = await deleteSensor({
                variables: {
                    sensorName: id
                }
            });

            if (error) {
                throw new Error('something went wrong');
            };

            console.log(mutationResponse);

            //reload page after success and reroute to dashboard

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <h1>Are you sure you want to delete {id}</h1>
            <div className="flex justify-center">
                <button onClick={confirmHandler} className="text-sm m-3 p-3 text-white border-2 border-red-500 bg-red-500 hover:bg-red-700 hover:border-red-700 hover:text-white rounded">Yes</button>
                <button className="text-sm m-3 p-3 border-2 border-black text-black bg-white hover:bg-black hover:text-white rounded">NO</button>
            </div>
        </>
    )

}

export default DeleteSensor