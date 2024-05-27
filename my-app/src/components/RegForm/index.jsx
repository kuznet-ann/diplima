'use client';

import React from 'react';
import Link from 'next/link';

import style from './RegForm.module.scss';

const postData = async (data) => {
    console.log(data);
    const response = await fetch(`http://localhost:8000/api/v1/users`, {
        method: 'POST',
        body: data,
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
};

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // const data = Object.fromEntries(formData);
    console.log(formData);
    await postData(formData);
};

export default function RegForm() {
    return (
        <>
            <h1>Регистрация</h1>
            <form
                className={style.form}
                method='post'
                onSubmit={onSubmit}
                // action={'http://127.0.0.1:3000/api/v1/registrate'}
            >
                <input
                    name='name'
                    type='text'
                    placeholder='Логин'
                    required
                />
                <input
                    name='password'
                    type='password'
                    placeholder='Пароль'
                    required
                />
                <input
                    name='email'
                    type='email'
                    placeholder='Почта'
                    required
                />
                <input
                    name='phone'
                    type='tel'
                    placeholder='Телефон'
                    required
                />
                <button type='submit'>Зарегистрироваться</button>
            </form>
            <Link href={'/login/'}>Есть аккаунт? Войти!</Link>
        </>
    );
}
