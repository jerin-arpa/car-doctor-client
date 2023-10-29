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


    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }


    const handlePending = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }


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
                                <th>Delete </th>
                                <th>Service Details</th>
                                <th>Customer Details</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => <CartRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handlePending={handlePending}
                                ></CartRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;