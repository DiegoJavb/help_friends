import React from 'react';

const Category = () => {

    return (
        <div>
            hola dieguito
        </div>
    );
};

export default Category;

export async function getStaticProps(context) {
    console.log('context', context);
    const res = await fetch(`http://localhost:8000/api/categories`)
    const data = await res.json();

    if(!data){
        return{
            notFount:true,
        }
    }

    return{
        props:{}, // will be passed to the component as props
    }

}

export async function getStaticPaths(context) {
    return {
        paths: [
            { params: { id:'1' } }, // See the "paths" section below
            { params: { id:'2' } },
            { params: { id:'3' } } 
        ],
        fallback: false // See the "fallback" section below
    };
}