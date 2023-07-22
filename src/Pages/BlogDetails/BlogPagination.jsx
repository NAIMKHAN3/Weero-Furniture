import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../Blog/pagination.css'
import { AiFillLike, AiOutlineDislike, AiOutlineSearch, AiTwotoneDislike } from 'react-icons/ai';
import { SiBlogger } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import BlogCetegory from '../../Components/BlogCetegory/BlogCetegory';
import PopularPosts from '../../Components/PopularPosts/PopularPosts';
import BlogCard from '../../Components/BlogCetegory/BlogCard';

const BlogPagination = ({ data }) => {
    const itemsPerPage = 7;
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

   









    return (
        <div className='max-w-screen-xl mx-auto p1'>
            <div className='flex flex-col md:flex-row my-10'>
                <div className='md:w-1/3 rounded-md bg-white mr-3'>
                    <div className='flex justify-center items-center border rounded-md shadow-md'>
                        <input
                            type="text"
                            className=" py-4 px-5 rounded-md w-full focus:outline-none border focus:border-primary"
                            placeholder="Search your product"

                        />
                        <AiOutlineSearch className="text-sm text-gray-300  w-8 h-8" />
                    </div>
                  <div>
                    <BlogCetegory/>
                  </div>
                   <div>
                    <PopularPosts title="Popular Posts"/>
                   </div>
                </div>
                <div className="md:w-2/3 mr-2">
                    {
                        currentItems.map(data => <BlogCard key={data._id} data={data}/>)
                    }
                </div>

            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<Previous"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName='page-number'
                previousLinkClassName='page-number'
                nextLinkClassName='page-number'
                activeClassName='active'
            />
        </div>
    );
};

export default BlogPagination;