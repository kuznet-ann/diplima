import { Suspense } from 'react';

import Categories from '../../components/Categories';
import { ProductList } from '../../components/ProductsList';
import { PageSelect } from '../../components/PageSelect';

import '../sass/style.scss';

const postDataProduct = async (data) => {
    const response = await fetch(`http://localhost:3000/api/v1/products`, {
        method: 'POST',
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
};

const getDataProduct = async (params) => {
    const response = await fetch(
        `http://localhost:3000/api/v1/products/${params ? '?' + params : ''}`,
        {
            //передавать параметры, формируя строку
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
            {/* {params} */}
            {/* {JSON.stringify(props.searchParams['filter[shape]'])} */}
            <Categories items={shapes} />
            <ProductList items={products} />
            <PageSelect products={products} />
        </div>
    );
}

export default Page;
