import React from 'react';
import './service-component.scss'


const service = ({serviceName,targetUrl,imageUrl}) => {
    return (
        <div className='service-item'>
        <div
          className='image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        
       <span style={{textAlign:'center',fontSize:'12px'}}> {serviceName}</span>
        </div>
    );
};

export default service;