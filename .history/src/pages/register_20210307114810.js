import React from 'react';
import {Button, Grid, InputAdornment, TextField} from '@material-ui/core'
import {AccountCircle, LockRounded} from '@material-ui/icons'
import Link from 'next/link'

const Register = () => {
    return (
        <div>
            <Grid container style={{minHeight:'100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img 
                        src='https://bit.ly/fcc-relaxing-cat' 
                        style={{width:'100%', height:'100%', objectFit:'cover', 
                        alt:'brand'}}
                    />    
                </Grid>

                <Grid container item xs={12} sm={6} 
                    alignItems='center' 
                    direction='column' 
                    justify='space-between'
                    style={{padding:10}}
                    >
                    <div/>
                    <div style={{display:'flex', flexDirection:'row', maxWidth:200, minWidth:400}}>
                        <TextField 
                            label='Nombre' 
                            margin='normal'    
                            />
                        <TextField 
                            label='Apellido ' 
                            margin='normal' 
                            />
                    </div>
                    <div style={{display:'flex', flexDirection:'column', maxWidth:200, minWidth:400}}>
                        {/* <Grid container justify='center'>
                            <img 
                                src='https://logos-world.net/wp-content/uploads/2021/02/Zoom-Logo.png' 
                                width={200} 
                                alt='logo'
                            />    
                        </Grid> */}
                        
                        <TextField 
                            label='Correo Electrónico' 
                            margin='normal'    
                            />
                        <TextField 
                            label='Contraseña' 
                            margin='normal' 
                            />
                        <TextField 
                            label='Confirmar contraseña' 
                            margin='normal'    
                            />
                        <TextField 
                            label='Nombre de usuario' 
                            margin='normal' 
                            />
                        <TextField 
                            label='Ciudad' 
                            margin='normal'    
                            />
                        <TextField 
                            label='Telefono' 
                            margin='normal' 
                            />
                        <div style={{height:30}}/>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Button color='primary' variant='contained'>Guardar</Button>
                            <Button color='primary' variant='contained'><Link href='/'>Cancelar</Link></Button>
                        </div>
                        
                    </div>
                    <div/>
                </Grid>
            </Grid>

        </div>
    );
};

export default Register