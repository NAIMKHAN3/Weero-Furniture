import React, { useEffect, useState } from 'react';
import CetegorySection1 from './CetegorySection1';



const CetegorySection = () => {
    const [cetegorys, setCetegorys] = useState([]);
    const [image, showImage] = useState([]);
    const [cetegoryName, setCetegoryName] = useState(cetegorys[0]?.cetegory);

    useEffect(() => {
        fetch('https://weero-furniture-server.onrender.com/api/product/get-cetegory')
            .then(res => res.json())
            .then(data => setCetegorys(data.data))
    }, [])

    useEffect(() => {
        fetch(`https://weero-furniture-server.onrender.com/api/product/get-cetegory-image?cetegory=${cetegoryName}`)
            .then(res => res.json())
            .then(data => showImage(data.data))
    }, [cetegorys, cetegoryName])

    if(!cetegorys){
        return <h1>Loading...</h1>
    }
    const handleCetegory = (id) => {
        const cetegory = cetegorys.find(cetegory => cetegory._id === id)
        showImage(cetegory)
    }

    console.log({cetegorys})
    console.log({image})
   

    return (
        <div className='mt-10 max-w-screen-xl mx-auto p-3'>
            <h1 className='text-3xl font-semibold text-primary my-10'>Our Cetegory</h1>
            <ul className='flex justify-betwee items-center w-full'>

                {
                    cetegorys.map(cetegory => <li key={cetegory._id} className={`${cetegory.cetegory === cetegory.cetegory && "border-b-4 border-primary"} font-semibold md:text-l  text-primary cursor-pointer mr-5`} onClick={()=> setCetegoryName(cetegory.cetegory)}>{cetegory.cetegory}</li>)
                }


            </ul>
            <CetegorySection1 images={image} />
        </div>
    );
};

export default CetegorySection;