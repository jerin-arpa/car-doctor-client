import { useContext, useEffect, useState } from 'react';
import checkout from '../../assets/images/checkout/checkout.png';
import { AuthContext } from '../../Providers/AuthProvider';
import CartRow from './CartRow';

const CartDetails = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [url]);

    return (
        <div>
            <div className="hero mb-10 rounded-xl" style={{ backgroundImage: `url(${checkout})`, placeItems: 'normal' }}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="py-24">
                    <div className='ml-20'>
                        <h1 className="mb-5 text-5xl font-bold text-white">Cart Details</h1>
                        <div>
                            <button className="btn btn-outline border-[#FF3811] bg-[#FF3811] text-white hover:bg-[#FF3811] hover:border-[#FF3811]">Home - Product Details</button>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <h2 className='text-3xl font-bold mb-10 text-center text-[#FF3811]'>My Bookings: {bookings.length}</h2>



                <div className="overflow-x-auto mb-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Service Details</th>
                                <th>Customer Details</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => <CartRow key={booking._id} booking={booking}></CartRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;