import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import SectionTitle from '../../../SectionTitle/SectionTitle';

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    })
    return (
        <div>
            <SectionTitle
                heading={'Payment History'}
                subHeading={'At a Glance!'}
            ></SectionTitle>

            <div>
                <h2 className='text-3xl'>Total Payments: {payments?.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Total Price</th>
                                <th>Transition Id</th>
                                <th>Status</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map(payment => <tr key={payment._id}>
                                <td>{payment.email}</td>
                                <td>{payment.price}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.status}</td>
                                <td>{payment.date}</td>
                            </tr>
                        )}
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default PaymentHistory;