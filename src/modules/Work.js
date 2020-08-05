import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Title from './Title';
import Pdf from '../images/Resume-2020.pdf';

const Paragraph = styled.p`
    margin-bottom: 50px;
    line-height: 150%;
    text-align: left;
    font-style: oblique;
    font-size: 20px;
`;

const Wrapper1 = styled.div`
    width: 100%;
    max-width: 600px;
    margin: auto;
    font-size: 20px;
    line-height: 150%;
`;

function Work() {
    return (
        <Wrapper1>
            <Link to="/"><Title /></Link>
            <Paragraph>
                The past few years have been formative in shaping my growth as a 
            developer. I'm lucky enough to be able to
            create products I'm proud to stand by and deploy production
            level code that impacts users meaningfully. 
            Going forward, I hope to use software engineering as a tool for providing 
            futureproof and beautiful solutions to modern day endeavors.
            </Paragraph>
            <h3>Some stuff I've done</h3>
            <ul>
                <li>Engineer @ <a href="https://www.yext.com" class="normalLink" target="_blank" rel="noopener noreferrer">Yext</a> — Platform</li>
                <li>Intern @ <a href="https://www.yext.com/products/pages/" class="normalLink" target="_blank" rel="noopener noreferrer">Yext</a> — Pages</li>
                <li>TA @ <a href="https://www.cs.cornell.edu/~hirsh/4700/" class="normalLink" target="_blank" rel="noopener noreferrer">Cornell CS4700</a> — AI</li>
                <li>Intern @ <a href="https://www.lockheedmartin.com/en-us/who-we-are/business-areas/rotary-and-mission-systems.html" class="normalLink" target="_blank" rel="noopener noreferrer">Lockheed Martin</a> — Databases</li>
                <li>Intern @ <a href="https://www.netsurit.com/en-us/" class="normalLink" target="_blank" rel="noopener noreferrer">Netsurit</a> — DevOps</li>
            </ul>
            <a href={Pdf} target="_blank" class="pageLink" rel="noopener noreferrer">resumé</a>
        </Wrapper1>
    );
}

export default Work;