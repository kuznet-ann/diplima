'use client';

import React from 'react';

import style from './ProductTable.module.scss';
import Link from 'next/link';

export default function ProductTable({ products }) {
    return (
        <table>
            <tbody>
                <tr>
                    <th className={style.short}>id</th>
                    <th className={style.base}>name</th>
                    <th className={style.base}>price</th>
                    <th className={style.descr}>description</th>
                    <th className={style.short}>quantity</th>
                    <th className={style.short}>available</th>
                    <th className={style.short}>изменить</th>
                </tr>
                {products.map((el) => (
                    <tr>
                        <td className={style.short}>{el.id}</td>
                        <td className={style.base}>{el.attributes.name}</td>
                        <td className={style.base}>{el.attributes.price}</td>
                        <td className={style.descr}>{el.attributes.description}</td>
                        <td className={style.short}>{el.attributes.quantity}</td>
                        <td className={style.short}>
                            {el.attributes.available ? 'доступен' : ' скрыт'}
                        </td>
                        <td className={style.short}>
                            <Link
                                className={style.link}
                                href={`/admin/${el.id}`}>
                                Изменить
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
