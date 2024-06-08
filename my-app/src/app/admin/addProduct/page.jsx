import React from 'react';

import '../../sass/style.scss';

import ItemInfo from '../../../components/ItemInfo';

export async function getDataShapes(request) {
    const response = await fetch(`http://localhost:3000/api/v1/shapes`, {
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
}

export async function getDataMaterials(request) {
    const response = await fetch(`http://localhost:3000/api/v1/materials`, {
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
}

const shapes = await getDataShapes();
const materials = await getDataMaterials();

async function Page(props) {
    return (
        <div className='container'>
            <h3 className='tac'>Добавить товар</h3>
            <ItemInfo
                shapes={shapes.data}
                materials={materials.data}
            />
        </div>
    );
}

export default Page;
