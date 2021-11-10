import React from 'react';

import { Container, Modalbox, Close } from './styles';

interface ModalProps {
    open?: boolean;
    children: React.ReactNode;
    openclose: any;
}

const Modal: React.FC<ModalProps> = ({ open = false, children, openclose }) => {


    return (
        <Container key='modal' show={open}>
            <Modalbox>
                <Close onClick={() => openclose(false)} />
                {children}                
            </Modalbox>
        </Container>
    );
}

export default Modal;