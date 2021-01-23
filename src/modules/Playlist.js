import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Title from './Title';
import { string } from 'prop-types';

const PlaylistWrapper = styled.div`
    display: flex;
    flex-flow: column;
    height: 80vh;
    width: 100%;
    max-width: 600px;
    margin: auto;
`;

const PlayWrapper = styled.div`
    flex-basis: 350px; 
    flex-shrink: 1;
    flex-grow: 1;
    max-height: 55vh;
`;

const Playlist = ({ theme }) => {
    return (
        <div>
            <Link to="/"><Title /></Link>
            <PlaylistWrapper> 
                <PlayWrapper>
                    <iframe 
                        title="Spotify Play"
                        src="https://open.spotify.com/embed/playlist/4OMXrQM1Q43EuFhENRcswP" 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        allowtransparency="true" 
                        allow="encrypted-media"></iframe>
                </PlayWrapper>
            </PlaylistWrapper>
        </div>
    );
}

Playlist.propTypes = {
    theme: string.isRequired,
}

export default Playlist;