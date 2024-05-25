import React from 'react';

import ProductInfo from '../../../components/ProductInfo/';

import '../../sass/style.scss';

const getData = async (slug) => {
    const response = await fetch(`http://localhost:3000/api/v1/products/${slug}`, {
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
};

async function Page({ params }) {
    const productData = await getData(params.slug);
    return (
        <>
            <div className='container'>
                <ProductInfo info={productData.data} />
            </div>
        </>
    );
}

export default Page;
