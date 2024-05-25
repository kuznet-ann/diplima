'use client';

import React from 'react';

import style from './PaymentMethod.module.scss';

import cardOnlineImg from '../../../public/assets/icons/card-online-payment.svg';
import cardImg from '../../../public/assets/icons/card-payment.svg';
import cashImg from '../../../public/assets/icons/cash-payment.svg';

export default function PaymentMethod() {
    const [active, setActive] = React.useState(1);

    const [dataMethod, setDataMethod] = React.useState([
        {
            id: 1,
            methodTitle: 'Картой онлайн',
            methodClass: style.method,
            methodClicked: false,
            methodImage: cardOnlineImg.src,
        },
        {
            id: 2,
            methodTitle: 'Картой в магазине',
            methodClass: style.method,
            methodClicked: false,
            methodImage: cardImg.src,
        },
        {
            id: 3,
            methodTitle: 'Наличными в магазине',
            methodClass: style.method,
            methodClicked: false,
            methodImage: cashImg.src,
        },
    ]);

    const Method = ({ id, methodTitle, methodClass, methodImage, isActive }) => {
        return (
            <div
                className={isActive === id ? `${methodClass} ${style.active}` : methodClass}
                onClick={() => activeMethod(id)}>
                <img
                    src={methodImage}
                    alt=''
                />
                <span>{methodTitle}</span>
            </div>
        );
    };

    const activeMethod = (id) => {
        setActive(id);
    };

    return (
        <div>
            <h4>Способ оплаты</h4>
            <div className={style.wrapper}>
                {dataMethod.map((el) => (
                    <Method
                        key={el.id}
                        {...el}
                        isActive={active}
                        onClick={activeMethod}
                    />
                ))}
            </div>
        </div>
    );
}
