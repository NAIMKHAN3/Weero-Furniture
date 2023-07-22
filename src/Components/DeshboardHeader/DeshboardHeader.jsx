import React from 'react';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { BiTransfer } from 'react-icons/bi';
import { BsBox } from 'react-icons/bs';
import { FiPieChart, FiUsers } from 'react-icons/fi';
import { TbUsers } from 'react-icons/tb';

const DeshboardHeader = () => {
    return (
        <div>
            <div className='flex justify-between items-center p-3'>
                <h1 className='text-primary font-semibold text-xl uppercase'>Weero Furniture Deshboard</h1>
                <button className='bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md'>Log out</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 ml-4'>
                <div className='p-3 bg-gradient-to-r from-gray-800 to-gray-600 rounded-md drop-shadow-2xl'>
                    <div className='flex justify-between items-center'>
                        <div className='ml-3 text-secondary flex items-center justify-between'>
                            <TbUsers size={30} />
                            <div className='ml-2'>
                                <h1>Users</h1>
                                <p className='text-xl'>5142+</p>
                            </div>
                        </div>
                        <FiPieChart className='text-secondary' size={30} />
                    </div>
                </div>
                <div className='p-3 bg-gradient-to-r from-gray-800 to-gray-600 rounded-md drop-shadow-2xl'>
                    <div className='flex justify-between items-center'>
                        <div className='ml-3 text-secondary flex items-center justify-between'>
                            <BsBox size={30} />
                            <div className='ml-2'>
                                <h1>Products</h1>
                                <p className='text-xl'>250+</p>
                            </div>
                        </div>
                        <FiPieChart className='text-secondary' size={30} />
                    </div>
                </div>
                <div className='p-3 bg-gradient-to-r from-gray-800 to-gray-600 rounded-md drop-shadow-2xl'>
                    <div className='flex justify-between items-center'>
                        <div className='ml-3 text-secondary flex items-center justify-between'>
                            <AiOutlineOrderedList size={30} />
                            <div className='ml-2'>
                                <h1>orders</h1>
                                <p className='text-xl'>1500+</p>
                            </div>
                        </div>
                        <FiPieChart className='text-secondary' size={30} />
                    </div>
                </div>
                <div className='p-3 bg-gradient-to-r from-gray-800 to-gray-600 rounded-md drop-shadow-2xl'>
                    <div className='flex justify-between items-center'>
                        <div className='ml-3 text-secondary flex items-center justify-between'>
                            <BiTransfer size={30} />
                            <div className='ml-2'>
                                <h1>Transactions</h1>
                                <p className='text-xl'>3000+</p>
                            </div>
                        </div>
                        <FiPieChart className='text-secondary' size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeshboardHeader;