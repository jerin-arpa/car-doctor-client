import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location?.state : '/');
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
                            <h2 className="text-3xl font-bold text-center pt-10 pb-5"><span className="text-[#FF3811]">Login</span> your account</h2>
                            <form onSubmit={handleLogin} className="px-4 md:px-14">
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

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn w-full bg-[#FF3811] border-[#FF3811] hover:bg-white hover:text-[#FF3811] text-white font-bold hover:border-[#FF3811]">Login</button>
                                </div>
                            </form>


                            <div className="flex justify-center mb-4">
                                <h2 className="text-xs md:text-lg mt-6 md:mt-8 mb-6">Do not have an account? <Link to='/signup' className="text-[#FF3811] underline font-bold">SignUp</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;