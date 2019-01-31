import update from 'react-addons-update';
import constants from './actionConstants';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const ASPECT_RATION = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATION * LATITUDE_DELTA;

//------Action Types
const {
    SET_NAME,
    GET_CURRENT_LOCATION
} = constants;


//-------Action
export function setName() {
    return {
        type: SET_NAME,
        payload: 'Cong Linh'
    }
}

export function getCurrentLocation() {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch({
                    type: GET_CURRENT_LOCATION,
                    payload: position
                })
            },
            (error) => console.log(error.message),
            { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
        );
    }
}

//--------Action Handle
function handleSetName(state, action) {
    return update(state, {
        name: {
            $set: action.payload
        }
    })
}
function handelGetCurrentLocation(state, action) {
    return update(state, {
        region: {
            latitude: { 
                $set: action.payload.coords.latitude 
            },
            longitude: { 
                $set: action.payload.coords.longitude 
            },
            latitudeDelta: {
                $set: LATITUDE_DELTA
            },
            longitudeDelta: {
                $set: LONGITUDE_DELTA
            }
        }
    })
}


const ACTION_HANDLERS = {
    SET_NAME: handleSetName,
    GET_CURRENT_LOCATION: handelGetCurrentLocation
}
const initialState = {
    region: {}
};

export function HomeReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}