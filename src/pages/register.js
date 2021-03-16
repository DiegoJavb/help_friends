import React from 'react';
import {Button, Grid, InputAdornment, TextField} from '@material-ui/core'
import {AccountCircle, LockRounded} from '@material-ui/icons'
import Link from 'next/link'
import withoutAuth from "@/hocs/withoutAuth";
import {useAuth} from "@/lib/auth";
import {useForm} from "react-hook-form";

const Register = () => {
    const {register: doRegister} = useAuth();
    const {register, handleSubmit} = useForm()

    const onSubmit = async (data) => {
        console.log('data', data)
        try {
            const userData = await doRegister(data)
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
    }
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
                    <div style={{display: 'flex', flexDirection: 'column', maxWidth: 200, minWidth: 400}}>
                        {/* <Grid container justify='center'>
                            <img 
                                src='https://logos-world.net/wp-content/uploads/2021/02/Zoom-Logo.png' 
                                width={200} 
                                alt='logo'
                            />    
                        </Grid> */}

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input type='file' name='image' id='image' ref={register}/>
                            </div>
                            <div/>
                            <div>
                                <input placeholder='Nombre' type='name' name='name' id='name' ref={register}/>
                                <input placeholder='Apellido' type='lastname' name='lastname' id='lastname'
                                       ref={register}/>
                            </div>
                            <div>
                                <input placeholder='Telefono' type='phone' name='phone' id='phone' ref={register}/>
                            </div>
                            <div>
                                <input placeholder='Provincia' type='name' name='province' id='province'
                                       ref={register}/>
                                <input placeholder='Canton' type='name' name='canton' id='canton' ref={register}/>
                            </div>
                            <div>
                                <input placeholder='Sector' type='name' name='sector' id='sector' ref={register}/>
                            </div>
                            <div>
                                <input placeholder='Email' type='email' name='email' id='email' ref={register}/>
                            </div>
                            <div>
                                <input placeholder='Contraseña' type='password' name='password' id='password'
                                       ref={register}/>
                            </div>
                            <div>
                                <input placeholder='Confirmar contraseña' type='password' name='password_confirmation'
                                       id='password_confirmation'
                                       ref={register}/>
                            </div>
                            <div>
                                <Button>Submit</Button>
                            </div>
                        </form>


                        {/*<div style={{display: 'flex', minWidth: 200, justifyContent: 'space-between'}}>*/}
                        {/*    <TextField*/}
                        {/*        label='Nombre'*/}
                        {/*        margin='normal'*/}
                        {/*    />*/}
                        {/*    <TextField*/}
                        {/*        label='Apellido '*/}
                        {/*        margin='normal'*/}
                        {/*    />*/}
                        {/*</div>*/}

                        {/*<TextField*/}
                        {/*    label='Nombre de usuario'*/}
                        {/*    margin='normal'*/}
                        {/*/>*/}
                        {/*<TextField*/}
                        {/*    label='Correo electrónico'*/}
                        {/*    margin='normal'*/}
                        {/*/>*/}
                        {/*<TextField*/}
                        {/*    label='Contraseña'*/}
                        {/*    margin='normal'*/}
                        {/*/>*/}
                        {/*<TextField*/}
                        {/*    label='Confirmar contraseña'*/}
                        {/*    margin='normal'*/}
                        {/*/>*/}
                        {/*<div style={{display: 'flex', minWidth: 200, justifyContent: 'space-between'}}>*/}
                        {/*    <TextField*/}
                        {/*        label='Ciudad'*/}
                        {/*        margin='normal'*/}
                        {/*    />*/}
                        {/*    <TextField*/}
                        {/*        label='Telefono'*/}
                        {/*        margin='normal'*/}
                        {/*    />*/}
                        {/*</div>*/}

                        {/*<div style={{height: 30}}/>*/}
                        {/*<div style={{display: 'flex', justifyContent: 'space-between'}}>*/}
                        {/*    <Button color='primary' variant='contained'>Guardar</Button>*/}
                        {/*    <Button color='primary' variant='contained'><Link href='/'>Cancelar</Link></Button>*/}
                        {/*</div>*/}

                    </div>
                    <div/>
                </Grid>
            </Grid>

        </div>
    );
};

export default withoutAuth(Register);