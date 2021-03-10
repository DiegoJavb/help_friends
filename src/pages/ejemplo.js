import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    CardContent,
    CardMedia,
    Button,
    Typography,
    CardActions,
    CardActionArea,
    Card,
    Grid
} from '@material-ui/core/';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});


export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="250"
                        width="345"
                        src="https://picsum.photos/200/300"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <div style={{textAlign: 'center'}}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="250"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <div style={{textAlign: 'center'}}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>


        </>
    );
}