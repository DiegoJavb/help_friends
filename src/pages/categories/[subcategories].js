import React from 'react';
import Link from "next/link";

const Articles = ({subcategory}) => {
    console.log('subcategorias', subcategory)
    return (
        <div>
            <ul>
                {
                    subcategory.map(subcategory => {
                        return (
                            <li key={subcategory.id}>
                                <Link href={`/subcategories/${subcategory.id}`}>{subcategory.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Articles;


export async function getStaticProps(context) {

    const categoryId = parseInt(context.params.subcategories)
    console.log('id de la categoria', categoryId)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subcategories`)
    const data = await response.json()
    // console.log('data', data.data)
    if (!data) {
        return {
            notFound: true,
        }
    }

    const exact = data.data.filter(subcategory => subcategory.category_id === categoryId)

    return {
        props: {
            subcategory: exact
        }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subcategories`)
    const data = await response.json()
    const paths = data.data.map(subcategory => {
        return {params: {subcategories: '' + subcategory.categories_id}}
    })

    return {
        paths,
        fallback: true // See the "fallback" section below
    };
}