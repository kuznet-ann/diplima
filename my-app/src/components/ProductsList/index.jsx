'use client';

import React from 'react';

import Product from '../Product';
import Skeleton from '../Skeleton';

export const ProductList = ({ items }) => {
    return (
        <div className='wrapper'>
            {/* {items ? '1' : '0'} */}
            {/* {isLoading
                ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                : items.data.map((item) => (
                      <Product
                          key={item.id}
                          id={item.id}
                          name={item.attributes.name}
                          price={item.attributes.price}
                          imageUrl={item.attributes.image}
                      />
                  ))} */}
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
