import React from 'react';

import '../sass/style.scss';

import ProductCart from '../../components/ProductCart/';
import PaymentBlock from '../../components/PaymentBlock/';
import { cookies } from 'next/headers';

const getData = async () => {
    const token = cookies().get('sid');
    const response = await fetch(`http://localhost:3000/api/v1/cart`, {
        cache: 'no-store',
        headers: {
            Accept: 'application/vnd.api+json',
            Authorization: `Bearer ${token.value}`,
        },
    });
    if (!response.ok && response.status != 401) {
        throw new Error(response.status);
    }

    if (response.status === 401) {
        return {};
    }

    return await response.json();
};

const data = await getData();

async function Page() {
    return (
        <>
            <div className='container'>
                {Object.keys(data).length != 0 ? (
                    <>
                        <h2>Корзина</h2>
                        <div className='wrapper'>
                            <div>
                                <ProductCart info={data.data} />
                            </div>
                            <PaymentBlock />
                        </div>
                    </>
                ) : (
                    'Вам необходимо авторизоваться!'
                )}
            </div>
        </>
    );
}

export default Page;
