import React, { useEffect } from 'react';
import { useState } from 'react';

const CetegorySection1 = ({ images }) => {
    if (!images.length) {
        return <h1>Cetegory Image Not Found</h1>
    }
    const [image, setImage] = useState(images[0].images[0])

    useEffect(() => {
        setImage(image);
    }, [image])


    const handleImage = (img) => {
        console.log(img)
        setImage(img);
    }

    return (
        <>
            {/* <h1 className='text-lg font-bold my-5'>{showCetegory?.name}</h1> */}
            <div className='grid grid-cols-1 lg:grid-cols-12 mt-4'>

                <div className='lg:col-span-8 overflow-hidden'>

                    <img className='lg:h-[550px]  w-full hover:scale-105 duration-300 cursor-pointer' src={image} alt="" />
                </div>
                <div className='lg:col-span-4 mt-3 grid grid-cols-2 gap-3 lg:ml-4'>
                    {
                        images.map((image, i) => <div key={i} className='lg:w-40 lg:h-40 mx-auto bg-secondary overflow-hidden' onClick={() => handleImage(image.images[0])}>
                            <img className='w-full h-full hover:scale-110 duration-300 cursor-pointer' src={image.images[0]} alt="" />
                        </div>)
                    }


                </div>
            </div>
        </>
    );
};

export default CetegorySection1;