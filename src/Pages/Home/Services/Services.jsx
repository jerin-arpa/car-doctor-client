import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { BsFillCalendar2WeekFill, BsTelephoneForwardFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';

/* eslint-disable react/no-unescaped-entities */
const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <div className="mb-20">
                <div className="flex justify-center">
                    <div className="lg:w-1/2 mb-5">
                        <p className='text-[#FF3811] font-bold pb-4 text-center'>Service</p>
                        <h1 className="text-5xl font-bold  text-center">Our Service Area</h1>
                        <p className="py-6 text-center">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                <div className="flex justify-center mt-14">
                    <button className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] hover:rounded-3xl">More Services</button>
                </div>
            </div>



            <div className="bg-black text-white mb-20 p-20 rounded-xl">
                <div className="flex flex-col lg:flex-row gap-10 justify-around">
                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center">
                            <BsFillCalendar2WeekFill className="text-5xl text-[#FF3811]"></BsFillCalendar2WeekFill>
                        </div>
                        <div>
                            <p>We are open monday-friday</p>
                            <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center">
                            <BsTelephoneForwardFill className="text-5xl text-[#FF3811]"></BsTelephoneForwardFill>
                        </div>
                        <div>
                            <p>Have a question?</p>
                            <p className="text-2xl font-bold">+2546 251 2658</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center">
                            <FaLocationDot className="text-5xl text-[#FF3811]"></FaLocationDot>
                        </div>
                        <div>
                            <p>Need a repair? our address</p>
                            <p className="text-2xl font-bold">Liza Street, New York</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;