import member1 from '../../../assets/images/team/1.jpg';
import member2 from '../../../assets/images/team/2.jpg';
import member3 from '../../../assets/images/team/3.jpg';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const Teams = () => {
    return (
        <div className='mb-20'>
            <div className="flex justify-center">
                <div className="lg:w-1/2">
                    <p className='text-[#FF3811] font-bold pb-4 text-center'>Team</p>
                    <h1 className="text-5xl font-bold  text-center">Meet Our Team</h1>
                    <p className="py-6 text-center">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={member1} alt="" className="rounded-xl h-72" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className=" text-3xl font-bold ">Car Engine Plug</h2>
                        <p className='font-bold text-xl mt-3'>Engine Expert</p>
                        <div className='mt-4 flex gap-3 justify-center items-center'>
                            <FaFacebook className='text-[52px] text-[#FF3811]'></FaFacebook>
                            <AiFillTwitterCircle className='text-6xl text-[#FF3811]'></AiFillTwitterCircle>
                            <TiSocialLinkedinCircular className='text-[53px] bg-[#FF3811] text-white rounded-full'></TiSocialLinkedinCircular>
                            <AiFillInstagram className='text-[62px] text-[#FF3811]'></AiFillInstagram>
                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={member2} alt="" className="rounded-xl h-72" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className=" text-3xl font-bold">Car Engine Plug</h2>
                        <p className='font-bold text-xl mt-3'>Engine Expert</p>
                        <div className='mt-4 flex gap-3 justify-center items-center'>
                            <FaFacebook className='text-[52px] text-[#FF3811]'></FaFacebook>
                            <AiFillTwitterCircle className='text-6xl text-[#FF3811]'></AiFillTwitterCircle>
                            <TiSocialLinkedinCircular className='text-[53px] bg-[#FF3811] text-white rounded-full'></TiSocialLinkedinCircular>
                            <AiFillInstagram className='text-[62px] text-[#FF3811]'></AiFillInstagram>
                        </div>
                    </div>
                </div>



                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={member3} alt="" className="rounded-xl h-72" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className=" text-3xl font-bold">Car Engine Plug</h2>
                        <p className='font-bold text-xl mt-3'>Engine Expert</p>
                        <div className='mt-4 flex gap-3 justify-center items-center'>
                            <FaFacebook className='text-[52px] text-[#FF3811]'></FaFacebook>
                            <AiFillTwitterCircle className='text-6xl text-[#FF3811]'></AiFillTwitterCircle>
                            <TiSocialLinkedinCircular className='text-[53px] bg-[#FF3811] text-white rounded-full'></TiSocialLinkedinCircular>
                            <AiFillInstagram className='text-[62px] text-[#FF3811]'></AiFillInstagram>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;