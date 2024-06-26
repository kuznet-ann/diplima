// 'use client';

import React from 'react';

import Logo from '../../../public/assets/icons/Logo.svg';
import Bag from '../../../public/assets/icons/bag.svg';
import Account from '../../../public/assets/icons/account.svg';

import style from './MenuBlockStyle.module.scss';
import Link from 'next/link';

function MenuBlock({ auth }) {
    return (
        <div className='container'>
            <header className={style.menu}>
                <nav className={style.navigation}>
                    <ul className={style.list}>
                        <li className={style.menu__item}>
                            <Link
                                href={'/'}
                                className={style.link}>
                                <img
                                    src={Logo.src}
                                    alt=''
                                    className='menu__img'
                                />
                            </Link>
                        </li>
                        <li className='menu__item'>
                            <Link
                                href='/?page=1'
                                className={style.link}>
                                Каталог
                            </Link>
                        </li>
                        <li className='menu__item'>
                            <Link
                                href='/create'
                                className={style.link}>
                                Конструктор
                            </Link>
                        </li>
                    </ul>
                    <ul className={style.icons}>
                        <li className='menu__icons-item'>
                            <Link
                                href='/cart'
                                className={style.link}>
                                <img
                                    src={Bag.src}
                                    alt=''
                                    className='menu__icon'
                                />
                            </Link>
                        </li>
                        {auth ? (
                            <li className='menu__icons-item'>
                                <Link
                                    href='/account'
                                    className={style.link}>
                                    <img
                                        src={Account.src}
                                        alt=''
                                        className='menu__icon'
                                    />
                                </Link>
                            </li>
                        ) : (
                            <li className='menu__icons-item'>
                                <Link
                                    href='/login'
                                    className={style.link}>
                                    <img
                                        src={Account.src}
                                        alt=''
                                        className='menu__icon'
                                    />
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default MenuBlock;
