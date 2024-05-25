import React from 'react';

import PaymentMethod from '../PaymentMethod/';
import DeliveryInfo from '../DeliveryInfo/';

import style from './PaymentBlock.module.scss';

export default function PaymentBlock() {
    return (
        <div className={style.wrapper}>
            <PaymentMethod />
            <DeliveryInfo />
        </div>
    );
}
