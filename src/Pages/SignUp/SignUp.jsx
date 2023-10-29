import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);


        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>
            <div className="my-20">
                <div className="flex flex-col lg:flex-row justify-between gap-20">
                    <div className='flex-1'>
                        <img className='w-full' src={img} alt="" />
                    </div>
                    <div className='flex-1 w-full'>
                        <div className="rounded-xl shadow-xl w-full py-8">
                            <h2 className="text-3xl font-bold text-center pt-10 pb-5"><span className='text-[#FF3811]'>SignUp</span> your account</h2>
                            <form onSubmit={handleSignUp} className="px-4 md:px-14">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        name="password" placeholder="Enter your Password" className="input input-bordered w-full" required />

                                </div>

                                <div className="flex gap-3 mt-5">
                                    <div className='flex items-center'>
                                        <input className='checkbox  checkbox-xs md:checkbox-sm' type="checkbox" name="terms" id="" />
                                    </div>
                                    <label htmlFor="terms" className="text-xs md:text-lg">Accept our terms and conditions</label>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn w-full bg-[#FF3811] border-[#FF3811] hover:bg-white hover:text-[#FF3811] text-white font-bold hover:border-[#FF3811]">Sign Up</button>
                                </div>
                            </form>

                            <div className="flex justify-center mb-4">
                                <h2 className="text-xs md:text-lg mt-6 md:mt-8 mb-6">Already have an account? <Link to='/login' className="text-[#FF3811] underline font-bold">Login</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;