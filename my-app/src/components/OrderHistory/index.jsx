'use client';
import React from 'react';

export async function exit(token) {
    const response = await fetch(`http://localhost:3000/api/v1/logout`, {
        cache: 'no-store',
        headers: {
            Accept: 'application/vnd.api+json',
            Authorization: `Bearer ${token}`,
        },
        method: 'POST',
    });
    return new Response(null, {
        status: response.status,
    });
}

const onDelete = async ({ token }) => {
    const response = await exit(token);
};

import style from './OrderHistory.module.scss';

export default function OrderHistory({ token }) {
    return (
        <div>
            <button onClick={() => onDelete(token)}>Выйти</button>
            <h4>История заказов</h4>
            <div className={style.wrapper}>
                <span>
                    <p className={style.title}>Время</p>
                    <p className={style.fz16}>17.01.2024 17:43</p>
                </span>
                <span>
                    <p className={style.title}>Номер</p>
                    <p className={style.fz16}>№ 109432</p>
                </span>
                <span>
                    <p className={style.title}>Статус</p>
                    <p className={style.fz16}>Доставлено</p>
                </span>
                <span>
                    <p className={style.title}>Оплата</p>
                    <p className={style.fz16}>Оплата</p>
                </span>
                <span>
                    <p className={style.title}>Сумма</p>
                    <p className={style.fz16}>5990₽</p>
                </span>
            </div>
        </div>
    );
}
