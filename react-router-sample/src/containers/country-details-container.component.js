import React from 'react';
import { Component } from 'react'
import { connect } from 'react-redux';
import { getCountry } from '../actions/actions-countries';
import CountryDetails from '../presentational/country-details.component';

class CountryDetailsContainer extends Component {
    constructor(props){
        super(props)
    }

       componentDidMount(){
       this.props.dispatch(getCountry(this.props.params.id))
     
    } 

   
    render(){
        console.log('rendeer - > selectedCountry')
        console.log(this.props.selectedCountry)
        return(
            <CountryDetails country={this.props.selectedCountry} />
        )
    }
}

const mapStateToProps = function(store){
  
    return{
        selectedCountry: store.countriesReducer.selectedCountry
    };
};

export default connect(mapStateToProps)(CountryDetailsContainer);

