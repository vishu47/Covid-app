import React from 'react';
import Cimg from '../assets/img/about.png';
import Me from '../assets/img/img.jpg';
import { Link } from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'
import Footer from './Footer'
import {Button,Paper,Card,CardActionArea,CardMedia,Typography,CardContent,CardActions,makeStyles,TextField} from '@material-ui/core'
import {Facebook,Twitter,GitHub,Instagram,LinkedIn} from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/';


const About = () => {
    return (
        <>
            <section className="contact_head ">
                <h1 className="covidmain">About Us</h1>
            </section>
            <Container>
                <Row>
                    <Col md="12" className="about_desc">
                        <h5>We are dedicated and Commited to provide the Verified and Most Relavent Details to Our Visitors!!!</h5>
                    </Col>
                </Row>
                <Row className="about_des">
                    <Col md="3" className="about_img">
                        <img style={{width:"200px",height:"200px"}} src={Me} alt="" />
                    </Col>
                    <Col md="9" className="about_cont pt-2 pb-5">
                        <p>I am the creator of this Covid App.My Name is Vishnu Maurya. A Full Stack Developer and Expertise in Laravel.  And gaining expertise in React and Node.js.
                            Learning and gaining experience is all time profitable and It help me to grow more in my area of interst and working with coding is my habit and it also 
                             my first interest </p>
                             <span>
                                 <Link style={{color:"black"}} to="/"><GitHub/></Link>
                                 <Link style={{color:" #8a3ab9"}} to="/"><Instagram/></Link>
                                 <Link to="/"><Twitter/></Link>
                                 <Link to="/"><LinkedIn/></Link>
                                 <Link style={{color:" #3b5998 "}}  to="/"><Facebook/></Link>
                            </span>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
}

export default About;
