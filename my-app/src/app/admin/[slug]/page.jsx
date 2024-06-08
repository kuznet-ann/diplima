import React from 'react';

import '../../sass/style.scss';

import ItemInfo from '../../../components/ItemInfo';
import AddImage from '../../../components/AddImage';

const getDataProduct = async (id) => {
    const response = await fetch(`http://localhost:3000/api/v1/products/${id}`, {
        headers: {
            'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json',
            // 'API-Key': process.env.DATA_API_KEY,
        },
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
};

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

const getDataImages = async (slug) => {
    const response = await fetch(`http://localhost:3000/api/v1/products/${slug}`, {
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
};

const shapes = await getDataShapes();
const materials = await getDataMaterials();

export default async function Page({ params }) {
    const images = await getDataImages(params.slug);
    const products = await getDataProduct(params.slug);

    return (
        <div className='container'>
            <div className='wrapper-flex'>
                <ItemInfo
                    items={products.data}
                    id={params.slug}
                    shapes={shapes.data}
                    materials={materials.data}
                />
                <AddImage
                    id={params.slug}
                    images={images.data.attributes.image}
                />
            </div>
        </div>
    );
}
