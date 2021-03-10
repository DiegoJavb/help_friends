import Link from 'next/link'
import React from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Grid
} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        marginBottom: 40,
    },
    media: {
        height: 350
    },
    title: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": 1,
        "-webkit-box-orient": "vertical",
    },
    body: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": 3,
        "-webkit-box-orient": "vertical",
    },
});


const Category = ({categories}) => {
    console.log('categorias', categories)
    const classes = useStyles();
    if (!categories) {
        return 'No se pudo obtener una categoría'
    }

    return (
        <Grid container direction='row' justify='space-evenly'>
            {
                categories.map((category) => (
                        <Card className={classes.root} key={category.id}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    component="img"
                                    src={`https://picsum.photos/300/350?sig=${category.id}`}
                                    title={classes.title}
                                />
                                <CardContent>
                                    <div style={{textAlign: 'center'}}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            className={classes.title}
                                        >
                                            <Link href={`/categories/${category.id}`}>{category.name}</Link>
                                        </Typography>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                )
            }
        </Grid>

    )
};

export default Category;

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`)
    const data = await res.json();
    console.log('categorias', data);
    if (!data) {
        return {
            notFount: true,
        }
    }
    return {
        props: {
            categories: data
        }, // will be passed to the component as props
    }

}
