import React from 'react'
import { Bar,Line } from 'react-chartjs-2';

const data = {
    labels : ['January','February','March','April', 'May','June', ],
    datasets : [
        {
            label : '# of Coivd Positive',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};
const option = {
    scales: {
        y: {
            min: 0,
            max: 50,
        },
    },
    responsive: true,
    maintainAspectRatio: false ,
    plugins : {
        legend:{
            position:'bottom',
        },
        title:{
            display:true,
            text:'Live Data',
        },
    }, 
    
};

export default function Chart() {
    return (
        <div>
           <Line
                data = {data}
                height = {400}
                width = {600}
                options={option}
            /> 
        </div>
    )
}
