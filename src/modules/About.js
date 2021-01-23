import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Title from './Title';
import Photo from '../images/squareme-min2.jpg';
import { breakpoints } from '../components/Breakpoints';

const AboutWrapper = styled.div`
    width: 100%;
`;

const BodyWrapper = styled.div`
    
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin: auto;

    @media (min-width: ${breakpoints.tabletMin}) {
        flex-wrap: nowrap;
    }
`;

const SideBySide = styled.div`
    font-size: 20px;
    line-height: 150%;
    width: 100%;
    height: 100%;
    margin: auto;

    :nth-child(2) {
        @media (min-width: ${breakpoints.tabletMin}) {
            margin-left: 50px;
            width: 70%;
        }
    }

`;

function About() {
    return (
        <AboutWrapper>
            <Link to="/"><Title /></Link>
            <BodyWrapper>
                <SideBySide>
                    <img src={Photo} class="photo" alt="Headshot" />
                </SideBySide>
                <SideBySide>
                    I work on Platform at Yext NYC. <br /><br />
                    Outside of tech, I enjoy basketball, roadtrips, lifting, skiing and gaming. <br /><br />
                    That being said, I want to get into investing, playing piano, 
                    videography, running, and reading. <br /><br />
                    <Link to="/bucketlist" class="pageLink">Bucket list</Link>
                </SideBySide>
            </BodyWrapper>
        </AboutWrapper>
    );
}

export default About;