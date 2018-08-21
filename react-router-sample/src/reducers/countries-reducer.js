import { GET_COUNTRIES } from '../actions/actions-countries';
import countriesData from '../data/countries';

const initializeState = {
    countries: countriesData
}

const countriesReducer = function (state = initializeState, action){
    switch(action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries})
       
       
        default:
             return state;
        }
    
}

export default countriesReducer;