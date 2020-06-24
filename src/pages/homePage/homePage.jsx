import React, { Component } from 'react';
import Button from '../../components/customButton/customerButton';
import Header from '../../components/header/header';
import Services from '../../components/Services/Services'
import Insurance from '../../components/InsuranceComponent/Insurance';
import Seprator from '../../components/Seprator/seprator'
import ServiceGuide from '../../components/ServiceGuide/ServiceGuide'

class homePage extends Component {
    render() {
        return (
            <div>
              <Header/>
              <Seprator></Seprator>
              <Services></Services>
              <Seprator></Seprator>
              <Insurance></Insurance>
              <Seprator></Seprator>
              <ServiceGuide></ServiceGuide>
              <Seprator></Seprator>
            </div>
        );
    }
}

export default homePage;