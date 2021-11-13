import React, { useEffect, useState } from 'react';
import Service from './Service';





const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://calm-dawn-19419.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our Product</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;