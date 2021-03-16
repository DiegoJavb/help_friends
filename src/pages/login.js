import React from 'react';
import {Button, Grid, InputAdornment, TextField} from '@material-ui/core'
import {AccountCircle, LockRounded} from '@material-ui/icons'
import Link from 'next/link'

import {useAuth} from "../lib/auth";
import {Article} from "../lib/articles";
import withoutAuth from "@/hocs/withoutAuth";

const Login = () => {


    const {login, user} = useAuth();
    const handleLogin = async (data) => {
        try {
            const userData = await login({
                email: 'admin@prueba.com',
                password: '123123'
            })

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        }

    };

    const handleViewComments = async () => {
        try {
            const articleData = await Article.getById('1');
            console.log('articleData', articleData)
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        }

    };


    return (
        <div>
            <Grid container style={{minHeight: '100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img
                        src='https://picsum.photos/300/350'
                        style={{
                            width: '100%', height: '100%', objectFit: 'cover',
                            alt: 'brand'
                        }}
                    />
                </Grid>
                <Grid container item xs={12} sm={6}
                      alignItems='center'
                      direction='column'
                      justify='space-between'
                      style={{padding: 10}}
                >
                    <div/>
                    <div style={{display: 'flex', flexDirection: 'column', maxWidth: 300, minWidth: 400}}>
                        {/* <Grid container justify='center'>
                            <img
                                src='https://logos-world.net/wp-content/uploads/2021/02/Zoom-Logo.png'
                                width={200}
                                alt='logo'
                            />
                        </Grid> */}
                        <TextField
                            label='Usuario'
                            margin='normal'
                        />
                        <TextField
                            label='Contraseña'
                            margin='normal'
                        />
                        <div style={{height: 30}}/>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Button onClick={handleLogin} color='primary' variant='contained'>Iniciar Sesion</Button>
                            <Button color='primary' variant='contained'><Link href='/'>Cancelar</Link></Button>
                        </div>
                        <p style={{marginTop: 30, marginBottom: 30}}>No tienes cuenta registrate</p>

                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Button color='primary' variant='contained'>Registro</Button>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Button onClick={handleViewComments} color='primary' variant='contained'>ver
                                articulo</Button>
                        </div>

                    </div>
                    <div/>
                </Grid>
            </Grid>

        </div>
    );
};

export default withoutAuth(Login);