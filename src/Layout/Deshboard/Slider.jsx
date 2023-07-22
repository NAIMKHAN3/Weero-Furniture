import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { CgUserList } from 'react-icons/cg';
import { FaList } from 'react-icons/fa';
import { MdOutlineAddBox } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { BiTransfer } from 'react-icons/bi';

const Slider = () => {
    return (
        <div className='col-span-2 bg-gray-800 h-[calc(100vh-25px)] p-5 rounded-lg text-secondary'>
            <ul className='flex flex-col h-full'>
                <li className='font-semibold text-primary mx-auto'>Admin Deshboard</li>
                <li>
                    <div>
                        <img className='w-16 h-16 rounded-full mx-auto my-5' src="https://www.worldcinemagallery.com/WCGImages/WCGStills/WCGHD/2021/7/katrina-kaif-187202118249.jpeg" alt="" />
                        <h1 className='text-sm text-center'>Wife Of Taimul</h1>
                        <p className='text-sm'>taimul.haque@gmail.com</p>
                    </div>
                </li>
                <li className='mt-6 flex items-center'>
                    <AiOutlineHome className='mr-2'/>
                    <Link to='/deshboard/deshboard-page'>Deshboard</Link>
                </li>
                <li className='mt-2 flex items-center'>
                    <MdOutlineAddBox className='mr-2'/>
                    <Link to='/deshboard/add-product'>Add Product</Link>
                </li>
                <li className='mt-2 flex items-center'>
                    <FaList className='mr-2'/>
                    <Link to='/deshboard/product-list'>Product List</Link>
                </li >
                <li className='mt-2 flex items-center'>
                    <CgUserList className='mr-2'/>
                    <Link to='/deshboard/product-list'>User List</Link>
                </li >
                <li className='mt-2 flex items-center'>
                    <BiTransfer className='mr-2'/>
                    <Link to='/deshboard/product-list'>All Transaction</Link>
                </li >
                
                <li className='mt-auto'>
                    <Link to='/'>Back to home</Link>
                </li>
            </ul>
        </div>
    );
};

export default Slider;