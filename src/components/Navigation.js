import {FormControlLabel} from "@material-ui/core";
import Link from 'next/link'
import React from 'react';
import {useAuth} from "../lib/auth";
import {Button} from "@material-ui/core";

const Navigation = () => {
    const {user, logout} = useAuth()
    console.log('user', user)

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log('error', error)
        }
    }


    return (
        <div>
            {
                user === null ? (
                        'verificando sesion...'
                    )
                    : user === false ? (
                        <Button>
                            <Link href='/login'>Login</Link>
                        </Button>
                    )
                    : (
                        <>
                            <h1>Hola {user.name}!</h1>
                            <Button onClick={handleLogout}>Salir</Button>
                        </>
                    )
            }
            <ul>
                <li>
                    <Link href='/categories'>Artículos</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                {/*<li>*/}
                {/*    <Link href='/login'>Inicio sesion</Link>*/}
                {/*</li>*/}
                <li>
                    <Link href='/register'>Registro</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;