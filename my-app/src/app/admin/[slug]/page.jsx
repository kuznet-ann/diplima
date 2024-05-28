import React from 'react';

import '../../sass/style.scss';

import ItemInfo from '../../../components/ItemInfo';

const getDataProduct = async (id) => {
    const response = await fetch(`http://localhost:3000/api/v1/products/${id}`, {
        headers: {
            'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json',
            // 'API-Key': process.env.DATA_API_KEY,
        },
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
};

export default async function Page({ params }) {
    const products = await getDataProduct(params.slug);

    return (
        <div className='container'>
            <ItemInfo
                items={products.data}
                id={params.slug}
            />
        </div>
    );
}
