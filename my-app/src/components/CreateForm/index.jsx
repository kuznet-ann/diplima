'use client';

import React from 'react';

import style from './CreateForm.module.scss';

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    await postData(data);
};

export default function CreateForm({ shapes, materials }) {
    return (
        <form
            className={style.form}
            onSubmit={onSubmit}>
            <h1 className={style.title}>Создать свой дизайн</h1>
            <label htmlFor='shape-select'>Выберите форму</label>
            <select
                className={style.info}
                name='shapes'
                id='shape-select'>
                {shapes.data.map((shape) => (
                    <option value={shape.attributes.name}>{shape.attributes.name}</option>
                ))}
            </select>

            <label htmlFor='material-select'>Выберите материал</label>
            <select
                className={style.info}
                name='materials'
                id='material-select'>
                {materials.data.map((material) => (
                    <option value={material.attributes.name}>{material.attributes.name}</option>
                ))}
            </select>

            <label htmlFor='name'>Имя питомца</label>
            <input
                className={style.info}
                name='name'
                id='name'
                placeholder='Имя'
            />

            <label htmlFor='phone'>Номер телефона</label>
            <input
                className={style.info}
                name='phone'
                id='phone'
                placeholder='Номер'
            />

            <label htmlFor='img'>Выберите рисунок</label>
            <input
                className={style.info}
                name='img'
                id='img'
                type='file'
            />

            <button type='submit'>Добавить</button>
        </form>
    );
}
