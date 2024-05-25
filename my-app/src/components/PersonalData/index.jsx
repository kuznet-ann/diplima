'use client';

import React from 'react';

import style from './PersonalData.module.scss';

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    await postData(data);
};

export default function PersonalData() {
    return (
        <form
            onSubmit={onSubmit}
            className={style.form}>
            <h4>Персональные данные</h4>
            <input
                name='lastname'
                placeholder='Фамилия'
            />
            <input
                name='name'
                placeholder='Имя'
            />
            <input
                name='surname'
                placeholder='Отчество'
            />
            <input
                type='tel'
                name='tel'
                placeholder='Телефон'
            />
            <input
                type='email'
                name='email'
                placeholder='Почта'
            />
            <button type='submit'>Изменить</button>
        </form>
    );
}
