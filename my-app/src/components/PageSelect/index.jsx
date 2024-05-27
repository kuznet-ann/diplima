'use client';

import React from 'react';
import Link from 'next/link';

import style from './PageSelect.module.scss';
import { useSearchParams } from 'next/navigation';

export const PageSelect = ({ products }) => {
    const searchParams = useSearchParams(),
        sort = searchParams.get('sort'),
        filter = searchParams.get('filter[shape]');
    const lastPage = products.meta.last_page;

    let params = '';

    if (sort != null) {
        params = params + '&sort=' + sort;
    }

    if (filter != null) {
        params = params + '&filter[shape]=' + filter;
    }

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
                        href={`?page=${el.label + params}`}>
                        {el.label}
                    </Link>
                ) : (
                    ''
                ),
            )}
        </div>
    );
};
