import React from 'react'
import { Pie } from 'react-chartjs-2';

const COLORS = [
    '#4dc9f6',
    '#f67019',
    '#059BFF',
  ];

const data = {
    labels : ['Active','Recovered','Total'],

    datasets : [
        {
            label : '# of Coivd Positive',
            data: [12, 19,10],
            fill: false,
            backgroundColor : COLORS,
            borderColor: '#ffffff',
        },
    ],
};


export default function Chart(props) {
    const option = {
        responsive: true,
        maintainAspectRatio: false ,
        plugins : {
            legend:{
                position:'bottom',
            },
            title:{
                display:true,
                text:props.title,
            },
        }, 
        
    };
    return (
        <div>
           <Pie
                data = {data}
                height = {200}
                width = {200}
                options={option}
            /> 
        </div>
    )
}
