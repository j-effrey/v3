import React, { Component } from "react";
import styled from "styled-components";

import { Link } from 'react-router-dom';
import Title from './Title';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

const Wrapper1 = styled.div`
    width: 100%;
    max-width: 600px;
    margin: auto;
    font-size: 20px;
    line-height: 150%;
`;

const WordWrapper = styled.span`
    text-decoration: line-through;
`;

class Games extends Component {

    constructor() {
        super();
        this.state = {
            wins: null,
            kills: null,
        };
    }

    componentDidMount() {
        fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/DopeShotzz%25231267/battle", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
                "x-rapidapi-key": "03fe1c4889mshb385f2528cfceacp19bad8jsn436b1e998745"
            }
        })
        .then(response => {
            response.json().then(data => {
                this.setState({
                    wins: data.br.wins,
                    kills: data.br.kills,
                });
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        if (!this.state.wins) {
            return <div />
        }
        return (
            <Wrapper1>
                <Link to="/"><Title /></Link>
                Outside of tech, if I'm not with friends in real life, 
                chances are I'm gaming with them online. Most of the games 
                in my current rotation are popular FPS titles. Maybe I'll 
                stream one day!
                <h3>Games</h3>
                <ul>
                    <li>CS:GO (DMG, <a href="https://www.faceit.com/en/players/dopeshotz/stats/csgo" target="blank" class="normalLink">Faceit level 5</a>)</li>
                    <li>COD: Warzone (<a href="https://cod.tracker.gg/warzone/profile/battlenet/DopeShotzz%231267/overview" target="blank" class="normalLink">{this.state.wins} wins</a>)</li>
                    <li>Valorant (during beta)</li>
                    <li>Smash Ultimate (Falcon main)</li>
                    <li><WordWrapper>League of Legends</WordWrapper> (as if)</li>
                </ul>
                <h3>Setup</h3>
                <ul>
                    <li>Components: NZXT H510i, Ryzen 5 5600x, GeForce RTX 3080, MSI B550 Gaming Edge, Kraken X63, G.SKILL Ripjaws V, WD_BLACK SN750, Corsair RMx 850</li>
                    <li>Peripherals: Dell S2719DGF, Keychron K6, Logitech Pro X Superlight, HyperX Cloud II, Audioengine A2+, Hermon Miller Aeron</li>
                    <li>Other: Windows 7/11, 400 DPI, 1000 Hz, 2.0 sens</li>
                    <li>CSGO: 1600x1200 (stretched)</li>
                </ul>
                <a href="https://www.twitch.tv/bestjeff_" target="blank"><FontAwesomeIcon icon={faTwitch} size="lg" class="social" id="twitch" /></a>
            </Wrapper1>
        );
    }
    
}

export default Games;