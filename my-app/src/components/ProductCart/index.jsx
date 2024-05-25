'use client';

import React from 'react';

import Link from 'next/link';

import style from './ProductCart.module.scss';

import Counter from '../Counter/';

import close from '../../../public/assets/icons/close.svg';
import Image from 'next/image';

export default function ProductCart({ info }) {
    return info.map((data) => (
        <div className={style.card}>
            <Link href={`/products/${data.attributes.product.id}`}>
                {data.attributes.product.attributes.image.slice(0, 1).map((el) => (
                    <img
                        className={style.image}
                        src={`http://127.0.0.1:8000/storage/${el.path}`}
                        alt=''
                    />
                ))}
            </Link>
            <div>
                <Link href={`/products/${data.attributes.product.id}`}>
                    <h4>{data.attributes.product.attributes.name}</h4>
                </Link>
                <div className={style.date}>Доставим: 21 января</div>
                <Counter />
            </div>
            <h4 className={style.title}>{data.attributes.product.attributes.price}₽</h4>

            <div className={style.close}>
                <Image
                    src={close.src}
                    blurDataURL={close.blurDataURL}
                    width={25}
                    height={25}
                    alt='Кнопка удалить'
                />
            </div>
        </div>
    ));
}
