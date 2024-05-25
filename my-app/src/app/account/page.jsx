import React from 'react';

import PersonalData from '../../components/PersonalData/';
import OrderHistory from '../../components/OrderHistory/';
import '../sass/style.scss';

async function Page() {
    return (
        <div className='container'>
            <h2>Личный кабинет</h2>
            <div className='wrapper-flex'>
                <PersonalData />
                <OrderHistory />
            </div>
        </div>
    );
}

export default Page;
