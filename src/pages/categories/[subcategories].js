import React from 'react';
import {useRouter} from 'next/router'

const Subcategories = ({subcategory}) => {
    console.log('subcategory', subcategory)
    return (
        <div>
            <ul>
                {
                    subcategory.map(subcategory=>{
                        return <li key={subcategory.id}>{subcategory.name}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Subcategories;


export async function getStaticProps(context) {

    const categoryId = parseInt(context.params.subcategories)
    console.log('id de la categoria', typeof categoryId)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subcategories`)
    const data = await response.json()
    console.log('subcategorias', data)
    if (!data) {
        return {
            notFound: true,
        }
    }

    const exact = data.filter(subcategory => subcategory.categories_id === categoryId)

    console.log('exact', exact)

    return {
        props: {
            subcategory: exact
        }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subcategories`)
    const data = await response.json()

    const paths = data.map(subcategory => {
        return {params: {subcategories: '' + subcategory.categories_id}}
    })

    return {
        paths,
        fallback: true // See the "fallback" section below
    };
}