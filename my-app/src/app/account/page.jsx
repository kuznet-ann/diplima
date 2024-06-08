import React from 'react';
import { cookies } from 'next/headers';

import PersonalData from '../../components/PersonalData/';
import OrderHistory from '../../components/OrderHistory/';
import '../sass/style.scss';

async function Page() {
    const token = cookies().get('sid');
    return (
        <div className='container'>
            <h2>Личный кабинет</h2>
            <div className='wrapper-flex'>
                {/* <PersonalData /> */}
                <OrderHistory token={token.value} />
            </div>
        </div>
    );
}

export default Page;
