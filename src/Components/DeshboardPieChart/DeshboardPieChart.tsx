import React from 'react';
import PieCharts1 from '../PieCharts/PieCharts1';
import PieCharts2 from '../PieCharts/PieCharts2';

const DeshboardPieChart = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3'>
            <PieCharts1/>
            <PieCharts2/>
        </div>
    );
};

export default DeshboardPieChart;