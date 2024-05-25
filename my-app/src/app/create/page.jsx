import React from 'react';

import '../sass/style.scss';

import CreateForm from '../../components/CreateForm/';

export async function getDataShape(request) {
    const response = await fetch(`http://localhost:8000/api/v1/shapes`, {
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
}

export async function getDataMaterial(request) {
    const response = await fetch(`http://localhost:8000/api/v1/materials`, {
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
}

const postData = async (data) => {
    const response = await fetch(`http://localhost:3000/api/v1/products/`, {
        method: 'POST',
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
};

const shapes = await getDataShape();
const materials = await getDataMaterial();

async function Page(props) {
    return (
        <div className='container wrapper'>
            <div className='test'></div>
            <CreateForm
                shapes={shapes}
                materials={materials}
            />
        </div>
    );
}

export default Page;
