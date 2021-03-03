import React from 'react';
import {Button, Grid, TextField} from '@material-ui/core'

const Login = () => {
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
                    <div style={{display:'flex', flexDirection:'column', maxWidth:300, minWidth:400}}>
                        <Grid container justify='center'>
                            <img 
                                src='https://logos-world.net/wp-content/uploads/2021/02/Zoom-Logo.png' 
                                width={200} 
                                alt='logo'
                            />    
                        </Grid>
                        <TextField label='Usuario' margin='normal'/>
                        <TextField label='Contraseña' margin='normal'/>
                        <div style={{height:30}}/>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Button color='primary' variant='contained'>Iniciar Sesion</Button>
                            <Button color='primary' variant='contained'>Cancelar</Button>
                        </div>
                        <p style={{marginTop:30, marginBottom:30}}>No tienes cuenta registrate</p>

                        <div style={{display:'flex', justifyContent:'center'}}>
                            <Button color='primary' variant='contained'>Registro</Button>     
                        </div>
                        
                    </div>
                    <div/>
                </Grid>
            </Grid>

        </div>
    );
};

export default Login