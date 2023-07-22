import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';



const ProductList = () => {

    const [products, setProducts] = useState([])
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        fetch("https://weero-furniture-server.onrender.com/api/product/get-products")
            .then(res => res.json())
            .then(data => setProducts(data.data))
    }, [refetch])

    const handleDelete = (id) => {
        fetch(`https://weero-furniture-server.onrender.com/api/product/delete-product/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Product Deleted")
                setRefetch(!refetch)
            })
    }


    return (
        <div class='flex flex-col justify-center items-center h-full w-full '>
            <div class='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
                <header class='px-5 py-4 border-b border-gray-100'>
                    <div class='font-semibold text-gray-800'>Products</div>
                </header>

                <div class='overflow-x-auto p-3'>
                    <table class='table-auto w-full'>
                        <thead class='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                            <tr>

                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Image</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Name</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Cetegory</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>Price</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-left'>sku</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-center'>Update</div>
                                </th>
                                <th class='p-2'>
                                    <div class='font-semibold text-center'>Delete</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody class='text-sm divide-y divide-gray-100'>
                            {products?.map(({ images, name, sku, newPrice, cetegory, _id }) => (
                                <tr>
                                    <td class='p-2'>
                                        <img className='w-12 h-12' src={images[0]} alt="" />
                                    </td>
                                    <td class='p-2'>
                                        <div class='font-medium text-gray-800'>{name}</div>
                                    </td>
                                    <td class='p-2'>
                                        <div class='text-left capitalize'>{cetegory}</div>
                                    </td>
                                    <td class='p-2'>
                                        <div class='text-left'>
                                            <div class='text-left capitalize'>{newPrice}</div>
                                        </div>
                                    </td>
                                    <td class='p-2'>
                                        <div class='text-left font-medium text-indigo-500'>
                                            {sku}
                                        </div>
                                    </td>
                                    <td class='p-2'>
                                        <div class='flex justify-center'>
                                            <Link to={`/deshboard/update-product/${_id}`}>
                                            <button

                                            >
                                                <svg
                                                    viewBox="0 0 1024 1024"
                                                    fill="currentColor"
                                                    height="1em"
                                                    width="1em"
                                                    class='w-8 h-8 hover:text-gray-800 rounded-full hover:bg-primary p-1 duration-300'
                                                >
                                                    <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" />
                                                </svg>
                                            </button>
                                            </Link>
                                        </div>
                                    </td>
                                    <td class='p-2'>
                                        <div class='flex justify-center'>
                                            <button
                                                onClick={() => handleDelete(_id)}
                                            >
                                                <svg
                                                    class='w-8 h-8 hover:text-red-500 rounded-full hover:bg-gray-100 p-1'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    viewBox='0 0 24 24'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        stroke-width='2'
                                                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductList;