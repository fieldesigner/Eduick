import React from 'react';

import { Container } from './styles';
import imgbanner from '../../assets/imgabanner.png'

const Banner: React.FC = () => {
    return (
        <Container>
            <div className="texto">
                <div className="yelbol"></div>
                <div className="titulobanner">
                    Hello <strong>Student</strong><span>.</span>                    
                </div>
                Whether you are a student trying to find your ideal private language teachers/tutors.
            </div>
            <img src={imgbanner} alt="shape" />
        </Container>
    );
}

export default Banner;