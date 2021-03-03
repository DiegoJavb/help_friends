import { Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import Pagination from '@material-ui/lab/Pagination';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const Articles = ({articles}) => {
    const classes = useStyles();
    console.log('articulos',  articles);
    return (
        <>
        <div className={classes.root}>
      <pagination count={10} />
      <pagination count={10} color="primary" />
      <pagination count={10} color="secondary" />
      <pagination count={10} disabled />
    </div>
        <div>
            {
                articles.map(article=>{
                    return (
                        <ul>
                            <li key={article.id}>
                                {article.name}<Button><Link href='/'>Ver más</Link></Button>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
        </>
    );
};

export default Articles;
export async function getStaticProps(context) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`)
    const data = await res.json();
    console.log('articles', data.data);
    if(!data){
        return{
            notFount:true,
        }
    }

    return{
        props:{
            articles:data.data
        }, // will be passed to the component as props
    }

}
export async function getStaticPaths(context) {
    return {
        paths: [
            { params: { id:'1' } } // See the "paths" section below
        ],
        fallback: true// See the "fallback" section below
    };
}