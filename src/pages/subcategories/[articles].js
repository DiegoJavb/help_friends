import React from 'react'
import {useRouter} from "next/router";

const Articles = ({articles}) => {

    return (
        <>
            <ul>
                {
                    articles.map(article=>{
                        return (
                            <li key={article.id}>{article.name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
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
            articles:exact
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