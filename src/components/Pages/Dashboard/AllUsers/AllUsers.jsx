import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { TiTrash } from 'react-icons/ti';
import { FaUsers } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { MdAdminPanelSettings } from 'react-icons/md';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    });



    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)

                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        title: "Deleted!",
                        text: `${user.name} is an Admin Now!!`,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };



    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be user deleted this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                title: "Deleted!",
                                text: "User has been deleted.",
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
                heading={'Manage All Users'}
                subHeading={'How Many??'}
            ></SectionTitle>
            <div className='flex justify-evenly my-4'>
                <h2 className="text-2xl">Total Users: {users.length}</h2>
                <h2 className="text-2xl">All Users</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#D1A054] text-white'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user?.role === 'admin' ?
                                        <button className='p-3 btn rounded-xl bg-[#D1A054] ' onClick={() => handleMakeAdmin(user)}>
                                            <MdAdminPanelSettings size={25} className='text-white' />
                                        </button>
                                        :
                                        <button className='p-3 btn rounded-xl bg-[#D1A054] ' onClick={() => handleMakeAdmin(user)}>
                                            <FaUsers size={25} className='text-white' />
                                        </button>}
                                </td>
                                <td>
                                    <button className='bg-red-700 btn rounded-xl p-2' onClick={() => handleDeleteUser(user)}>
                                        <TiTrash size={30} className='text-white' />
                                    </button>
                                </td>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllUsers;