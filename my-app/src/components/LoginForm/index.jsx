import Link from 'next/link';
import React from 'react';

export default function LoginForm() {
    return (
        <>
            <h1>Авторизация</h1>
            <form
                method='post'
                action={'http://127.0.0.1:8000/api/v1/login'}>
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
            <Link href={'/registration/'}>Нет аккаунта? Зарегистрироваться!</Link>
        </>
    );
}
