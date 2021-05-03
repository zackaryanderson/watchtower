import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_SENSOR } from '../utils/mutations';

function AddSensor() {

    const [formState, setFormState] = useState({});

    const [addSensor] = useMutation(ADD_SENSOR);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        //use try / catch instead of promises to handle errors
        try {
            //execute addUser mutation and pass in variable data from form
            await addSensor({
                variables: { ...formState }
            });

            window.location.replace('/')

        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className='justify-center'>
            <h1>Add New Sensor</h1>
            <div>
                <form
                    className="grid w-auto justify-center mt-2"
                    onSubmit={handleFormSubmit}
                >
                    <h3>Sensor Name:</h3>
                    <input
                        name='sensorName'
                        type='sensorName'
                        id='sensorName'
                        placeholder="Name"
                        value={formState.sensorUnits}
                        className="border-2 rounded"
                        onChange={handleChange}
                    ></input>
                    <h3>Sensor Units:</h3>
                    <input
                        //set up to take units at later point
                        name='Sensor Units'
                        type='sensorUnits'
                        id='sensorUnits'
                        placeholder="Units"
                        //value={formState.sensorUnits}
                        className="border-2 rounded"
                    //onChange={formState.handleChange}
                    ></input>
                    <button className="border-2 border-black bg-white text-black rounded mt-3" type="submit">
                        Submit
                </button>
                </form>
            </div>
        </main>
    )

}

export default AddSensor