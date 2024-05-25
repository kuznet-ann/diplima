import React from 'react';

import style from './Counter.module.scss';

import increase from '../../../public/assets/icons/increase.svg';
import decrease from '../../../public/assets/icons/decrease.svg';

export default function Counter() {
    return (
        <div className={style.count}>
            <div>
                <img
                    src={increase.src}
                    alt=''
                />
            </div>
            <span>1</span>
            <div>
                <img
                    src={decrease.src}
                    alt=''
                />
            </div>
        </div>
    );
}
