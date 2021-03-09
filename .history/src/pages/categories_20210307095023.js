import Link from 'next/link'
import React, { useEffect } from 'react';

const Category = ({categories}) => {

    useEffect( () => {
        const getData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subarticles`);
            const data = await response.json();
            console.log('subcategorias', data);
        };
        getData();
    },[]);

    console.log('categorias', categories );
    if(!categories){
        return 'No se pudo obtener una categoría'
    }
    return (
        <div>
            <ul>
            {
                categories.map((category)=>{
                    return (
                        <li key={category.id}>
                            <Link href='/categories/subCategories'>{category.name}</Link>
                        </li>
                    )
                })
            }
            </ul>
            
        </div>
    );
};

export default Category;

export async function getStaticProps() {
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
            categories:data
        }, // will be passed to the component as props
    }

}
