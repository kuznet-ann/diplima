import React from 'react';

import '../sass/style.scss';

import ProductCart from '../../components/ProductCart/';
import PaymentBlock from '../../components/PaymentBlock/';

const getData = async () => {
    const response = await fetch(`http://localhost:8000/api/v1/order_product`, {
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
};

const data = await getData();

async function Page() {
    return (
        <>
            <div className='container'>
                <h2>Корзина</h2>
                <div className='wrapper'>
                    <div>
                        <ProductCart info={data.data} />
                    </div>
                    <PaymentBlock />
                </div>
            </div>
        </>
    );
}

export default Page;
