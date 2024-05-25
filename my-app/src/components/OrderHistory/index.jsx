import React from 'react';

import style from './OrderHistory.module.scss';

export default function OrderHistory() {
    return (
        <div>
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
