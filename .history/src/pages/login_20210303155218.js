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
                        alt:'brand'}}>
                    </img>    
                </Grid>
                <Grid>item</Grid>
            </Grid>

        </div>
    );
};

export default Login