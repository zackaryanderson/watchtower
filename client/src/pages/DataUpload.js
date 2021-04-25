import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { ADD_DATA } from '../utils/mutations';

function DataUpload() {

    const { data }  = useParams();

    console.log(data);

    return (
        <>
        </>
    )

}

export default DataUpload