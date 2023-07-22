import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const submit = (data) => {
        const files = [...data.image];


        const formData = new FormData();

        files.forEach((file, index) => {
            formData.append(`file${index + 1}`, file);
        });


        fetch("https://weero-furniture-server.onrender.com/api/files/upload", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(images => {
                if (images.status) {
                    const product = {
                        name: data.name,
                        cetegory: data.cetegory,
                        newPrice: data.price,
                        images: images.images,
                        sku: data.sku,
                        description: data.description
                    };
                    fetch("https://weero-furniture-server.onrender.com/api/product/add-product", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                          },
                        body: JSON.stringify(product)
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.status){
                            toast.success("Product Added Successfully")
                            // navigate("/deshboard/product-list")
                        }
                    })
                }
            });
    };


    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='name'>
                        Product  Name
                    </label>
                    <input className='border p-1' type='text' placeholder='Name' id='name' {...register("name")} />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Product  Image
                    </label>
                    <input type='file' multiple className='border' name='image' id='image' {...register("image")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='cetegory'>
                        Product Cetegory
                    </label>
                    <select name='cetegory' className='border p-1' placeholder='Cetegory' id='cetegory' {...register("cetegory")}>
                        <option value='LIVING ROOM'>LIVING ROOM</option>
                        <option value='BED ROOM'>BED ROOM</option>
                        <option value='DINING ROOM'>DINING ROOM</option>
                        <option value='CHAIR'>CHAIR</option>
                        <option value='STUDY'>STUDY</option>
                        <option value='OFFICE'>OFFICE</option>
                        <option value='LIGHT'>LIGHT</option>
                    </select>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='price'>
                        Product  Price
                    </label>
                    <input type='text' className='border p-1' placeholder='Price' name='price' id='price' {...register("price")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='sku'>
                        Product SKU
                    </label>
                    <input
                        className='border p-1'
                        type='text'
                        name='sku'
                        placeholder='Sku'
                        id='sku'
                        {...register("sku")}
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='description'>
                        Product  Description
                    </label>
                    <textarea
                        className='border p-1'
                        type='text'
                        name='description'
                        placeholder='Description'
                        id='description'
                        {...register("description")}
                    />
                </div>



                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;