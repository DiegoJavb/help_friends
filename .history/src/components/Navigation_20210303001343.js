import { FormControlLabel } from "@material-ui/core";
import Link from 'next/link'
import React from 'react';

const Navigation = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/categories'>Artículos</Link>
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