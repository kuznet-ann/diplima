'use client';

import React from 'react';

import style from './ProductInfo.module.scss';

function ProductInfo({ info }) {
    const data = info.attributes;
    const images = data.image;

    const [activeImg, setActiveImg] = React.useState(0);

    const changeImg = (id) => {
        setActiveImg(id);
    };

    return (
        <div className='wrapper'>
            <div className={style.wrapper}>
                {images.map((img, i) => (
                    <>
                        <img
                            key={img.id}
                            src={`http://127.0.0.1:8000/storage/${img.path}`}
                            alt=''
                            className={
                                activeImg === i ? `${style.main} ${style.active}` : style.main
                            }
                        />
                    </>
                ))}
                <div className={` ${style.images}`}>
                    {images.map((img, i) => (
                        <img
                            onClick={() => changeImg(i)}
                            key={img.id}
                            src={`http://127.0.0.1:8000/storage/${img.path}`}
                            alt=''
                            className={activeImg === i ? `${style.img} ${style.active}` : style.img}
                        />
                    ))}
                </div>
            </div>
            <div>
                <h1 className={style.title}>{data.name}</h1>
                <p className={style.mg40}>Количество товара на складе: {data.quantity}</p>
                <h2 className={style.mg40}>{data.price} ₽</h2>
                <button className={`btn ${style.mg40}`}>Купить</button>
                <h5 className={style.subtitle}>Описание</h5>
                <p>{data.description}</p>
            </div>
        </div>
    );
}

export default ProductInfo;
