'use client';

import Link from 'next/link';
import React from 'react';

const postData = async (data) => {
    // const response = await fetch(`http://127.0.0.1:8000/api/v1/login`, {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    // });
    // if (!response.ok) {
    //     throw new Error(response.status);
    // }
    // return response.json();
    console.log('h1');

    const url = new URL('http://localhost:8000/api/v1/login');
    const response = await fetch(url, {
        body: JSON.stringify({
            email: 'user@example.com',
            password: '12345678',
        }),
        headers: {
            Accept: 'application/vnd.api+json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });
    if (!response.ok) {
        // Activates the closest `error.js` error boundary.
        throw new Error(response.statusText);
    }

    return await response.json();
};

export default function LoginForm() {
    return (
        <>
            <h1>Авторизация</h1>
            <form
                method='post'
                // action={'http://localhost:8000/api/v1/login'}
            >
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
                <button
                    onSubmit={async () => {
                        // window.preventDefault();
                        const response = await postData();
                        alert(response.token);
                        console.log(response.token);
                    }}
                    type='submit'>
                    Войти
                </button>
            </form>
            <Link href={'/registration/'}>Нет аккаунта? Зарегистрироваться!</Link>
        </>
    );
}
