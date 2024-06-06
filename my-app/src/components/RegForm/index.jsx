'use client';

import React from 'react';
import Link from 'next/link';

import style from './RegForm.module.scss';

const postData = async (data) => {
    const response = await fetch(`http://localhost:3000/api/v1/registrate`, {
        body: JSON.stringify(data),
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json',
        },
        method: 'POST',
    });
    if (!response.ok) {
        console.log(response);
        throw new Error(404);
    }

    return new Response(null, {
        status: response.status,
    });
};

const onSubmit = async (event, router) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const response = await postData(data);
    // if (response.status === 201) {
    //     router.push('/admin');
    // }
};

export default function RegForm() {
    return (
        <>
            <h1 className='tac'>Регистрация</h1>
            <form
                className={style.form}
                method='post'
                onSubmit={onSubmit}>
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
                {/* <p className='error'>
                    Поле должно содержать специальные символы (!, @, #, $, %, ^, &, *)
                </p> */}
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
            <Link
                className={style.link}
                href={'/login/'}>
                Есть аккаунт? Войти!
            </Link>
        </>
    );
}
