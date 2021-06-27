import React from 'react'
import Homecard from './Homecard'
import Footer from './Footer'
import Chart from './home/Chart'
import './main.css'
import {Container,Row,Col} from 'react-bootstrap'
import links from '../assets/img/covid/corona.png'
import { Link } from 'react-router-dom'
import {Button,Paper,Card,CardActionArea,CardMedia,Typography,CardContent,CardActions} from '@material-ui/core'

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


export default function Home() {
    return (
        <>
            <div className="container-fluid backwave">
            <Container>
                <section>
                    <div className="cover row">
                        <div className="col-md-6">
                            <h1> <span className="covidmain"> Covid </span> <br/> <span>  Detail App </span> </h1> <br/>
                            <Link to="contact" >
                                <Button  variant="contained" color="secondary">
                                    Hello India
                                </Button>
                            </Link>
                        </div>
                        <div className="col-md-6 home_img">
                        {/* <Paper className="" elevation={3}> */}
                            <img className="up-down"  src={links} alt="" />
                        {/* </Paper> */}
                        </div>
                    </div>   
                </section>
            </Container>
            </div>

            <Container>
                <section>
                    <Row>
                        <div className="col-md-12 world_wide">
                            <h1>Nation Wide Covid Details</h1>   
                        </div>
                        {
                            CardData.map((cards) => {
                               return  <Homecard
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
