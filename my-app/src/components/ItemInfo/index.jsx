'use client';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';

import style from './ItemInfo.module.scss';

const postDataProduct = async (data) => {
    const response = await fetch(`http://localhost:3000/api/v1/products/`, {
        body: JSON.stringify(data),
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json',
        },

        method: 'POST',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return new Response(null, {
        status: response.status,
    });
};

const updateData = async (id, data) => {
    const response = await fetch(`http://localhost:3000/api/v1/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json',
        },
        body: JSON.stringify(data),
        cache: 'no-store',
    });
    if (!response.ok && response.status != 422) {
        throw new Error(response.status);
    }
    return new Response(null, {
        status: response.status,
    });
};

const deleteData = async (id) => {
    const response = await fetch(`http://localhost:3000/api/v1/products/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json',
        },
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error(response.status);
    }

    return new Response(null, {
        status: response.status,
    });
};

const onDelete = async (id, router) => {
    const response = await deleteData(id);
    if (response.status === 204) {
        router.push('/admin');
        router.refresh();
    }
};

const onSubmit = async (event, router) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const response = await postDataProduct(data);
    if (response.status === 201) {
        router.push('/admin');
    }
};

const onUpdate = async (event, id, router) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const response = await updateData(id, data);
    if (response.status === 422) {
        // console.log(event.target);
        return false;
    }
    if (response.status === 204) {
        router.push('/admin');
    }
    return true;
};

export default function ItemInfo({ items, id, shapes, materials }) {
    const [error, setError] = useState('');
    const router = useRouter();
    return (
        <div className={style.wrapper}>
            <form
                method='post'
                className={style.form}
                onSubmit={
                    items
                        ? (event) => {
                              onUpdate(event, id, router)
                                  ? setError('Данное имя ужее используется')
                                  : setError('');
                          }
                        : (event) => onSubmit(event, router)
                }>
                {items ? (
                    <div>
                        <label htmlFor='id'>ID: </label>
                        <input
                            key={items.id}
                            id='id'
                            className={style.text}
                            type='text'
                            defaultValue={items.id}
                            hidden
                        />
                        {items.id}
                    </div>
                ) : (
                    ''
                )}
                <div className={style.info}>
                    <label htmlFor='name'>name: </label>
                    <input
                        id='name'
                        name='name'
                        className={style.text}
                        type='text'
                        defaultValue={items ? items.attributes.name : ''}
                    />
                    <p className={`error ${style.err}`}>{error}</p>
                </div>
                <div className={style.info}>
                    <label htmlFor='name'>price: </label>
                    <input
                        id='price'
                        name='price'
                        className={style.text}
                        type='text'
                        defaultValue={items ? items.attributes.price : ''}
                    />
                </div>
                <div className={style.info}>
                    <label htmlFor='descr'>description: </label>
                    <textarea
                        id='descr'
                        name='description'
                        className={style.descr}
                        type='text'
                        defaultValue={items ? items.attributes.description : ''}></textarea>
                </div>
                <div className={style.info}>
                    <label htmlFor='quantity'>quantity: </label>
                    <input
                        id='quantity'
                        name='quantity'
                        className={style.text}
                        type='number'
                        defaultValue={items ? items.attributes.quantity : ''}
                    />
                </div>
                <div className={style.flex}>
                    <input
                        id='available'
                        name='available'
                        type='checkbox'
                        defaultChecked={items ? items.attributes.available : ''}
                    />
                    <label htmlFor='available'>Доступен/скрыт</label>
                </div>
                <div className={style.flex}>
                    <select
                        name='shape_id'
                        defaultValue='1'>
                        {shapes.map((item) => (
                            <option
                                key={item.id}
                                value={item.id}>
                                {item.attributes.name}
                            </option>
                        ))}
                    </select>
                    <select
                        name='material_id'
                        defaultValue='1'>
                        {materials.map((item) => (
                            <option
                                key={item.id}
                                value={item.id}>
                                {item.attributes.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    className={style.btn}
                    type='submit'>
                    {items ? 'Изменить' : 'Добавить'}
                </button>
            </form>

            {items ? (
                <button
                    className={`${style.btn} ${style.delete}`}
                    onClick={() => onDelete(id, router)}
                    type='submit'>
                    Удалить
                </button>
            ) : (
                ''
            )}
        </div>
    );
}
