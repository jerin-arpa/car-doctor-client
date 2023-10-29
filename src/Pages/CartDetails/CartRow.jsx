import PropTypes from 'prop-types';

const CartRow = ({ booking, handleDelete, handlePending }) => {

    const { _id, customerName, email, date, service, price, img, message, status } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle bg-black text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">Price: ${price}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{customerName}</div>
                <div className="text-sm opacity-50">{email}</div>
            </td>
            <td>
                {date}
                <div className="text-sm opacity-50">{message}</div>
            </td>
            <th>
                {
                    status === 'confirm' ? <button onClick={() => handlePending(_id)} className="btn bg-green-700 border-green-700 hover:bg-white hover:text-green-700 text-white font-bold hover:border-green-700">Approved</button> :
                        <button onClick={() => handlePending(_id)} className="btn bg-[#FF3811] border-[#FF3811] hover:bg-white hover:text-[#FF3811] text-white font-bold hover:border-[#FF3811]">Pending</button>
                }
            </th>
        </tr>
    );
};

CartRow.propTypes = {
    booking: PropTypes.object,
    handleDelete: PropTypes.func,
    handlePending: PropTypes.func,
};

export default CartRow;