import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from  '../presentational/flag-list.component';


class CountryFlagContainer extends Component{
    constructor(props){
        super(props);
    }

  

    render(){
        return(
            <div>
                <CountryFlagList countries={this.props.countries} />
            </div>
        )
    }
}

const mapStateToProps = function (store){
         console.log(store);
    return{
          countries: store.countriesReducer.countries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);