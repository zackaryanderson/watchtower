import gql from 'graphql-tag';

export const QUERY_USER = gql`
    {
        user{
            _id
            username
            email
            firstName
            lastName
            posts{
                _id
                postText
                createdAt
                reactionCount
            }
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
        sensor {
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
    query sensor($sensorName: String) {
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