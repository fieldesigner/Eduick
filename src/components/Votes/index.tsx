import React, { useState } from 'react';

import { Container } from './styles';
interface VoteProps {
    ratio: number
}

const Votes: React.FC<VoteProps> = ({ratio}) => {

    const [stars] = useState([1,2,3,4,5]);

    return (
        <Container>
            {stars.map((e: number, i:number) => 
                e <= ratio ? 
                    <span key={`star`+i} className="material-icons-outlined ye">star</span>
                    :
                    <span key={`star`+i} className="material-icons-outlined">star</span>
            )}
        </Container>
    );
}

export default Votes;