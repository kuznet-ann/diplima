import React from 'react';

import '../sass/style.scss';

import ProductTable from '../../components/ProductTable';

const getDataProduct = async (page) => {
    const response = await fetch(`http://localhost:3000/api/v1/products?page=${page}`, {
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
};

async function Page(props) {
    const products = await getDataProduct(props.searchParams.page);

    return (
        <div className='container'>
            <h3>Админ панель</h3>
            <ProductTable products={products.data} />
        </div>
    );
}

export default Page;
