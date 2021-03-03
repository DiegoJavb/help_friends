import { Button} from '@material-ui/core';
import Link from 'next/link'
import React from 'react';

const Category = ({categories}) => {
    console.log('categorias', categories );
    if(!categories){
        return 'No se pudo obtener una categoría'
    }
    return (
        <div>
            {
                categories.map((category)=>{
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
    console.log('context categoria', context);
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

// export async function getStaticPaths() {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`)
//     const data = await res.json();
//     console.log('data', data);

//     const categories = data
//     const paths = categories.map((category)=>{
//         return {params:{categoryId:category.id}}
//     });
    
//     return {
//         paths,
//         fallback: false // See the "fallback" section below
//     };
// }