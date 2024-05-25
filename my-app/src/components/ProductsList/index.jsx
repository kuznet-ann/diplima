'use client';

import React from 'react';

import Product from '../Product';

export const ProductList = ({ items }) => {
    return (
        <div className='wrapper'>
            {items.data.map((item) => (
                <Product
                    key={item.id}
                    id={item.id}
                    name={item.attributes.name}
                    price={item.attributes.price}
                    imageUrl={item.attributes.image}
                />
            ))}
        </div>
    );
};
