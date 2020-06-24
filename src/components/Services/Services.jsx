import React, { Component } from 'react';
import './services.scss'
import Service from './service-component';

class Services extends Component {
    render() {
        return (
            <div>
                <h2>Our Services</h2>
                <p style={{width:'70%'}}>Choose from a wide assortment of car services from periodic car servicing, car care services, wheel care services, cashless insurance claims and much more!</p>


                <div className="display-services">

                    <div className="preview">
                        
                <Service serviceName={"Schduled Servies"} imageUrl={'https://gomechanic.in/icons/servicesType/scheduledServices.svg'}></Service>

                <Service serviceName={"Schduled Servies"} imageUrl={'https://gomechanic.in/icons/servicesType/dentingPainting.svg'}></Service>
                <Service serviceName={"Schduled Servies"} imageUrl={'https://gomechanic.in/icons/servicesType/cleaningDetailing.svg'}></Service>
                <Service serviceName={"Schduled Servies"} imageUrl={'https://gomechanic.in/icons/servicesType/customRepair.svg'}></Service>
                <Service serviceName={"Schduled Servies"} imageUrl={'https://gomechanic.in/icons/servicesType/insuranceServices.svg'}></Service>
                <Service serviceName={"Schduled Servies"} imageUrl={'https://gomechanic.in/icons/servicesType/battery.svg'}></Service>
                

                </div>
                </div>


                
            </div>
        );
    }
}

export default Services;