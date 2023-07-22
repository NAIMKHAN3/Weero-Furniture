import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const product = useLoaderData();
    const navigate = useNavigate();
    const { name, newPrice,  description, sku, cetegory, _id } = product?.data || {};
    const submit = ({ name, newPrice, oldPrice, description, sku, cetegory }) => {
        const product = {
            name,
             newPrice,
              oldPrice,
               description,
                sku,
                 cetegory,
                  id:_id
        }
        fetch("https://weero-furniture-server.onrender.com/api/product/update-product", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if(data.status){
                    toast.success("Product Updated")
                    navigate("/deshboard/product-list")
                }
            })
    }
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
                    <input className='border p-1' type='text' defaultValue={name} placeholder='Name' id='name' {...register("name")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='cetegory'>
                        Product Cetegory
                    </label>
                    <select defaultValue={cetegory} className='border p-1' placeholder='Cetegory' id='cetegory' {...register("cetegory")}>
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
                        Product  Old Price
                    </label>
                    <input type='text' defaultValue={newPrice} className='border p-1' placeholder='Price' id='price' readOnly disabled {...register("oldPrice")} />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Product New Price
                    </label>
                    <input type='text' multiple className='border' defaultValue={0}  id='image'  {...register("newPrice")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='sku'>
                        Product SKU
                    </label>
                    <input
                        className='border p-1'
                        defaultValue={sku}
                        type='text'
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
                        defaultValue={description}
                        className='border p-1'
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

export default UpdateProduct;