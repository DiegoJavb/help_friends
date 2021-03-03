import { FormControlLabel, Link } from "@material-ui/core";

import React from 'react';

const Navigation = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/categories'>Categorias</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/login'>Inicio sesion</Link>
                </li>
                <li>
                    <Link href='/register'>Registro</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;