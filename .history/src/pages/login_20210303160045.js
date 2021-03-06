import React from 'react';
import {Grid} from '@material-ui/core'

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
                <Grid container item xs={12} sm={6} style={{padding:10}}>
                    <div/>
                    <div>
                        <Grid contaner justify='center'>
                            <img 
                                src='https://logos-world.net/wp-content/uploads/2021/02/Zoom-Logo.png' width={200} alt='logo'/>
                                
                        </Grid>
                    </div>
                </Grid>
            </Grid>

        </div>
    );
};

export default Login