import React from 'react'
import {Button,Paper,Card,CardActionArea,CardMedia,Typography,CardContent,CardActions} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CardChart from './home/CardChart'
import { Link } from 'react-router-dom'



export default function Homecard(props) {
    return (
        <>
            <div width="" className=" col-md-4 pt-4 pb-4">
                <Card key={props.keys} className="card_back">
                    <CardActionArea classnames="text-center">
                        {
                            props.image === 'false'? ' ':
                                <CardMedia
                                    className = "card_image"
                                    image={props.image}
                                    title="Contemplative Reptile"
                                />
                        }
                        <CardContent>
                            <Typography className="card_text" gutterBottom variant="h4" component="h2">
                                {props.country}
                            </Typography>
                            <Typography gutterBottom variant="h3" component="h2">
                                {props.number}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.descriprion}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    {
                        props.chart === 'true' ? <CardChart title = {props.country} /> : ''
                    }
                    {
                        props.button === 'true' ? <small className=" mb-2" style={{float:"right"}}><Link to="">Know more</Link><ArrowForwardIosIcon/></small> : ''
                    }
                </Card>
            </div>
        </>
    )
}
