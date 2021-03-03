import { Button} from '@material-ui/core';
import Link from 'next/link'
import React from 'react';

const Category = ({category}) => {
    console.log('categorias', category );
    if(!category){
        return 'No se pudo obtener una categoría'
    }
    return (
        <div>
            {
                category.map((category)=>{
                    return (
                        <ul>
                            <li key={category.id}>
                                {category.name}<Button><Link href='/categories/subCategory'>Ver más</Link></Button>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    );
};

export default Category;

export async function getStaticProps(context) {
    console.log('context', context);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`)
    const data = await res.json();
    console.log('data',data);
    if(!data){
        return{
            notFount:true,
        }
    }

    return{
        props:{
            category:data
        }, // will be passed to the component as props
    }

}

export async function getStaticPaths(context) {
    return {
        paths: [
            { params: { categoryId:'1' } }, // See the "paths" section below
            { params: { categoryId:'2' } },
            { params: { categoryId:'3' } } 
        ],
        fallback: false // See the "fallback" section below
    };
}