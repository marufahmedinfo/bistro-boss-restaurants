import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 className='text-2xl font-bold'>
                    <span>HI, Welcome  </span>
                    <span className='text-[#D1A054]'>{
                        user?.displayName? user.displayName : 'Back!'
                    }</span>
                </h2>
        </div>
    );
};

export default UserHome;