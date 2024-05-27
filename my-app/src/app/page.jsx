import { Suspense } from 'react';

import Categories from '../components/Categories';
import { ProductList } from '../components/ProductsList';
import { PageSelect } from '../components/PageSelect';

import './sass/style.scss';

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

export async function getDataShape(request) {
    const response = await fetch(`http://localhost:8000/api/v1/shapes`, {
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
}

const shapes = await getDataShape();

async function Page(props) {
    const params = props.searchParams;
    const products = await getDataProduct(new URLSearchParams(params).toString());

    return (
        <div className='container'>
            {JSON.stringify(products) ? '1' : '0'}
            {/* {params} */}
            {/* {JSON.stringify(props.searchParams['filter[shape]'])} */}
            <Categories items={shapes} />
            <ProductList items={products} />
            <PageSelect products={products} />
        </div>
    );
}

export default Page;
