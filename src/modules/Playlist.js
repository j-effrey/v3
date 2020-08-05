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
    flex-basis: 400px; 
    flex-grow: 1;
    flex-shrink: 1;
`;

const FollowWrapper = styled.div`
    justify-content: flex-end;
`;

const Playlist = ({ theme }) => {
    return (
        <PlaylistWrapper>
                <Link to="/"><Title /></Link> 
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
            <FollowWrapper>
                <iframe 
                    title="Spotify Follow"
                    src={`https://open.spotify.com/follow/1/?uri=spotify:user:12184294903&size=detail&theme=${theme}`}
                    width="201px" 
                    height="56px" 
                    scrolling="no" 
                    frameBorder="0" 
                    style={{border: 'none', overflow: 'hidden', marginTop: '50px', marginBottom: '50px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
                    allowtransparency="true"
                ></iframe>
            </FollowWrapper>
        </PlaylistWrapper>
    );
}

Playlist.propTypes = {
    theme: string.isRequired,
}

export default Playlist;