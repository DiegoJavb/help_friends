import React from 'react';
import {useRouter} from 'next/router'

const Articles = () => {
    const router = useRouter();
    const {subcategories, articles} = router,query
    return (
        <div>
            subcategoria {subcategories}
            articulos {articles}
        </div>
    );
};

export default Articles;