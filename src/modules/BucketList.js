import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Title from './Title';

const AboutWrapper = styled.div`
    width: 100%;
    font-size: 18px;
`;

function BucketList() {
    return (
        <AboutWrapper>
            <Link to="/"><Title /></Link>
            <h3>Bucket list</h3>
            <ul>
                <li>Run the New York City marathon</li>
                <li>Start a YouTube Vlog/lifestyle channel</li>
                <li>Become a Twitch partner</li>
                <li>Finish the last course at Adirondack Extreme</li>
                <li>Climb Mt. Everest, take a selfie at the top</li>
                <li>Play lacrosse at Randall's Island</li>
            </ul>
            <Link to="/about" className="normalLink">‹ Back</Link>
        </AboutWrapper>
    );
}

export default BucketList;