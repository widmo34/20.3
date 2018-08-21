export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';

// show me all avaiable conuries 
export function getCountries(){
    return{
        type: GET_COUNTRIES
    }
}

// delete country
export function deleteCountry(id){
    return{
        type: DELETE_COUNTRY,
        id
    }
}

// show me a single country 
export function getCountry(id){
    return{
        type: GET_COUNTRY,
        id
    }
}

// search countries 
export function searchCountries(searchText){
    return{
        type: SEARCH_COUNTRIES,
        searchText
    }
}

// set a Continent and show me States in it 
export function setContinent(name){
    return{
        type: SET_CONTINENT,
        name
    }
}