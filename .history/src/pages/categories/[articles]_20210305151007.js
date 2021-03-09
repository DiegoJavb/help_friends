import React from 'react';
import {useRouter} from 'next/router'

const Articles = ({articlesId}) => {
    console.log('articulos', articles);
    const router = useRouter();
    const {articles} = router.query

    return (
        <div>
            articulos {articles}
        </div>
    );
};

export default Articles;

export async function getStaticProps(context) {
    console.log('context', context);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`)
    const data = await res.json();
    if(!data){
        return{
            notFount:true,
        }
    }

    return{
        props:{
            articlesId:data
        }, // will be passed to the component as props
    }

}
export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`)
    const data = await res.json();
    const articles = data.data
    const paths = articles.map((article)=>{
        return {params:{id:article.id}}
    });
    return {
        paths,
        fallback: false // See the "fallback" section below
    };
}