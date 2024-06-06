'use client';

import Link from 'next/link';
import React from 'react';

import style from './LoginForm.module.scss';

const postData = async (data) => {
    const response = await fetch(`http://localhost:3000/api/v1/login`, {
        body: JSON.stringify(data),
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json',
            // 'API-Key': process.env.DATA_API_KEY,
        },
        method: 'POST',
    });
    if (!response.ok) {
        // Activates the closest `error.js` error boundary.
        throw new Error(response.statusText);
    }

    return response.json();
};

const onSubmit = async (event, router) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const response = await postData(data);
    alert(response.token);

    // if (response.status === 201) {
    //     router.push('/admin');
    // }
};

export default function LoginForm() {
    return (
        <>
            <h1 className='tac'>Авторизация</h1>
            <form
                className={style.form}
                onSubmit={onSubmit}
                method='post'>
                <input
                    name='email'
                    type='text'
                    placeholder='Имя пользователя'
                    required
                />
                <input
                    name='password'
                    type='password'
                    placeholder='Пароль'
                    required
                />
                <button type='submit'>Войти</button>
            </form>
            <Link
                className={style.link}
                href={'/registration/'}>
                Нет аккаунта? Зарегистрироваться!
            </Link>
        </>
    );
}
