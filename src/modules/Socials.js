import React from "react";
import styled from "styled-components";
import DarkPdf from '../images/Resume_Dark_2023.pdf';
import LightPdf from '../images/Resume_Light_2023.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitch, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

import { breakpoints } from "../components/Breakpoints";

const IconWrapper = styled.div`

    margin: 0 12px;
    display: inline;

    @media (min-width: ${breakpoints.tabletMin}) {
        margin: 0 1vw;
    }
`;

const Socials = ({ theme }) => {
    return (
        <div>
            <a
                title='Resumé'
                href={theme === 'light' ? LightPdf : DarkPdf}
                target='_blank'
                rel='noopener noreferrer'
            >
                <IconWrapper><FontAwesomeIcon icon={faFilePdf} size="lg" class="social" id="resume" /></IconWrapper>
            </a>
            <a 
                title='Twitch - @bestjeff_'
                href="https://www.twitch.tv/bestjeff_" 
                target="_blank"
                rel='noopener noreferrer'
            >
                <IconWrapper><FontAwesomeIcon icon={faTwitch} size="lg" class="social" id="twitch" /></IconWrapper>
            </a>
            <a
                title='LinkedIn - @wongjeffrey'
                target='_blank'
                rel="noopener noreferrer"
                href='https://linkedin.com/in/wongjeffrey'
            >
                <IconWrapper><FontAwesomeIcon icon={faLinkedin} size='lg' class="social" id="linkedin" /></IconWrapper>
            </a>
            <a
                title='Instagram - @j.effreyw'
                target='_blank'
                rel="noopener noreferrer"
                href='https://www.instagram.com/j.effreyw/'
            >
                <IconWrapper><FontAwesomeIcon icon={faInstagram} size='lg' class="social" id="instagram" /></IconWrapper>
            </a>
        </div>
    );
}

Socials.propTypes = {
    theme: String.isRequired,
}

export default Socials;