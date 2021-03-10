import React from 'react';
import { useRouter } from 'next/router'

const Articles = () => {
    const router = useRouter();
    const {articles, articles}= router.query
    return (
        <div>
        </div>
    );
};

export default Articles;

export async function getStaticProps(context) {
    const res = await fetch(``)
    const data = await res.json();

    if(!data){
        return{
            notFount:true,
        }
    }

    return{
        props:{}, // will be passed to the component as props
    }

};

export async function getStaticPaths(context) {
    return {
        paths: [
            { params: { id:1 } } // See the "paths" section below
        ],
        fallback: false // See the "fallback" section below
    };
}