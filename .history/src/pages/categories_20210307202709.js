import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Categories = ({categories}) => {
    console.log('categorias', categories);
    const classes = useStyles();

    return (
         <div style={{display:'flex', justifyContent:'space-between'}}>
            <Grid containes className={classes.root} spacing={4}>
                <Grid item xs={20}>
                    <Grid container justify="center">    
                        {
                            categories.map((category)=>{
                                return (
                                <div key={category.id} style={{maxWidth:350, maxHeight:400}}>
                                    <Grid item>
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="300"
                                                    src="https://bit.ly/fcc-relaxing-cat"
                                                    title="Contemplative Reptile"
                                                    />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">{category.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                      across all continents except Antarctica
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size='small' color='primary'>
                                                        <Link>Obtener</Link>
                                                    </Button>
                                                </CardActions>

                                            </CardActionArea>
                                         </Card>
                                    </Grid>
                                </div>
                                )
                            })
                        }
                    </Grid>
                </Grid>
          </Grid>
          
      </div>
    
  );
}
export default Categories;

export async function getStaticProps(context) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`)
    const data = await res.json();

    if(!data){
        return{
            notFount:true,
        }
    }

    return{
        props:{
            categories:data
        }, // will be passed to the component as props
    }

}

