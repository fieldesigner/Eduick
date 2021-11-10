import React from 'react';
import {Container} from './styles';

interface LoadProps{
    loading: boolean;
}

const Load: React.FC<LoadProps> = ({loading}) => {
  return <Container load={loading}><div className="lds-ring"><div></div><div></div><div></div><div></div></div></Container>;
}

export default Load;