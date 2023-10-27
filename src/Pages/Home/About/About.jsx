/* eslint-disable react/no-unescaped-entities */
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='my-20 mb-40'>
            <div className="hero">
                <div className="flex flex-col lg:flex-row gap-28">
                    <div className='flex-1 relative mb-10'>
                        <img src={person} className="rounded-lg w-full" />
                        <img src={parts} className="rounded-lg absolute w-3/4 lg:-right-20 top-1/2 bg-white p-2" />
                    </div>
                    <div className='flex-1'>
                        <p className='text-[#FF3811] font-bold pb-5'>About Us</p>
                        <h1 className="text-5xl font-bold lg:w-3/5">We are qualified & of experience in this field</h1>
                        <p className="py-6 lg:w-2/3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                        <p className='lg:w-2/3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <div className='mt-7'>
                            <button className="btn btn-outline border-[#FF3811] bg-[#FF3811] text-white hover:bg-[#FF3811] hover:border-[#FF3811]">Get More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;