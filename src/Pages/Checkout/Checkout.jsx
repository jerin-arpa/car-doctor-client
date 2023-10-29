import { useLoaderData } from 'react-router-dom';
import checkout from '../../assets/images/checkout/checkout.png';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const Checkout = () => {

    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;
        const message = form.message.value;
        const order = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price,
            message,
        }
        console.log(order);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Service Booked Successfully');
                }
            })
    }



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
                <h2 className="text-3xl font-bold text-center pt-10 pb-5"><span className='text-[#FF3811]'>Book {title}</span></h2>
                <form onSubmit={handleBookService} className="px-4 md:px-14">
                    <div className='flex flex-col md:flex-row gap-5 mb-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date"
                                name="date" className="input input-bordered w-full" required />
                        </div>
                    </div>


                    <div className='flex flex-col md:flex-row gap-5 mb-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" defaultValue={user?.email} className="input input-bordered w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="number"
                                name="price" defaultValue={price} className="input input-bordered w-full" required />
                        </div>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea name='message' placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn w-full bg-[#FF3811] border-[#FF3811] hover:bg-white hover:text-[#FF3811] text-white font-bold hover:border-[#FF3811]">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;