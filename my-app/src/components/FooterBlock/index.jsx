'use client';

import React from 'react';
import Link from 'next/link';

import style from './FooterBlockStyle.module.scss';

export const FooterBlock = () => {
    return (
        <div className='container'>
            <footer className={style.footer}>
                <nav className={style.navigation}>
                    {/* Навигация */}
                    <ul>
                        <li className={`${style.main} ${style.item}`}>Навигация</li>
                        <li className={style.item}>
                            <Link href='/'>Главная</Link>
                        </li>
                        <li className={style.item}>
                            <Link href='/products'>Магазин</Link>
                        </li>
                        <li className={style.item}>
                            <Link href='/cart'>Корзина</Link>
                        </li>
                        <li className={style.item}>
                            <Link href='/account'>Аккаунт</Link>
                        </li>
                    </ul>
                    {/* Контакты */}
                    <ul>
                        <li className={`${style.main} ${style.item}`}>Контакты</li>
                        <li className={style.item}>
                            <a href='tel:+79999999999'>+7 (999) 999-99-99</a>
                        </li>
                        <li className={style.item}>
                            <a href='https://www.whatsapp.com/'>WhatsApp</a>
                        </li>
                        <li className={style.item}>
                            <a href='mailhref:beverlysound.mail.ru'>beverlysound.mail.ru</a>
                        </li>
                    </ul>
                    {/* Соцсети */}
                    <ul>
                        <li className={`${style.main} ${style.item}`}>Соцсети</li>
                        <li className={style.item}>
                            <a href='https://vk.com/'>ВКонтакте</a>
                        </li>
                        <li className={style.item}>
                            <a href='https://web.telegram.org/'>Телеграм</a>
                        </li>
                        <li className={style.item}>
                            <a href='https://www.youtube.com/'>YouTube</a>
                        </li>
                    </ul>
                </nav>
                <p className={style.copyrights}>© Магазин персонального аудио «TO KU», 2007-2024</p>
            </footer>
        </div>
    );
};
