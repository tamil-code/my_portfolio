import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import meals from '../../assets/images/meals.jpg';
import socialmedia from '../../assets/images/social_media.jpg';
import chatapp from '../../assets/images/chapApp2.jpg';
import mui from '../../assets/images/mui.png'
import { FaReact } from 'react-icons/fa'
import { DiCss3 } from 'react-icons/di'
import { SiFirebase, SiJavascript } from 'react-icons/si'
import styled from "@emotion/styled";
import { fontWeight } from "@mui/system";
const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
   const Styledbutton = styled(Button) ({
     fontFamily:'Helvetica Neue',
     fontWeight:'bold'
   })

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });



    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />

                </h1>

                <div className="cards">
                    <Card sx={{ maxWidth: 345 }} className='card'>
                        <CardMedia
                            component="img"
                            alt="react-meals"
                            height="250"
                            image={meals}
                            className='img-hover'
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                React Meals
                            </Typography>
                            <Typography variant="body1" style={{ color: 'black', fontFamily: 'Helvetica Neue' }}>

                            </Typography>
                            <div className="icons">
                                <FaReact color='#88dded' />
                                <DiCss3 color="blue" />
                                <SiJavascript color="yellow" style={{ backgroundColor: 'black' }} />
                            </div>
                        </CardContent>
                        <CardActions className="card-actions" style={{display:'flex',justifyContent:'space-around',paddingBottom:'2rem'}} >
                            <a href="" target="_blank" rel="noopener noreferrer"><Button size="large" variant="outlined">Source code</Button></a>
                            <a href="https://react-meals-40967.web.app/" target="_blank" rel="noopener noreferrer"><Styledbutton size="large" variant="contained">Live</Styledbutton></a>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}  className='card'>
                        <CardMedia
                            component="img"
                            alt="react-meals"
                            height="250"
                            image={socialmedia}
                            className='img-hover'
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                socialMedia React App
                            </Typography>
                            <Typography variant="body1" style={{ color: 'black', fontFamily: 'Helvetica Neue' }}>

                            </Typography>
                            <div className="icons">
                                <FaReact color='#88dded' />
                                <DiCss3 color="blue" />
                                <img src={mui} alt="mui" width='30px' height='30px'/>
                                <SiJavascript color="yellow" style={{ backgroundColor: 'black' }} />
                            </div>
                        </CardContent>
                        <CardActions className="card-actions" style={{display:'flex',justifyContent:'space-around',paddingBottom:'2rem'}}>
                            <a href="https://github.com/tamil-code/socialmedia_react/tree/master" target="_blank" rel="noopener noreferrer"><Button size="large" variant="outlined">Source code</Button></a>
                            <a href="https://socialmedia-react.vercel.app/" target="_blank" rel="noopener noreferrer"><Styledbutton size="large" variant="contained">Live</Styledbutton></a>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} className='card'>
                        <CardMedia
                            component="img"
                            alt="react-meals"
                            height="250"
                            image={chatapp}
                            className='img-hover'
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Realtime chat app
                            </Typography>
                            <Typography variant="body1" style={{ color: 'black', fontFamily: 'Helvetica Neue' }}>

                            </Typography>
                            <div className="icons">
                                <FaReact color='#88dded' />
                                <SiFirebase color="gold"/>
                                <DiCss3 color="blue" />
                                <SiJavascript color="yellow" style={{ backgroundColor: 'black' }} />
                            </div>
                        </CardContent>
                        <CardActions className="card-actions" style={{display:'flex',justifyContent:'space-around',paddingBottom:'2rem'}}>
                            <a href="https://github.com/tamil-code/react-firebase-chatApp" target="_blank" rel="noopener noreferrer"><Button size="large" variant="outlined">Source code</Button></a>
                            <a href="https://react-firebase-chatapp-tau.vercel.app/" target="_blank" rel="noopener noreferrer"><Styledbutton size="large" variant="contained" >Live</Styledbutton></a>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;