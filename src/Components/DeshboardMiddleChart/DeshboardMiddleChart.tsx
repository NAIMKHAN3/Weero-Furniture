import React from 'react';
import BarCharts from '../BarCharts/BarCharts';
import RecentTransaction from '../RecentTransaction/RecentTransaction';

const DeshboardMiddleChart = () => {
    return (
        <div className='flex mt-5'>
            <div className='w-[70%] p-3'>
                <BarCharts />
            </div>
            <div className='w-[30%] p-3'>
<RecentTransaction/>
            </div>
        </div>
    );
};

export default DeshboardMiddleChart;