import React from 'react';
import {useRouter} from 'next/router'

const subCategory = () => {
    const router = useRouter();
    const {categories} = router.route
    return (
        <div>
            hola
        </div>
    );
};

export default subCategory;
export async function getStaticProps(context) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subcategories`)
    const data = await res.json();
    console.log('subcategorias', data);
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
            { params: { id:'1'} }, // See the "paths" section below
            { params: { id:'1'} },
            { params: { id:'1'} },
            { params: { id:'1'} },
            { params: { id:'1'} }
            
        ],
        fallback: false // See the "fallback" section below
    };
}