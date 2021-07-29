import React,{useEffect, useState} from 'react'
import Home from '../../components/Home';



export default function Backend() {
    const [data , setData] = useState();

    useEffect(() => {
        const fetcApi = async () => {
            const url = `https://api.covid19india.org/state_district_wise.json`;
            const res = await fetch(url);
            // const json = JSON.parse(res)
            setData(res);
            console.log(res)
        }
        fetcApi();
    }, []);

    return(
        <>
            <Home prop = {data} />
        </>
    )
}
