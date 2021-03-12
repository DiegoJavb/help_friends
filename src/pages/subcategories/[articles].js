import React, {useState, useEffect} from 'react'
import Link from "next/link";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Grid
} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";
import useSWR from "swr";

const useStyles = makeStyles({
    root: {
        maxWidth: 250,
        marginBottom: 40,

    },
    media: {
        height: 200
    },
    center:{
        justifyContent:'center'
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
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
    },
});

const Articles = ({articles}) => {
    console.log('articles', articles)
    const classes = useStyles();
    const {comments, setComments} = useState([]);
    if (!articles) {
        return 'No se pudo obtener un artículo'
    }

    // useEffect(()=>{
    //     const getData = async ()=>{
    //         const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`);
    //         const data = await response.json();
    //         console.log('data', data)
    //         setComments[data];
    //     }
    //     getData();
    // },[])
    return (
        <Grid container direction='row' justify='space-evenly'>
            {
                articles.map(article => (
                        <Card className={classes.root} key={article.id}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    component="img"
                                    src={`https://picsum.photos/300/350?sig=${article.id}`}
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
                                            {article.name}
                                        </Typography>
                                    </div>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                        className={classes.body}
                                    >
                                        {article.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions className={classes.center}>
                                {/*<Link href={`/articles/${article.id}`}>*/}
                                <Link href={'/'}>
                                    <Button size="small" color="primary">
                                        Obtener
                                    </Button>
                                </Link>
                            </CardActions>


                        </Card>
                    )
                )
            }
        </Grid>
    )
    // return (
    //     <>
    //         <ul>
    //             {
    //                 articles.map(article=>{
    //                     return (
    //                         <li key={article.id}>{article.name}</li>
    //                     )
    //                 })
    //             }
    //         </ul>
    //     </>
    // )
}
export default Articles;

export async function getStaticProps(context) {

    const subcategoryId = parseInt(context.params.articles)
    console.log('id de la categoria', subcategoryId);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`);
    const data = await response.json();

    console.log('data', data);

    if (!data) {
        return {
            notFound: true,
        }
    }
    const exact = data.data.filter(article => article.subCategory_id === subcategoryId)
    console.log('exact', exact)
    return {
        props: {
            articles: exact
        }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`)
    const data = await response.json()

    const paths = data.data.map(article => {
        return {params: {articles: '' + article.subCategory_id}}
    })

    return {
        paths,
        fallback: false // See the "fallback" section below
    };
}