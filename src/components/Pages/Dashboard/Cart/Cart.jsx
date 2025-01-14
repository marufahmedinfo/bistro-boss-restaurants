import React from 'react';
import useCart from '../../../../hooks/useCart';
import { TiTrash } from 'react-icons/ti';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <SectionTitle
                heading={'Wanna Add More'}
                subHeading={'My Cart'}
            ></SectionTitle>
            <div className='flex justify-evenly mb-8'>
                <h2 className='text-3xl font-semibold'>Total Orders: {cart.length}</h2>
                <h2 className='text-3xl font-semibold'>Total Price: {totalPrice}</h2>
                { cart.length? 
                    <Link to={'/dashboard/reservation'}>
                        <button className='btn bg-[#D1A054] text-white text-lg'>Pay</button>
                    </Link>
                    :
                    <button disabled className='btn bg-[#D1A054] text-white text-lg'>Pay</button>
                }
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#D1A054] text-white'>
                        <tr>
                            <th></th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)}>
                                        <TiTrash size={30} color='red' />
                                    </button>
                                </th>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;