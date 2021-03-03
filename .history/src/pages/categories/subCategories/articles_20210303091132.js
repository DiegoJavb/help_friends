import { Button } from '@material-ui/core';
import Link from 'next/link'
import React from 'react';

const Articles = ({articles}) => {
    console.log('articulos',  articles);

    if(!articles){
        return 'No se pudo obtener el artículo'
    }

    return (    
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
    );
};

export default Articles;
export async function getStaticProps() {
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