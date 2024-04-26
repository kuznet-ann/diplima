'use client';

import React from 'react';

import style from './Product.module.scss';
import Link from 'next/link';

function Product({ kkey, id, imageUrl, name, type, price }) {
    const categories = ['Все', 'Акции', 'Наушники', 'Звуковые карты', 'Колонки'];

    return (
        <Link
            href={`/products/${id}`}
            className={style.card}>
            {/* <img
                src={require(`../../assets/img/goods/${imageUrl}`)}
                alt=''
                className={style.img}
            /> */}
            {/* {categories.map((value, i) => (
                <h6
                    key={i}
                    className={style.category}>
                    {i === type ? value : ''}
                </h6>
            ))} */}
            <h3>{name}</h3>
            <div className={style.buy}>
                <p className={style.price}>{price}₽</p>
                <button className={style.btn}>Купить</button>
            </div>
        </Link>
    );
}

export default Product;
