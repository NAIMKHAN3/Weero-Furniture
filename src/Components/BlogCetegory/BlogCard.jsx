import React from 'react';
import { AiFillLike, AiOutlineDislike, AiTwotoneDislike } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const BlogCard = ({ data }) => {

    const timeStamp = (time) => {
        const timeDifference = Date.now() - Date.parse(time);
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(timeDifference / 1000 / 60);
        const hours = Math.floor(timeDifference / 1000 / 60 / 60);
        const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
        if (seconds < 60) {
            return `${seconds} seconds ago`;
        } else if (minutes < 60) {
            return `${minutes} minutes ago`;
        } else if (hours < 24) {
            return `${hours} hours ago`;
        } else {
            return `${days} days ago`;
        }
    }

    const postTime = timeStamp(data.createdAt)
    return (
        <div>
            <div className="border w-full mt-5 rounded-md hover:border-primary mx-auto hover:shadow-lg  duration-300">
                <div className='flex items-center flex-col md:flex-row'>
                    <img src={data.image} className="w-full lg:w-[250px] lg:h-[230px] p-2" />
                    <div className='px-5 w-full'>
                        <h1 className='text-right'>{postTime}</h1>
                        <h1 className="text-xl text-primary font-semibold cursor-pointer my-3 ">{data.title}</h1>
                        <p className="font-semibold text-gray-800">{data.description}</p>
                        <div className='mt-3 flex justify-between items-center'>
                            <p className='flex items-center  font-semibold'>
                                <AiFillLike className='mr-1 text-primary' /> <span>34</span>
                            </p>
                            <p className='flex items-center  font-semibold'>
                                <AiTwotoneDislike className='mr-1 text-primary' /> <span>6</span>
                            </p>
                        </div>
                        <div className='flex justify-between items-center mt-3 border-t pt-1 text-gray-800'>
                            <button className='flex justify-center font-semibold hover:bg-primary px-4 py-2 w-1/3 rounded-md hover:text-secondary duration-300'>
                                <BiLike className='text-2xl mr-2' />
                                Like</button>
                            <button className='flex justify-center w-1/3 font-semibold hover:bg-primary px-x py-2 rounded-md hover:text-secondary duration-300'>
                                <AiOutlineDislike className='text-2xl mr-2' />
                                Dislike</button>
                            <Link to='/blog-details'><h1 className="text-indigo-600 hover:text-primary my-auto cursor-pointer">See More</h1></Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BlogCard;