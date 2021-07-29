import React,{useEffect, useState} from 'react'
import Homecard from './Homecard'
import AllData from './home/AllData'
import Footer from './Footer'
import Chart from './home/Chart'
import {Container,Row,Col} from 'react-bootstrap'
import links from '../assets/img/covid/corona.png'
import { Link } from 'react-router-dom'
import {Button} from '@material-ui/core'
import Tilty from "react-tilty";



var CardData = [
    {
        image : links,
        varient : "B4H-T6",
        country : 'India ',
        chart : 'true',
        button : 'true',
        number : '200',
        title : 'Covid India(Total Case)',
        descriprion : "This is the highest number of Covid infected People. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        image : links,
        varient : "B4H-T6",
        country : 'India ',
        button : 'true',
        chart : 'true',
        number : '200',
        title : 'Covid India(Total Case)',
        descriprion : "This is the highest number of Covid infected People. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        image : links,
        varient : "B4H-T6",
        country : 'India ',
        button : 'true',
        chart : 'true',
        number : '200',
        title : 'Covid India(Total Case)',
        descriprion : "This is the highest number of Covid infected People. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    }
];



export default function Home(props) {
    var data = {...props.data}
    const [cdata , setCdata] = useState();
     useEffect(() => {
        setCdata(data)
    }, [props]);

    console.log(cdata);
    var allData = [
        {
            kul: cdata.summary.total,
            name: 'Total Case'
        },
        {
            kul: cdata.summary.confirmedCasesIndian,
            name: 'Total Indian Case'

        },
        {
            kul: cdata.summary.discharged,
            name: 'Total Discharged'

        },
        {
            kul: cdata.summary.deaths,
            name: 'Total Deaths'

        },
        {
            kul: cdata.summary.confirmedCasesForeign,
            name: 'Total Foreigers'

        },
        {
            kul: cdata.summary.total,
            name: 'Total Active Case'

        }
    ];
    return (
        <>
            <div className="container-fluid backwave">
            <Container>
                <section>
                    <div className="cover row">
                        <div className="col-md-6">
                            <h1> <span className="covidmain"> Covid </span> <br/> <span>  Detail App </span> </h1> <br/>
                            <Link to="contact" >
                                {/* <Tilty className="tilty" glare scale={1} maxGlare={0.0}> */}
                                    <Button  variant="contained" color="secondary">
                                        Hello India
                                    </Button>
                                {/* </Tilty> ~ */}
                            </Link>
                        </div>
                        
                        <div className="col-md-6 home_img">
                            <Tilty className="tilty" glare scale={1.05} maxGlare={0.0}>
                                <img className=" data-tilt up-down"  src={links} alt="" />
                            </Tilty>
                        </div>
                    </div>   
                </section>
            </Container>
            </div>

            

                <section>
                    <Row>
                        {
                            allData.map((data , num) => {
                                return  <AllData 
                                    keys = {num}
                                    latest = {data.kul}
                                    name = {data.name} 
                                />
                            })
                        }
                    </Row>
                </section>
            <Container>
                <section>
                    <Row>
                        <div className="col-md-12 world_wide">
                            <h1>Nation Wide Covid Details</h1>   
                        </div>
                        {
                            CardData.map((cards,key) => {
                               return  <Homecard 
                                    key={key}
                                    image = "false"
                                    country = { cards.country }
                                    number = { cards.number }
                                    title = { cards.title }
                                    descriprion = { cards.descriprion }
                                    chart = {cards.chart}
                               />
                            })  
                        }
                         <div className="col-md-12 world_wide pt-5 pb-5">
                            <h1>Live Covid Details Chart</h1>   
                        </div>
                        <div className="col-12">
                            <Chart></Chart>
                        </div>
                    </Row>
                </section>
                <section>
                    <Row>
                        <div className="col-md-12 world_wide pt-5 pb-5">
                            <h1>Check For Some HightLightes</h1>   
                        </div>
                        {
                            CardData.map((cards) => {
                               return  <Homecard
                                    image = "false"
                                    title = { cards.title }
                                    descriprion = { cards.descriprion }
                                    button = {cards.button}
                               />
                            })  
                        }
                    </Row>
                </section>
                <section>
                    <Row>
                        <div className="col-md-12 world_wide pt-5 pb-5">
                            <h1>Corona Varients</h1>   
                        </div>
                        {
                            CardData.map((cards) => {
                               return  <Homecard
                                    image = {cards.image}
                                    title = { cards.varient }
                                    descriprion = { cards.descriprion }
                                    button = {cards.button}
                               />
                            })  
                        }
                    </Row>
                </section>
            </Container>   
            <Footer></Footer>
        </>
    )
}
