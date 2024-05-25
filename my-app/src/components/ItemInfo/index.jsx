'use client';

import React from 'react';

import style from './ItemInfo.module.scss';

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    await postData(data);
};

export default function ItemInfo({ items }) {
    return (
        <form
            className={style.form}
            onSubmit={onSubmit}>
            <div>
                <label htmlFor='id'>ID: </label>
                <input
                    id='id'
                    className={style.text}
                    type='text'
                    value={items.id}
                    hidden
                />
                {items.id}
            </div>
            <div className={style.info}>
                <label htmlFor='name'>name: </label>
                <input
                    id='name'
                    name='name'
                    className={style.text}
                    type='text'
                    value={items.attributes.name}
                />
            </div>
            <div className={style.info}>
                <label htmlFor='name'>price: </label>
                <input
                    id='price'
                    name='price'
                    className={style.text}
                    type='text'
                    value={items.attributes.price}
                />
            </div>
            <div className={style.info}>
                <label htmlFor='descr'>description: </label>
                <textarea
                    id='descr'
                    name='descr'
                    className={style.descr}
                    type='text'
                    value={items.attributes.description}></textarea>
            </div>
            <div className={style.info}>
                <label htmlFor='quantity'>quantity: </label>
                <input
                    id='quantity'
                    name='quantity'
                    className={style.text}
                    type='number'
                    value={items.attributes.quantity}
                />
            </div>
            <div>
                <input
                    id='available'
                    name='available'
                    type='checkbox'
                    defaultChecked={items.attributes.available}
                />
                <label htmlFor='available'>
                    {items.attributes.available ? 'доступен' : ' скрыт'}
                </label>
            </div>
            <button type='submit'>изменить</button>
        </form>
    );
}
