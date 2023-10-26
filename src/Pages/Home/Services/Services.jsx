import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

/* eslint-disable react/no-unescaped-entities */
const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="mb-20">
            <div className="flex justify-center">
                <div className="w-1/2 mb-5">
                    <p className='text-[#FF3811] font-bold pb-4 text-center'>Service</p>
                    <h1 className="text-5xl font-bold  text-center">Our Service Area</h1>
                    <p className="py-6 text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;