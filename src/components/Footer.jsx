import React from 'react';
import { Navbar,Nav,Form,NavDropdown,FormControl,Row,Col,Container } from 'react-bootstrap';
import LocationCityTwoToneIcon from '@material-ui/icons/LocationCityTwoTone';
import ContactPhoneSharpIcon from '@material-ui/icons/ContactPhoneSharp';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import { Link } from 'react-router-dom'
import {Button,Paper,Card,CardActionArea,CardMedia,Typography,CardContent,CardActions,TextField} from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import useStyles from './common/common';





const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <section className="footer">

                <Container fluid >
                    <Row>
                        <Col className="" md="3">
                            <ul>
                                <li style={{"listStyleType": "none"}} className="footer_brand" >Covid App</li>
                                <li style={{"listStyleType": "none"}} ><Button className="footerbutton" variant="outlined" color="secondary" size="small">Know More</Button></li>
                            </ul>
                        </Col>
                        <Col className="footermiddle" md="3">
                            <ul>
                                <li><h5 className="footer_brand">Get Details</h5></li>
                                <li><Link to="/contact"> <ContactPhoneSharpIcon  className="mr-2"></ContactPhoneSharpIcon>Contact Us </Link></li>
                                <li><Link to="/about"><LocationCityTwoToneIcon className="mr-2"></LocationCityTwoToneIcon>Locate Us</Link></li>
                                <li><Link to="/"><InfoSharpIcon className="mr-2"></InfoSharpIcon >About Us</Link></li>
                            </ul>
                        </Col>
                        <Col className="footermiddle" md="3">
                            <ul>
                                <li><h5 className="footer_brand">Charts</h5></li>
                                <li><Link to="/contact">Total Chart</Link></li>
                                <li><Link to="/about">Countary Chart</Link></li>
                                <li><Link to="/">Recovery Chart</Link></li>
                            </ul>
                        </Col>
                        <Col className="" md="3">
                            <h5 className="footer_brand m-0 pt-4">Submit Your Query</h5>
                            <form className={classes.root} noValidate autoComplete="off" width="100%">
                                <div>
                                    <TextField size="small" id="outlined-search" label="Search field" type="search" variant="outlined" />
                                    <Button variant="contained" color="primary" className={classes.button} startIcon={<CloudUploadIcon />} > Send </Button>
                                </div>
                            </form>        
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Footer;
