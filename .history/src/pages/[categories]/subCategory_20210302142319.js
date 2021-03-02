import React from 'react';
import {useRouter} from 'next/router'

const subCategory = () => {
    const router = useRouter();
    const {categories} = router.route
    return (
        <div>
            {categories}
        </div>
    );
};

export default subCategory;
export async function getStaticProps(context) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subcategories}`)
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
            { params: { id:'1'} } // See the "paths" section below
        ],
        fallback: false // See the "fallback" section below
    };
}