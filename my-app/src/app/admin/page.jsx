import React from 'react';
import Link from 'next/link';

import '../sass/style.scss';

import ProductTable from '../../components/ProductTable';
import { PageSelect } from '../../components/PageSelect';

const getDataProduct = async (params) => {
    const response = await fetch(
        `http://localhost:3000/api/v1/products/${params ? '?' + params : ''}`,
        {
            cache: 'no-store',
        },
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
};
async function Page(props) {
    const params = props.searchParams;
    const products = await getDataProduct(new URLSearchParams(params).toString());
    const shapes = await getDataProduct();
    return (
        <div className='container'>
            <div className='inline'>
                <h3>Админ панель</h3>
                <Link
                    className='link'
                    href={'/admin/addProduct/'}>
                    Добавить продукт
                </Link>
            </div>
            <ProductTable products={products.data} />
            <PageSelect products={products} />
        </div>
    );
}

export default Page;
