'use client';

import React from 'react';
import Link from 'next/link';

import style from './RegForm.module.scss';

export default function RegForm({ x }) {
    return (
        <>
            {/* {JSON.stringify(props)} */}
            <h1>Регистрация</h1>
            <form
                onSubmit={x}
                className={style.form}
                method='post'
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
                    name='phone'
                    type='tel'
                    placeholder='Телефон'
                    required
                />
                <input
                    name='email'
                    type='email'
                    placeholder='Почта'
                    required
                />
                <button type='submit'>Зарегистрироваться</button>
            </form>
            <Link href={'/login/'}>Есть аккаунт? Войти!</Link>
        </>
    );
}
