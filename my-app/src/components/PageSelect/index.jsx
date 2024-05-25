'use client';

import React from 'react';
import Link from 'next/link';

import style from './PageSelect.module.scss';

export const PageSelect = ({ products }) => {
    const lastPage = products.meta.last_page;

    return (
        <div className={style.wrapper}>
            {products.meta.links.slice(1, lastPage + 1).map((el, i) =>
                el.url ? (
                    <Link
                        key={i}
                        className={el.active ? `${style.arrows} ${style.active}` : style.arrows}
                        // href={`?page=${new URLSearchParams(
                        //     el.url.substring(el.url.indexOf('?')),
                        // ).get('page')}`}>
                        href={`?page=${el.label}`}>
                        {el.label}
                    </Link>
                ) : (
                    ''
                ),
            )}
        </div>
    );
};
