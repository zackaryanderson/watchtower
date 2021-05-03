import gql from 'graphql-tag';

export const QUERY_USER = gql`
    {
        user{
            _id
            username
            email
            firstName
            lastName
            sensors{
                _id
                sensorName
                data {
                    _id
                    measurement
                    units
                    timeStamp
                }
            }
        }
    }
`;

export const QUERY_SENSORS = gql`
    {
        sensors {
            _id
            sensorName
            username
            data{
                _id
                measurement
                units
                timeStamp
            }
        }
    }
`;

export const QUERY_SENSOR = gql`
    query sensor($sensorName: String!) {
        sensor(sensorName: $sensorName) {
            _id
            sensorName
            username
            data{
                _id
                measurement
                units
                timeStamp
            }
        }
    }
`;
