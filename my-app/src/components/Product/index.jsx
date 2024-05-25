'use client';

import React from 'react';

import style from './Product.module.scss';
import Link from 'next/link';

function Product({ id, imageUrl, name, type, price }) {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        await postDataOrder(data);
    };

    return (
        <Link
            href={`/products/${id}`}
            className={style.card}>
            {imageUrl.slice(0, 1).map((img) => (
                <>
                    <img
                        key={img.id}
                        src={`http://127.0.0.1:8000/storage/${img.path}`}
                        alt=''
                        className={style.img}
                    />
                </>
            ))}
            <h3>{name}</h3>
            <div className={style.buy}>
                <p className={style.price}>{price}₽</p>
                <button className={style.btn}>Купить</button>
            </div>
        </Link>
    );
}

export default Product;
