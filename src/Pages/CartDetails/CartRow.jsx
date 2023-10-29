import PropTypes from 'prop-types';

const CartRow = ({ booking }) => {

    const { customerName, email, date, service, price, img } = booking;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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
                        <div className="text-sm opacity-50">{date}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerName} <br />
                {email}
            </td>
            <td>{price}</td>
            <th>
                <button className="btn bg-[#FF3811] border-[#FF3811] hover:bg-white hover:text-[#FF3811] text-white font-bold hover:border-[#FF3811]">Pending</button>
            </th>
        </tr>
    );
};

CartRow.propTypes = {
    booking: PropTypes.object,
};

export default CartRow;