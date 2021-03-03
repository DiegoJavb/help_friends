import { Button } from '@material-ui/core';
import Link from 'next/link'
import React from 'react';
import {useRouter} from 'next/router'

const subCategory = ({subCategories}) => {
    console.log('subcatecorias', subCategories);

    if(!subCategories){
        return 'No se pudo obtener una subcategoría'
    }

    return (
        <div>
            {
                subCategories.map(subCategory=>{
                    return (
                        <ul>
                            <li key={subCategory.id}>
                                {subCategory.name}<Button><Link href='/categories/subCategories/articles'>Ver más</Link></Button>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    );
};

export default subCategory;

export async function getStaticProps(context) {
    console.log('context', context );
    
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subcategories`)
        const data = await res.json();
        console.log('subcategorias', data);

        if(!data){
            return{
                notFount:true,
            }
        }
    
        return{
            props:{
                subCategories:data
            }, // will be passed to the component as props
        }
    } catch (error) {
        return{
            notFount:true,
        }
    }
    

    

}
export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subcategories`)
    const data = await res.json();
    console.log('data', data);

    const subcategories = data;
    const paths = subcategories.map(subcategory=>{
        return {params:{subcategoryId:''+subcategory.id}}
    })

    return {
        paths,
        fallback: false // See the "fallback" section below
    };
}