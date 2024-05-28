import React from 'react';

import '../../sass/style.scss';

import ItemInfo from '../../../components/ItemInfo';

async function Page(props) {
    return (
        <div className='container'>
            <h3>Добавить товар</h3>
            <ItemInfo />
        </div>
    );
}

export default Page;
