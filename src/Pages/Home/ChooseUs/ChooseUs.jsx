import icon1 from '../../../assets/icons/person.svg';
import icon2 from '../../../assets/icons/check.svg';
import icon3 from '../../../assets/icons/deliveryt.svg';
import icon4 from '../../../assets/icons/group.svg';
import icon6 from '../../../assets/icons/Wrench.svg';


const ChooseUs = () => {
    return (
        <div className="mb-28 mt-28">
            <div className="flex justify-center">
                <div className="lg:w-1/2">
                    <p className='text-[#FF3811] font-bold pb-4 text-center'>Core Features</p>
                    <h1 className="text-5xl font-bold  text-center">Why Choose Us</h1>
                    <p className="py-6 text-center">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                </div>
            </div>


            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-7'>
                <div className='bg-base-100 border p-2 flex justify-center items-center hover:bg-[#FF3811] hover:text-white py-10'>
                    <div>
                        <div className='flex justify-center mb-5'>
                            <img className='w-36 h-28' src={icon4} alt="" />
                        </div>
                        <p className='mt-4 text-center text-2xl font-bold'>Expert Team</p>
                    </div>
                </div>

                <div className='bg-base-100 border p-2 flex justify-center items-center hover:bg-[#FF3811] hover:text-white py-10'>
                    <div>
                        <div className='flex justify-center mb-5'>
                            <img className='w-28 h-28' src={icon6} alt="" />
                        </div>
                        <p className='mt-4 text-center text-2xl font-bold'>Timely Delivery</p>
                    </div>
                </div>


                <div className='bg-base-100 border p-2 flex justify-center items-center hover:bg-[#FF3811] hover:text-white py-10'>
                    <div>
                        <div className='flex justify-center mb-5'>
                            <img className='w-24 h-28' src={icon1} alt="" />
                        </div>
                        <p className='mt-4 text-center text-2xl font-bold'>24/7 Support</p>
                    </div>
                </div>


                <div className='bg-base-100 border p-2 flex justify-center items-center hover:bg-[#FF3811] hover:text-white py-10'>
                    <div>
                        <div className='flex justify-center mb-5'>
                            <img className='w-28 h-28' src={icon6} alt="" />
                        </div>
                        <p className='mt-4 text-center text-2xl font-bold'>Best Equipment</p>
                    </div>
                </div>


                <div className='bg-base-100 border p-2 flex justify-center items-center hover:bg-[#FF3811] hover:text-white py-10'>
                    <div>
                        <div className='flex justify-center mb-5'>
                            <img className='w-24 h-28' src={icon2} alt="" />
                        </div>
                        <p className='mt-4 text-center text-2xl font-bold'>100% Guranty</p>
                    </div>
                </div>


                <div className='bg-base-100 border p-2 flex justify-center items-center hover:bg-[#FF3811] hover:text-white py-10'>
                    <div>
                        <div className='flex justify-center mb-5'>
                            <img className='w-32 h-28' src={icon3} alt="" />
                        </div>
                        <p className='mt-4 text-center text-2xl font-bold'>Timely Delivery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;