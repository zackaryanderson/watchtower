import gql from 'graphql-tag';

export const ADD_SENSOR = gql`
    mutation addSensor($sensorName: String){
        addSensor(sensorName: $sensorName) {
            _id
            sensorName
            username
        }
    }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $username: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, username: $username) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_DATA = gql`
  mutation addData($sensorName: String!, $measurement: Int!, $units: String!){
      addData(sensorName: $sensorName, measurement:$measurement, units:$units){
          _id
          measurement
          units
      }
    }
`;