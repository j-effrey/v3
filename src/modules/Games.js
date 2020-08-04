import React from "react";
import styled from "styled-components";

import { Link } from 'react-router-dom';
import Title from './Title';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

const Wrapper1 = styled.div`
    width: 100%;
    max-width: 600px;
    margin: auto;
    font-size: 18px;
    line-height: 150%;
`;

const WordWrapper = styled.span`
    text-decoration: line-through;
`;

function Games() {
    return (
        <Wrapper1>
            <Link to="/"><Title /></Link>
            Outside of tech, if I'm not with friends in real life, 
            chances are I'm gaming with them online. Most of the games 
            in my current rotation are popular FPS titles. Maybe I'll 
            stream one day!
            <h3>Games</h3>
            <ul>
                <li>CS:GO (currently DMG, <a href="https://www.faceit.com/en/players/dopeshotz/stats/csgo" target="blank" class="normalLink">Faceit level 5</a>)</li>
                <li><a href="https://cod.tracker.gg/warzone/profile/battlenet/DopeShotzz%231267/overview" target="blank" class="normalLink">
                    COD: Warzone
                    </a> (10+ wins, 1.1+ KDR)</li>
                <li>Valorant (during beta)</li>
                <li>Smash Ultimate (Falcon main)</li>
                <li><WordWrapper>League of Legends</WordWrapper> (as if)</li>
            </ul>
            <h3>Setup</h3>
            <ul>
                <li>Macbook Pro 2018 15" (i9, 32GB RAM, Radeon Vega 20)</li>
                <li>Peripherals: Dell S2719DGF, Keychron K6, Razer Deathadder Chroma, HyperX Cloud II</li>
                <li>Other: Windows 6/11, 400 DPI, 1000 Hz, 1.5 sens</li>
            </ul>
            <a href="https://www.twitch.tv/bestjeff1" target="blank"><FontAwesomeIcon icon={faTwitch} size="lg" class="social" id="twitch" /></a>
        </Wrapper1>
    );
}

export default Games;