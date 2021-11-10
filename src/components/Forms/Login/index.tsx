import React, {useState} from 'react';
import { Link } from "react-router-dom"; 


import { Titulo } from '../../Modal/styles';
import { IconPass, Container } from './styles';

const Login: React.FC = () => {

    const [sibiblePass, setVisiblePass] = useState(false);
    return (
    <Container>
        <Titulo>Get Started <span>Just Login</span></Titulo>

        <form action="">
            <fieldset>Username:</fieldset>
            <input type="text" maxLength={30} />

            <fieldset>Password:</fieldset>
            <input type={sibiblePass ? "text" : "password"} maxLength={10} />
            <IconPass onClick={() => setVisiblePass(!sibiblePass)}><span className="material-icons-outlined">{sibiblePass ? "visibility_off" : "visibility"}</span></IconPass>

            <div className="posbotao">
            <Link to="/dashboard" className="botao">Login</Link>
            </div>
        </form>
    </Container>
    );
}

export default Login;