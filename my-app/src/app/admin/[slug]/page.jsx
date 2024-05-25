import React from 'react';

import '../../sass/style.scss';

import ItemInfo from '../../../components/ItemInfo';

const getDataProduct = async (id) => {
    const response = await fetch(`http://localhost:3000/api/v1/products/${id}`, {
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
};

const postData = async (data) => {
    const response = await fetch(`http://localhost:3000/api/v1/products/`, {
        method: 'POST',
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
};

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    await postData(data);
};

export default async function Page({ params }) {
    const products = await getDataProduct(params.slug);

    return (
        <div className='container'>
            <ItemInfo items={products.data} />
        </div>
    );
}
