'use client';

import React from 'react';

import style from './Categories.module.scss';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const sort = [
    { name: 'от А до Я', key: 'name' },
    { name: 'от Я до А', key: '-name' },
    { name: 'по убывании цены', key: '-price' },
    { name: 'по возрастанию цены', key: 'price' },
];

export default function Categories({ items }) {
    const searchParams = useSearchParams(),
        url = usePathname();

    // const params = {
    //     page: searchParams.get('page'),
    //     sort: searchParams.get('sort'),
    //     'filter[shape]': searchParams.get('filter[shape]'),
    // };

    let x = `?page=${searchParams.get('page')}&sort=${searchParams.get('sort')}`;

    const y = [`?page=`, searchParams.get('page'), `&sort=`, searchParams.get('sort')];

    if (searchParams.get('sort') === null) {
        y[2] = '';
        y[3] = '';
    }
    // if (searchParams.get('page') === null) {
    //     y[0] = '';
    //     y[1] = '';
    // }
    // if (searchParams.get('filter[shape]') === null) {
    //     y[2] = '';
    // }

    return (
        <div className={style.wrapper}>
            {x}
            {/* <Link href={'/create'}>Создать</Link> */}
            <button
                name='shapes'
                className={style.select}>
                все виды
            </button>
            <Link href={`${x}`}>Все виды -</Link>
            {items.data.map((shape, i) => (
                <Link
                    key={i}
                    href={`${x}&filter[shape]=${shape.attributes.name}`}>
                    {shape.attributes.name + ' -'}
                </Link>
            ))}

            {/* <div className={style.dropdown}>
                <div className={style.select}>
                    <span className={style.selected}></span>
                    <div className={style.caret}></div>
                </div>
            </div> */}
            {/* <ul className='menu'> */}

            {sort.map((item, i) => (
                <Link
                    key={i}
                    href={`?page=${searchParams.get('page')}&sort=${item.key}`}
                    value={item.name}>
                    {'  .  ' + item.name}
                </Link>
            ))}
            {/* </ul> */}
        </div>
    );
}
