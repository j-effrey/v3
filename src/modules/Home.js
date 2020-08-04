import React from "react";
import styled from "styled-components";
import { func, string } from 'prop-types';
import { Link } from 'react-router-dom';
import Heady from '../components/Heady';
import Socials from './Socials';

const Links = styled.div`
    margin-bottom: 60px;
`;

const Home = ({ theme, toggleTheme }) => {
    return (
        <div>
            <Heady theme={theme} toggleTheme={toggleTheme} />
            <Links>
                <Link to="/about" className="pageLink">About</Link>
                <Link to="/work" className="pageLink">Work</Link>
                <Link to="/games" className="pageLink">Games</Link>
                <Link to="/playlist" className="pageLink">Songs</Link>
            </Links>

            <Socials />
        </div>
    );
};

Home.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
};

export default Home;
