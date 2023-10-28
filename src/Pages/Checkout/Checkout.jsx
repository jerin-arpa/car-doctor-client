import { Link } from 'react-router-dom';
import checkout from '../../assets/images/checkout/checkout.png';


const Checkout = () => {



    return (
        <div>
            <div className="hero mb-10 rounded-xl" style={{ backgroundImage: `url(${checkout})`, placeItems: 'normal' }}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="py-24">
                    <div className='ml-20'>
                        <h1 className="mb-5 text-5xl font-bold text-white">Check Out</h1>
                        <div>
                            <button className="btn btn-outline border-[#FF3811] bg-[#FF3811] text-white hover:bg-[#FF3811] hover:border-[#FF3811]">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="rounded-xl bg-gray-50 w-full py-14 mb-20">
                <form className="px-4 md:px-14">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                    </div>

                    <div className='flex flex-col md:flex-row gap-5 mb-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number"
                                name="phone" placeholder="Enter your Number" className="input input-bordered w-full" required />
                        </div>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>

                    <div className="form-control mt-6">
                        <Link>
                            <button className="btn w-full bg-[#FF3811] border-[#FF3811] hover:bg-white hover:text-[#FF3811] text-white font-bold hover:border-[#FF3811]">Order Confirm</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;