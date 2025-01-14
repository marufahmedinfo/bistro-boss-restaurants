import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';


const FoodCard = ({ salad }) => {
    const { name, image, price, recipe, _id } = salad;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const form = location.state?.from?.pathname || '/';
    const handleAddToCard = () => {
        if (user && user.email) {
            // set cart item to the database
            // console.log(food, user.email)

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            };
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      // refetch to the cart to update  the cart items count
                      refetch();
                }
            })

        }
        else {
            Swal.fire({
                title: "You are not logger In",
                text: "Place Login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes! Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page
                    navigate('/login', { state: { form: location } })
                }
            });
        }
    }
    return (
        <div className="bg-white border card border-gray-200 rounded-lg shadow-lg">
            <div>
                <img className="rounded-t-lg w-full h-72 object-cover" src={image} alt={name} />
                <p className='bg-slate-800 right-0 top-0 mr-4 mt-4 px-4  text-white absolute'>${price}</p>
            </div>
            <div className="p-5 text-center">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600 text-sm mt-2 text-left">{recipe}</p>
                <button
                    onClick={handleAddToCard}
                    className="mt-4 px-4 py-2 bg-gray-200 rounded-lg border-0 border-b-4 border-[#BB8506] text-[#BB8506] hover:bg-gray-700">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default FoodCard;