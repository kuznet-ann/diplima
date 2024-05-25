'use client';

import React from 'react';

import style from './DeliveryInfo.module.scss';

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    await postData(data);
};

export default function DeliveryInfo() {
    return (
        <>
            <h4 className={style.title}>Ваши данные</h4>
            <form
                onSubmit={onSubmit}
                className={style.form}>
                <input
                    className={style.input}
                    name='lastname'
                    placeholder='Фамилия'
                />
                <input
                    className={style.input}
                    name='name'
                    placeholder='Имя'
                />
                <input
                    className={style.input}
                    name='surname'
                    placeholder='Отчество'
                />
                <input
                    className={style.short}
                    type='tel'
                    name='tel'
                    placeholder='Телефон'
                />
                <input
                    className={style.short}
                    type='email'
                    name='email'
                    placeholder='Почта'
                />
                <input
                    className={style.input}
                    type='text'
                    name='abres'
                    placeholder='Адрес'
                />
                <textarea
                    className={style.text}
                    placeholder='Укажите имя питомца и номер телефона'></textarea>

                <div className={style.policy}>
                    <input
                        className={style.input}
                        type='checkbox'
                        name='policy'
                        id='policy'
                    />
                    <label htmlFor='policy'>Я согласен на обработку персональных данных</label>
                </div>

                <button type='submit'>Изменить</button>
            </form>
        </>
    );
}
