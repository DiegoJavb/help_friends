import Link from 'next/link'
import React from 'react';

const subCategory = ({subCategories}) => {
    console.log('subcatecorias', subCategories);

    if(!subCategories){
        return 'No se pudo obtener una subcategoría'
    }

    return (
        <div>
            <ul>
            {
                subCategories.map(subCategory=>{
                    return (
                        <li key={subCategory.id+''}>
                            <Link href='/categories/subCategories/articles'>{subCategory.name}</Link>
                        </li> 
                    )
                })
            }
            </ul>
            
        </div>
    );
};

export default subCategory;

export async function getStaticProps() {
    
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