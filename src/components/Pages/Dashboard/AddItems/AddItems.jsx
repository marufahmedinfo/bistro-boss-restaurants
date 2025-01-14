import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { useForm } from "react-hook-form"
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
               'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // now
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('with image url ', res.data)
        
    }
    return(
        <div>
            <SectionTitle
                heading={'ADD AN ITEM'}
                subHeading={"What's new?"}
            ></SectionTitle>

            <div>
                <div className="flex justify-center items-center  bg-gray-100">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full max-w-4xl bg-white p-8 rounded shadow-lg"
                    >
                        {/* Recipe Name */}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Recipe name<span className="text-red-500">*</span>
                            </label>
                            <input
                                id="name"
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Recipe name"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Category and Price */}
                        <div className="flex gap-4 mb-4">
                            {/* Category */}
                            <div className="flex-1">
                                <label
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Category<span className="text-red-500">*</span>
                                </label>
                                <select
                                defaultValue={'default'}
                                    id="category"
                                    {...register("category", { required: true })}
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option disabled  value={'default'}>Select a category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </div>

                            {/* Price */}
                            <div className="flex-1">
                                <label
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Price<span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="price"
                                    {...register("price", { required: true })}
                                    type="number"
                                    placeholder="Price"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                        </div>

                        {/* Recipe Details */}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Recipe Details<span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="recipe"
                                {...register("recipe", { required: true })}
                                placeholder="Recipe Details"
                                rows="5"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            ></textarea>
                        </div>

                        {/* File Upload */}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Upload File
                            </label>
                            <input
                                // id="fileUpload"
                                type="file"
                                {...register('image', {required: true})}
                                className="block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-yellow-700 to-yellow-500 text-white font-medium py-3 rounded flex items-center justify-center gap-2"
                        >
                            Add Item
                            <span role="img" aria-label="icon">
                                🍴
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItems;