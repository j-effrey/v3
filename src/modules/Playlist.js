import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Title from './Title';
import { breakpoints } from '../components/Breakpoints';
import SpotifyPlayer from 'react-spotify-player';

const size = {
    width: '100%',
    height: 500,
};

const PlaylistWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    margin: auto;
`;

const Playlist = ({ theme }) => {
    return (
        <PlaylistWrapper>
            <Link to="/"><Title /></Link> 
            <SpotifyPlayer 
                uri="spotify:playlist:4OMXrQM1Q43EuFhENRcswP"
                size={size}
                view="coverart"
                theme={theme === "light" ? "white" : "black"}
            />
        </PlaylistWrapper>
    );
}

export default Playlist;