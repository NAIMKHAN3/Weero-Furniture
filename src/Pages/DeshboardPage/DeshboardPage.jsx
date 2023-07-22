import React from 'react';
import DeshboardHeader from '../../Components/DeshboardHeader/DeshboardHeader';
import DeshboardMiddleChart from '../../Components/DeshboardMiddleChart/DeshboardMiddleChart';
import DeshboardPieChart from '../../Components/DeshboardPieChart/DeshboardPieChart';

const DeshboardPage = () => {
    return (
        <div>
            <DeshboardHeader/>
            <DeshboardMiddleChart/>
            <DeshboardPieChart/>
        </div>
    );
};

export default DeshboardPage;