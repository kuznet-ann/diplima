'use client';

import React from 'react';

import tag from '../../../public/assets/img/11345.png';

import style from './ProductCard.module.scss';
import Image from 'next/image';

function ProductCard({ info }) {
    return (
        <div className='wrapper'>
            <div className={style.images}>
                <Image
                    src={tag.src}
                    blurDataURL={tag.blurDataURL}
                    width={tag.width}
                    height={tag.height}
                    alt='Picture of the author'
                    placeholder='blur'
                />
                <div className=''></div>
                <div className=''></div>
                <div className=''></div>
            </div>
            <div>
                <h2 className={style.title}>{info.data.attributes.name}</h2>
                <p className={style.mg40}>Количество товара: {info.data.attributes.quantity}</p>
                <p className={style.mg40}>{info.data.attributes.price}₽</p>
                <button className={`btn ${style.mg40}`}>Купить</button>
                <h5 className={style.subtitle}>Описание</h5>
                <p>{info.data.attributes.description}</p>
            </div>
        </div>
    );
}

export default ProductCard;
