import React from 'react';

const Articles = ({articles}) => {
    console.log('articulos',  articles);
    return (
        <div>
        </div>
    );
};

export default Articles;
export async function getStaticProps(context) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`)
    const data = await res.json();
    console.log('articles', data);
    if(!data){
        return{
            notFount:true,
        }
    }

    return{
        props:{
            articles:data
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