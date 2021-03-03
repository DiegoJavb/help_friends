import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';

const About = () => {
    return (
        <Button variant="contained" color="secondary">
            <Link href='/'>Hola Mundo!</Link>
        </Button>
    );
};

export default About;