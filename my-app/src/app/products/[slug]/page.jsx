import React from 'react';

import MenuBlock from '../../../components/MenuBlock';
import ProductCard from '../../../components/ProductCard';
import { FooterBlock } from '../../../components/FooterBlock';

import '../../sass/style.scss';

const getData = async (slug) => {
    const response = await fetch(`http://localhost:3000/api/v1/products/${slug}`);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
};

async function Page({ params }) {
    const productInfo = await getData(params.slug);
    return (
        <>
            <div className='container'>
                <ProductCard info={productInfo} />
            </div>
        </>
    );
}

export default Page;
