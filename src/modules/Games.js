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
                I might stream one day!
                <h3>Games</h3>
                <ul>
                    <li>CS:GO (DMG, <a href="https://www.faceit.com/en/players/dopeshotz/stats/csgo" target="blank" class="normalLink">Faceit level 5</a>)</li>
                    <li>COD: Warzone (<a href="https://cod.tracker.gg/warzone/profile/battlenet/DopeShotzz%231267/overview" target="blank" class="normalLink">{this.state.wins} wins</a>)</li>
                    <li>Valorant (Gold 2)</li>
                    <li>Smash Ultimate (Falcon main)</li>
                    <li><WordWrapper>League of Legends</WordWrapper> (as if)</li>
                </ul>
                <h3>Setup</h3>
                <ul>
                    <li>Build: Ryzen 5 5600x, Asus TUF RTX 3080 // H510i, Kraken X63, MSI Gaming Edge, G.Skill Ripjaws (32GB), SN750 NVMe (1TB), Corsair RMx 850</li>
                    <li>Peripherals: Dell S2719DGF, Keychron K6, Logitech Pro X Superlight, Hermon Miller Aeron</li>
                    <li>Streaming: Shure SM7B, Focusrite Scarlett Solo, Cloudlifter CL-1, Audioengine A2+, Canon EOS Rebel T6</li>
                    <li>Other: Windows 6/11, 400 DPI, 1000 Hz, 2.5 sens</li>
                    <li>Res: 1920x1440 (4:3 stretched)</li>
                </ul>
                <a href="https://www.twitch.tv/bestjeff_" target="blank"><FontAwesomeIcon icon={faTwitch} size="lg" class="social" id="twitch" /></a>
            </Wrapper1>
        );
    }
    
}

export default Games;