import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import useMenu from '../../../../hooks/useMenu';
import { TiTrash } from 'react-icons/ti';
import { MdEdit } from 'react-icons/md';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${item.name} Has been deleted this!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }
    return (
        <div>
            <SectionTitle
                heading={'Manage All Items'}
                subHeading={'Hurry Up'}
            ></SectionTitle>
            <div>
                <h2 className='text-3xl font-bold'>Total Items: {menu.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
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
                                    <td className='text-green-400'>
                                        <span className='font-bold text-black text-lg'>$ </span>{item.price}
                                    </td>
                                    <th>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button className='p-2 btn rounded-xl bg-[#D1A054] '>
                                                <MdEdit size={20} className='text-white' />
                                            </button>
                                        </Link>
                                    </th>
                                    <td>
                                        <button className='bg-red-700 btn rounded-xl p-2' onClick={() => handleDeleteItem(item)}>
                                            <TiTrash size={25} className='text-white' />
                                        </button>
                                    </td>
                                </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;