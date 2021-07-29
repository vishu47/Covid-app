import React , {useEffect,useState} from 'react'
import {Button,Paper,Card,CardActionArea,CardMedia,Typography,CardContent,CardActions} from '@material-ui/core';



export default function AllData(props) {

    return (
        <>
            <div key={props.keys}  style={{'textAlign':'center'}} className="totaldata col-md-4 mt-3 mb-3 pr-4 pl-4" >
                <Card className="alldatacolor">
                    <CardActionArea>
                        <CardContent>   
                            <Typography className="customecardtext" gutterBottom variant="h4" component="h2">
                                {props.name}
                            </Typography>
                            <Typography gutterBottom variant="h3" component="h2" style={{'color':'#222831'}}>
                                {props.latest}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    )
}
