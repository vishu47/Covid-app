import React from 'react';
import Cimg from '../assets/img/contact.png';
import {Container,Row,Col} from 'react-bootstrap'
import useStyles from './common/common';
import Footer from './Footer'
import {Button,Paper,Card,CardActionArea,CardMedia,Typography,CardContent,CardActions,makeStyles,TextField} from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';




const Contact = () => {
    const classes = useStyles();

    return (
        <>
            <section className="contact_head ">
                <h1 className="covidmain">Contact Us</h1>
            </section>
            <Container>
                <Card elevation="3" className="conatct_card">
                    <Row>
                        <Col md="6">
                            <img src={Cimg} alt="" />
                        </Col>
                        <Col md="6" className="pt-2 pb-5">
                            <h4 className="footer_brand">Send Your Details to Us!!! </h4>
                            <form className={classes.root} noValidate autoComplete="off" width="100%">
                                <TextField style={{ width : "75%"}} size="small"  label="Name" type="text" variant="outlined" /><br />
                                <TextField style={{ width : "75%"}} size="small"  label="Mobile Number" type="number" variant="outlined" /><br />
                                <TextField  style={{ width : "75%"}} size="small" id="" label="Email Address" type="email" variant="outlined" /><br />
                                <TextField  style={{ width : "75%"}} size="small"  label="Description..." type="textarea" variant="outlined" multiline rows="3" /><br />
                                <Button variant="contained" color="primary" className={classes.button} startIcon={<CloudUploadIcon />} > Send </Button>
                            </form> 
                        </Col>
                    </Row>
                </Card>
            </Container>
            <Footer></Footer>
        </>
    );
}

export default Contact;
